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
        // TODO: SingleSphere tracer [array ?]
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
        // TODO : API can return Tracejs objects, object literals, or JSON strings. Which one?
        // class methods
        renderScene() {
            // return a nested array of RGBColors (pixels)
            //      -> stream if possible
        }
        build() : World {
            /*
            if(!this.vp) {
                console.log("build(): World.vp didn't exist! Created a default ViewPlane");
                this.vp = new Tracejs.ViewPlane(300,150,1)
            }
            this.vp.setHres(this.gui.getVpHres())
                    .setVres(this.gui.getVpVres())
                    .setPsize(this.gui.getVpPsize());

            if(!this.background_color) {
                console.log("build(): World.background_color didn't exist! Created a black one");
                this.background_color = new Tracejs.RGBColor(0,0,0)
            }
            this.background_color = this.gui.getBgColor();
            */
            return this;

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