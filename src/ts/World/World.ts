// Trace.js - World.ts

/// <reference path="./ViewPlane.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Tracers/SingleSphere.ts" />
/// <reference path="./../Tracers/RayCast.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Point2D.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/Utils.ts" />
/// <reference path="./../GeometricObjects/Primitives/Sphere.ts" />
/// <reference path="./../Samplers/Sampler.ts" />
/// <reference path="./../Samplers/Regular.ts" />
/// <reference path="./../Cameras/Camera.ts" />
/// <reference path="./../Cameras/Orthographic.ts" />
/// <reference path="./../Cameras/Pinhole.ts" />
/// <reference path="./../Lights/Light.ts" />
/// <reference path="./../Lights/AmbientLight.ts" />
/// <reference path="./../Lights/DirectionalLight.ts" />
/// <reference path="./../Lights/PointLight.ts" />
/// <reference path="./../BRDFs/BRDF.ts" />
/// <reference path="./../BRDFs/Lambertian.ts" />
/// <reference path="./../BRDFs/GlossySpecular.ts" />
/// <reference path="./../Materials/Material.ts" />
/// <reference path="./../Materials/Matte.ts" />
/// <reference path="./../Materials/Phong.ts" />

module Tracejs {
    export class World {
        background_color : RGBColor;

        view_plane : ViewPlane;
        view_plane_zw: number;
        view_plane_matrix : RGBColor[][];

        ambient_brdf : Lambertian;
        diffuse_brdf : Lambertian;
        specular_brdf : GlossySpecular;
        material : Material;

        objects : Sphere[]; // TODO : assume for now all objects are spheres
        tracer : RayCast;

        lights :  Light[];
        ambient_ptr : AmbientLight;

        camera : Camera;

        constructor(background_color?: RGBColor) {
            this.view_plane = new ViewPlane(); // Create default ViewPlane.
            this.view_plane.set_sampler(new Regular(10)); // Set sampler (10 samples / pixel).
            this.view_plane_zw = 100.0; // Create default view plane z-distance.

            this.ambient_brdf = new Lambertian(1.0, new RGBColor(0.2, 0.2, 0.2));
            this.diffuse_brdf = new Lambertian(1.0, new RGBColor(0.4, 0.9, 0.1));
            this.specular_brdf = new GlossySpecular(1, 100, new RGBColor(0.8, 0.8, 0.8));

            this.material = new Phong(this.ambient_brdf, this.diffuse_brdf, this.specular_brdf);

            this.objects = [];
            this.objects[0] = new Sphere(this.material, null, new Point3D(-50.0, 0.0, 0.0), 100.0); // for legacy testing purposes
            //this.objects[1] = new Sphere(this.material, null, new Point3D(100.0, -80.0, 200.0), 100.0);

            this.tracer = new RayCast(this);

            this.lights = [];
            this.lights[0] = new PointLight(false, 1.0, 
                                                  new RGBColor(1.0, 1.0, 1.0), 
                                                  new Vector3D(300.0, 300.0, 0.0));

            this.ambient_ptr = new AmbientLight(false, 1.0, new RGBColor(1.0, 1.0, 1.0));

            this.camera = new Pinhole();
            //this.camera = new Orthographic();

            if (background_color) {
                this.background_color = background_color;
            }
            else {
                this.background_color = new RGBColor(0.0, 0.0, 0.0); // Create black background_color.
            }
        }

        // TODO : All API calls should have good error handling because World is exposed to the user
        // TODO : API returns Tracejs objects, except for renderScene which returns JSON
        // class methods

        /**
         * renderScene()
         * @param fixture
         * @returns {string}
         */
        renderScene(fixture?: boolean, callback ?: any) : any {
            this.camera.render_scene(this);

            return JSON.stringify(this.view_plane_matrix);
        }

        hit_objects(ray : Ray) : ShadeRec {
            var sr : ShadeRec = new ShadeRec(this);
            var normal : Normal;
            var local_hit_point : Point3D;
            var tmin : number = kHugeValue;
            var num_objects = this.objects.length;

            for (var i = 0; i < num_objects; ++i) {
                if (this.objects[i].hit(ray, sr) && (sr.t < tmin)) {
                    sr.hit_an_object = true;
                    tmin = sr.t;
                    sr.material_ptr = this.objects[i].material;
                    sr.hit_point = ray.o.add_vector(ray.d.mult(sr.t));
                    normal = sr.normal;
                    local_hit_point = sr.local_hit_point;
                }
            }

            if (sr.hit_an_object) {
                sr.t = tmin;
                sr.normal = normal;
                sr.local_hit_point = local_hit_point;
            }

            return sr;
        }

        /**
         * vp()
         * @param hres
         * @param vres
         * @param psize
         * @returns {ViewPlane|function(number=, number=, number=): ViewPlane}
         */
        vp(hres?: number, vres?: number, psize?: number) : ViewPlane {

            // setter
            if (hres > 0 || vres > 0 || psize > 0) {
                if (hres) {
                    this.view_plane.setHres(hres);
                }
                if (vres) {
                    this.view_plane.setVres(vres);
                }
                if (psize) {
                    this.view_plane.setPsize(psize);
                }
                return this.view_plane;
            }

            // getter
            else {
                return this.view_plane;
            }
        }

        /**
         * vpzw()
         * @param zw
         * @returns {number}
         */
        vpzw(zw?: number) : number {

            // setter
            if (zw > 0) { // we will not allow negative z-distance
                this.view_plane_zw = zw;
                return this.view_plane_zw;
            }

            // getter
            else {
                return this.view_plane_zw;
            }
        }

        /**
         * bgColor()
         * @param background_color
         * @returns {RGBColor}
         */
        bgColor(r ?: number, g ?: number, b ?: number) : RGBColor {

            // setter
            if (r >= 0 && r <= 255 && g >= 0 && g <=255 && b >= 0 && b <= 255) {
                this.background_color = new RGBColor(r, g, b);
                return this.background_color;
            }

            // getter
            else {
                return this.background_color;
            }
        }

        /**
         * object()
         * @param object
         * @returns {Sphere[]}
         */
        object(object ?: any) : any {
            if (object) {
                // TODO: assume for now that all objects are spheres
                for (var i : number = 0; i < object.length; i++) {
                    if (object[i]) { // check GUI object exists at index
                        if (this.objects[i]) { // if this World has object at index, update it
                            if (object[i].center) {
                                this.objects[i].set_center(new Point3D(object[i].center.x, object[i].center.y, object[i].center.z))
                            }
                            if (object[i].radius > 0) {
                                this.objects[i].set_radius(object[i].radius)
                            }
                            if (object[i].color) {
                                this.objects[i].set_color(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b))
                            }
                            if (object[i].material) {
                                if (object[i].material === 'matte') {
                                    this.objects[i].set_material(new Matte(this.ambient_brdf, this.diffuse_brdf))
                                }
                                else if (object[i].material === 'phong') {
                                    this.objects[i].set_material(new Phong(this.ambient_brdf, this.diffuse_brdf, this.specular_brdf))
                                }
                            }
                        }
                        else { // else create a new object at this index
                            // set defaults
                            var material = this.material,
                                color =  new RGBColor(255,255,255),
                                center = new Point3D(0,0,0),
                                radius = 50;

                            if (object[i].center) {
                                center = new Point3D(object[i].center.x, object[i].center.y, object[i].center.z)
                            }
                            if (object[i].radius > 0) {
                                radius = object[i].radius
                            }
                            if (object[i].color) {
                                color = new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b)
                            }
                            if (object[i].material) {
                                if (object[i].material === 'matte') {
                                    material = new Matte(this.ambient_brdf, this.diffuse_brdf)
                                }
                                else if (object[i].material === 'phong') {
                                    material = new Phong(this.ambient_brdf, this.diffuse_brdf, this.specular_brdf)
                                }
                            }

                            this.objects[i] = new Sphere(material, color, center, radius)
                        }
                    }
                    else {
                        console.log("World object(): object array is empty")
                    }
                }
            }
            return this.objects
        }

        /**
         * sampler()
         * @param sp
         * @param num_samples
         * @returns {Sampler}
         */
        sampler(sp ?: string, num_samples ?: number) : Sampler {
            if (sp && num_samples > 0) {
                var newSampler;
                sp = sp.toLowerCase();
                switch (sp) {
                    case 'regular':
                        newSampler = new Regular(num_samples);
                        break;
                    case 'multijittered':
                        newSampler = new MultiJittered(num_samples);
                        break;
                    default:
                        newSampler = new Regular(num_samples)
                }
                this.view_plane.set_sampler(newSampler);
            }
            else if (num_samples < 0) {
                console.log("World sampler: called with num_samples < 0! Sampler not set")
            }
            return this.view_plane.sampler
        }
    }
}
