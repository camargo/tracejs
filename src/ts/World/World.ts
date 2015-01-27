/*
    Shahar Zimmerman 1/24/2015
 */

/* References to required definitions */
/// <reference path="ViewPlane.ts" />
/// <reference path="../Utilities/RGBColor.ts" />

module Tracejs {
    export class World {

        // class properties
        background_color : RGBColor;
        view_plane : ViewPlane;
        view_plane_matrix : RGBColor[][];
        single_sphere_tracer : SingleSphere[];
        // TODO: Sphere object [array?]

        // class constructor
        constructor(background_color?: RGBColor) {

            this.view_plane = new Tracejs.ViewPlane(); // create default ViewPlane

            if (background_color) {
                this.background_color = background_color;
            }
            else {
                this.background_color = new Tracejs.RGBColor(0, 0, 0); // create black background_color
            }
        }

        // TODO : All API calls should have good error handling because World is exposed to the user
        // TODO : API can return Tracejs objects, object literals, or JSON strings. Current state, returning Tracsjs objects.
        // class methods
        renderScene() {
            // return a nested array of RGBColors (pixels)
            //      -> stream if possible
            for (v = 0; v < this.view_plane.getVres; v++) {
                for (h = 0; h < this.view_plane.getHres; h++) {
                    // this.view_plane_matrix[h][v] =
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
         * view_plane()
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
                console.log("set world.view_plane", this.view_plane);
                return this.view_plane;
            }

            // getter
            else {
                console.log("getting world.view_plane", this.view_plane);
                return this.view_plane;
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
                console.log("set world.background_color",this.background_color);
                return this.background_color;
            }

            // getter
            else {
                console.log("getting world.background_color",this.background_color);
                return this.background_color;
            }
        }
    }
}