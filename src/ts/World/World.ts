// Trace.js - World.ts

/// <reference path="./ViewPlane.ts" />

/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Point2D.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/Utils.ts" />

/// <reference path="./../GeometricObjects/GeometricObject.ts" />
/// <reference path="./../GeometricObjects/Primitives/Sphere.ts" />
/// <reference path="./../GeometricObjects/Primitives/Triangle.ts" />
/// <reference path="./../GeometricObjects/Primitives/Torus.ts" />
/// <reference path="./../GeometricObjects/Primitives/Plane.ts" />

/// <reference path="./../Samplers/Sampler.ts" />
/// <reference path="./../Samplers/Regular.ts" />
/// <reference path="./../Samplers/MultiJittered.ts" />

/// <reference path="./../Tracers/SingleSphere.ts" />
/// <reference path="./../Tracers/RayCast.ts" />
/// <reference path="./../Tracers/Whitted.ts" />

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
/// <reference path="./../BRDFs/PerfectSpecular.ts" />

/// <reference path="./../Materials/Material.ts" />
/// <reference path="./../Materials/Matte.ts" />
/// <reference path="./../Materials/Phong.ts" />
/// <reference path="./../Materials/Reflective.ts" />

module Tracejs {
    export class World {
        background_color : RGBColor;

        view_plane : ViewPlane;
        view_plane_zw: number;
        view_plane_matrix : RGBColor[][];

        ambient_brdf : Lambertian[];
        diffuse_brdf : Lambertian[];
        specular_brdf : GlossySpecular[];
        reflective_brdf : PerfectSpecular[];

        material : Material;

        objects : any[];
        tracer : RayCast;

        lights :  any[]; // some methods not inherited (set_color, etc)
        ambient_ptr : AmbientLight;

        world_camera : Camera;

        constructor(background_color?: RGBColor) {
            this.view_plane = new ViewPlane(); // Create default ViewPlane.
            this.view_plane.set_sampler(new Regular(10)); // Set sampler (10 samples / pixel).
            this.view_plane_zw = 100.0; // Create default view plane z-distance.

            this.ambient_brdf = [new Lambertian(1.0, new RGBColor(0.2, 0.2, 0.2))];
            this.diffuse_brdf = [new Lambertian(1.0, new RGBColor(0.9, 0.9, 0.0))];
            this.specular_brdf = [new GlossySpecular(1, 100, new RGBColor(0.8, 0.8, 0.8))];
            this.reflective_brdf = [new PerfectSpecular(0.75, new RGBColor(0.1, 0.1, 0.1))];

            this.material = new Phong(this.ambient_brdf[0], this.diffuse_brdf[0], this.specular_brdf[0]);

            this.objects = [];

            this.tracer = new Whitted(this);

            this.lights = [];

            this.lights[0] = new PointLight(false, 1.0, new RGBColor(1.0, 1.0, 1.0), new Vector3D(300.0, 300.0, 0.0));

            this.ambient_ptr = new AmbientLight(false, 1.0, new RGBColor(1.0, 1.0, 1.0));
        }

        /**
         * renderScene()
         * @param fixture
         * @returns {string}
         */
        renderScene(fixture?: boolean, callback ?: any) : any {
            this.world_camera.render_scene(this);

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
                for (var i:number = 0; i < object.length; i++) {
                    if (object[i]) { // check GUI object exists at index
                        debugger;
                        if (object[i].type === 'sphere') {
                                // set defaults
                                var material = this.material,
                                    color = new RGBColor(1, 1, 1),
                                    center = new Point3D(0, 0, 0),
                                    radius = 50;

                                if (object[i].center) {
                                    center = new Point3D(object[i].center.x, object[i].center.y, object[i].center.z)
                                }
                                if (object[i].radius > 0) {
                                    radius = object[i].radius
                                }
                                if (object[i].color) {
                                    this.diffuse_brdf[i] = new Lambertian(1.0);
                                    this.specular_brdf[i] = new GlossySpecular(1.0, 100.0);
                                    this.ambient_brdf[i] = new Lambertian(1.0);
                                    this.reflective_brdf[i] = new PerfectSpecular(0.75);
                                    this.diffuse_brdf[i].set_cd(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b));
                                    this.specular_brdf[i].set_cs(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b));
                                    this.ambient_brdf[i].set_cd(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b));
                                    this.reflective_brdf[i].set_cr(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b))
                                }
                                if (object[i].material) {
                                    if (object[i].material.type === 'matte') {
                                        material = new Matte(this.ambient_brdf[i], this.diffuse_brdf[i])
                                    }
                                    else if (object[i].material.type === 'phong') {
                                        material = new Phong(this.ambient_brdf[i], this.diffuse_brdf[i], this.specular_brdf[i])
                                    }
                                    else if (object[i].material.type === 'reflective') {
                                        material = new Reflective(this.ambient_brdf[i], this.diffuse_brdf[i], this.specular_brdf[i], this.reflective_brdf[i]);
                                    }
                                }

                                this.objects[i] = new Sphere(material, null, center, radius)
                        }
                        else if (object[i].type === 'triangle') {
                            var material:Material;
                            var p1:Point3D;
                            var p2:Point3D;
                            var p3:Point3D;
                            var color = new RGBColor(1, 0, 0);

                            if (object[i].location) {
                                var loc = object[i].location;
                                p1 = new Point3D(loc.p1[0], loc.p1[1], loc.p1[2]);
                                p2 = new Point3D(loc.p2[0], loc.p2[1], loc.p2[2]);
                                p3 = new Point3D(loc.p3[0], loc.p3[1], loc.p3[2]);
                            }

                            if (object[i].color) {
                                this.diffuse_brdf[i] = new Lambertian(1.0);
                                this.specular_brdf[i] = new GlossySpecular(1.0, 100.0);
                                this.ambient_brdf[i] = new Lambertian(1.0);
                                this.reflective_brdf[i] = new PerfectSpecular(0.75);
                                this.diffuse_brdf[i].set_cd(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b));
                                this.specular_brdf[i].set_cs(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b));
                                this.ambient_brdf[i].set_cd(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b));
                                this.reflective_brdf[i].set_cr(new RGBColor(object[i].color.r, object[i].color.g, object[i].color.b))
                            }

                            if (object[i].material) {
                                if (object[i].material.type === 'matte') {
                                    material = new Matte(this.ambient_brdf[i], this.diffuse_brdf[i])
                                }
                                else if (object[i].material.type === 'phong') {
                                    material = new Phong(this.ambient_brdf[i], this.diffuse_brdf[i], this.specular_brdf[i])
                                }
                                else if (object[i].material.type === 'reflective') {
                                    material = new Reflective(this.ambient_brdf[i], this.diffuse_brdf[i], this.specular_brdf[i], this.reflective_brdf[i]);
                                }
                            }

                            // Errors when we change objects : Sphere[]; -> objects : GeometricObject[];
                            // I did get the triangle to draw tho regardless of the errors.
                            // TO DO: need custom UI for each shape
                            this.objects[i] = new Triangle(material, color, p1, p2, p3);
                        }
                    }
                    else if (object[i].type === 'plane') {
                        if (this.objects[i]) {

                        }
                        else {

                        }
                    }
                    else if (object[i].type === 'torus') {
                        if (this.objects[i]) {

                        }
                        else {

                        }
                    }
                }
                // if World has too many objects, remove them
                if (this.objects.length > object.length) {
                    this.objects = this.objects.slice(0, object.length)
                }
            }
            else {
                console.log("World object(): object array is empty")
            }
            return this.objects;
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

        /**
         * light()
         * @param light
         * @returns {any}
         */
        light(light ?: any) : any {
            if (light) {
                for (var i:number = 0; i < light.length; i++) {
                    if (this.lights[i] && this.lights[i].set_direction ? 'directional' : 'point' === light[i].type) { // check if World has light at index and it's the right type of light
                        var worldLightType:string = this.lights[i].set_direction ? 'directional' : 'point';
                            if (light[i]) { // check if light exists at index
                                if (light[i].color) {
                                    this.lights[i].set_color(new RGBColor(light[i].color.r, light[i].color.g, light[i].color.b))
                                }
                                if (light[i].location) {
                                    if (worldLightType === 'point') { // PointLight
                                        this.lights[i].set_location(new Vector3D(light[i].location.x, light[i].location.y, light[i].location.z))
                                    }
                                    else if (worldLightType === 'directional') { // DirectionalLight
                                        this.lights[i].set_direction(new Vector3D(light[i].location.x, light[i].location.y, light[i].location.z))
                                    }
                                }
                                if (light[i].shadows) {
                                    if (worldLightType === 'point') { // PointLight
                                        this.lights[i].shadows = true;
                                    }
                                }
                            }
                        }
                        else { // create new World light at index
                            var color = new RGBColor(1,1,1),
                                vector = new Vector3D(300,300,0);
                            if (light[i].color) {
                                color = new RGBColor(light[i].color.r, light[i].color.g, light[i].color.b)
                            }
                            if (light[i].location) {
                                vector = new Vector3D(light[i].location.x, light[i].location.y, light[i].location.z)
                            }

                            if (light[i].type === 'point') { // PointLight
                                this.lights[i] = new PointLight(null, 1.0, color, vector)
                                if (light[i].shadows === true) {
                                    this.lights[i].shadows = true; // Only Point Lights should cast shadows.
                                }
                            }
                            else if (light[i].type === 'directional') { // DirectionalLight
                                this.lights[i] = new DirectionalLight(null, 1.0, color, vector)
                            }
                        }
                    }
                // if World has too many lights, remove them
                if (this.lights.length > light.length) {
                    this.lights = this.lights.slice(0, light.length)
                }
            }
            return this.lights
        }

        /**
         * camera()
         * @param camera
         * @returns {Camera}
         */
        camera(camera ?: any) : Camera {
            if (camera) {
                if (camera.type === 'pinhole') {
                    this.world_camera = new Pinhole()
                }
                else if (camera.type === 'orthographic') {
                    this.world_camera = new Orthographic()
                }
            }
            return this.world_camera
        }
    }
}
