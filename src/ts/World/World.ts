// Trace.js - World.ts

/// <reference path="./ViewPlane.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Tracers/SingleSphere.ts" />
/// <reference path="./../Tracers/RayCast.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Point2D.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../GeometricObjects/Primitives/Sphere.ts" />
/// <reference path="./../Samplers/Sampler.ts" />
/// <reference path="./../Samplers/Regular.ts" />
/// <reference path="./../Lights/Light.ts" />
/// <reference path="./../Lights/AmbientLight.ts" />
/// <reference path="./../Lights/DirectionalLight.ts" />
/// <reference path="./../Lights/PointLight.ts" />
/// <reference path="./../BRDFs/BRDF.ts" />
/// <reference path="./../BRDFs/Lambertian.ts" />
/// <reference path="./../Materials/Material.ts" />
/// <reference path="./../Materials/Matte.ts" />

module Tracejs {
    export class World {
        background_color : RGBColor;

        view_plane : ViewPlane;
        view_plane_zw: number;
        view_plane_matrix : RGBColor[][];

        geo_sphere : Sphere;
        ray_cast_tracer : RayCast;

        lights :  Light[];
        ambient_ptr : AmbientLight;

        constructor(background_color?: RGBColor) {
            this.view_plane = new Tracejs.ViewPlane(); // Create default ViewPlane.
            this.view_plane.set_sampler(new Tracejs.Regular(1)); // Set sampler (10 samples / pixel).
            this.view_plane_zw = 100.0; // Create default view plane z-distance.

            var ambient_brdf : Lambertian = new Lambertian(1.0, new RGBColor(0.0, 0.0, 0.0)); // Black.
            var diffuse_brdf : Lambertian = new Lambertian(1.0, new RGBColor(1.0, 0.0, 0.0));

            var material : Matte = new Matte(ambient_brdf, diffuse_brdf);

            this.geo_sphere = new Tracejs.Sphere(material, null, new Point3D(0.0, 0.0, 0.0), 100.0);

            this.ray_cast_tracer = new Tracejs.RayCast(this);

            this.lights = [];
            this.lights[0] = new PointLight(false, 1.0, 
                                                  new RGBColor(1.0, 1.0, 1.0), 
                                                  new Vector3D(300.0, 300.0, 0.0));

            this.ambient_ptr = new Tracejs.AmbientLight(false, 1.0, new RGBColor(1.0, 1.0, 1.0));

            if (background_color) {
                this.background_color = background_color;
            }
            else {
                this.background_color = new Tracejs.RGBColor(0.0, 0.0, 0.0); // Create black background_color.
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
            // return a nested array of RGBColors (pixels)
            //      -> stream if possible
            var hres = this.view_plane.getHres();
            var vres = this.view_plane.getVres();

            var s = this.view_plane.getPsize();
            var zw = this.view_plane_zw;

            var origin = new Tracejs.Point3D(0.0, 0.0, zw);
            var ray_vector = new Tracejs.Vector3D(0.0, 0.0, -1.0);
            var ray = new Tracejs.Ray(origin, ray_vector);

            var sp : Point2D; // Sample point in [0, 1] x [0, 1].
            var pp : Point2D = new Point2D(); // Sample point on a pixel.

            // Initialize view_plane_matrix with n = vres arrays.
            this.view_plane_matrix = new Array(vres);

            for (var v:number = 0; v < vres; v++) {
                // Initialize view_plane_matrix[v] to new Array.
                this.view_plane_matrix[v] = new Array();

                for (var h:number = 0; h < hres; h++) {
                    var color : RGBColor = new RGBColor(0.0, 0.0, 0.0);

                    for (var j:number = 0; j < this.view_plane.num_samples; ++j) {
                        sp = this.view_plane.sampler.sample_unit_square();

                        pp.x = s * (h - 0.5 * (hres - sp.x));
                        pp.y = s * (v - 0.5 * (vres - sp.y));

                        origin.setPoint(pp.x, pp.y, zw);
                        ray.setRay(origin, ray_vector);

                        if (fixture) {
                            this.view_plane_matrix[v].push(new Tracejs.RGBColor(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)))
                        }
                        else {
                            color = color.add_color(this.ray_cast_tracer.trace(ray, 1.0).scale(255));
                        }
                    }
                    color.div(this.view_plane.num_samples);
                    this.view_plane_matrix[v].push(color);
                }
            }

            return JSON.stringify(this.view_plane_matrix);
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
                this.background_color = new Tracejs.RGBColor(r, g, b);
                return this.background_color;
            }

            // getter
            else {
                return this.background_color;
            }
        }

        /**
         * sphere()
         * @param center
         * @param radius
         * @returns {Sphere}
         */
        sphere(center ?: any, radius ?: number) : Sphere {
            if (center && (center.x || center.x === 0) && (center.y || center.y === 0) && (center.z || center.z === 0)) {
                this.geo_sphere.set_center(new Tracejs.Point3D(center.x, center.y, center.z));
            }
            else if (center) {
                console.log("Incorrect or undefined argument object fields in world.sphere()")
            }

            if (radius > 0) {
                this.geo_sphere.set_radius(radius)
            }

            return this.geo_sphere;
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
                        newSampler = new Tracejs.Regular(num_samples);
                        break;
                    case 'multijittered':
                        newSampler = new Tracejs.MultiJittered(num_samples);
                        break;
                    default:
                        newSampler = new Tracejs.Regular(num_samples)
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
