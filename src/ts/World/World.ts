/*
    Shahar Zimmerman 1/24/2015
 */

/* References to required definitions */
/// <reference path="ViewPlane.ts" />

module Tracejs {
    export class World {

        // class properties
        background_color : RGBColor;
        vp : ViewPlane;
        // TODO: SingleSphere tracer [array ?]
        // TODO: Sphere object [array?]

        // class constructor
        constructor(background_color?: RGBColor, vp?: ViewPlane) {
            if (vp) {
                this.vp = vp;
            }
            else {
                this.vp = new Tracejs.ViewPlane(300,150,1);
            }

            if (background_color) {
                this.background_color = background_color;
            }
            else {
                this.background_color = new Tracejs.RGBColor(0, 0, 0);
            }
        }

        // class methods
        build() : World {

            // Read all GUI values
            if(!this.vp) {
                console.log("build(): World.vp didn't exist! Created a default ViewPlane");
                this.vp = new Tracejs.ViewPlane(300,150,1);
            }


            return this;
        }

    }
}