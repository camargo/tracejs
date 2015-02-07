// Trace.js - World.ts

/* References to required definitions */
/// <reference path="ViewPlane.ts" />
/// <reference path="../Utilities/RGBColor.ts" />
/// <reference path="../Tracers/SingleSphere.ts" />
/// <reference path="../Utilities/Ray.ts" />
/// <reference path="../Utilities/Point3D.ts" />
/// <reference path="../Utilities/Vector3D.ts" />
/// <reference path="../GeometricObjects/Primitives/Sphere.ts" />

module Tracejs {
    export class World {

        // class properties
        background_color : RGBColor;
        view_plane : ViewPlane;
        view_plane_zw: number;
        view_plane_matrix : RGBColor[][];
        geo_sphere : Sphere;
        single_sphere_tracer : SingleSphere;

        // class constructor
        constructor(background_color?: RGBColor) {

            this.view_plane = new Tracejs.ViewPlane(); // create default ViewPlane
            this.view_plane_zw = 100.0; // create default view plane z-distance
            this.geo_sphere = new Tracejs.Sphere(new Point3D(0.0, 0.0, 0.0), 200.0);

            this.single_sphere_tracer = new Tracejs.SingleSphere(this);

            if (background_color) {
                this.background_color = background_color;
            }
            else {
                this.background_color = new Tracejs.RGBColor(0, 0, 0); // create black background_color
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
        renderScene(fixture?: boolean) : any {
            // return a nested array of RGBColors (pixels)
            //      -> stream if possible
            var hres = this.view_plane.getHres();
            var vres = this.view_plane.getVres();
            var s = this.view_plane.getPsize();
            var zw = this.view_plane_zw;

            var origin = new Tracejs.Point3D(0.0, 0.0, zw);
            var ray_vector = new Tracejs.Vector3D(0.0, 0.0, -1.0);
            var ray = new Tracejs.Ray(origin, ray_vector);

            // initialize view_plane_matrix with n = vres arrays
            this.view_plane_matrix = new Array(vres);

            for (var v:number = 0; v < vres; v++) {
                // initialize view_plane_matrix[v] to new Array
                this.view_plane_matrix[v] = new Array();

                for (var h:number = 0; h < hres; h++) {
                    var x:number = s * (h - 0.5 * (hres - 1.0));
                    var y:number = s * (v - 0.5 * (vres - 1.0));

                    origin.setPoint(x, y, zw);
                    ray.setRay(origin, ray_vector);

                    if (fixture) {
                        this.view_plane_matrix[v].push(new Tracejs.RGBColor(Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)))
                    }
                    else {
                        var color : RGBColor = this.single_sphere_tracer.trace(ray).scale(255);
                        this.view_plane_matrix[v].push(color);
                    }
                }
            }

            return JSON.stringify(this.view_plane_matrix);
        }

        // TODO : build() is redundant because all building is done through the World API. Probably shouldn't exist
        /*
        build() : World {
            return this;
        }
        */

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
        bgColor(background_color?: RGBColor) : RGBColor {

            // setter
            if (background_color) {
                this.background_color = background_color;
                return this.background_color;
            }

            // getter
            else {
                return this.background_color;
            }
        }
    }
}
