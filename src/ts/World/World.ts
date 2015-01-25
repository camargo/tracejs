/*
    Shahar Zimmerman 1/24/2015
 */

/* References to required definitions */
/// <reference path="ViewPlane.ts" />
/// <reference path="../GUI/GUI.ts" />

module Tracejs {
    export class World {

        // class properties
        background_color : RGBColor;
        vp : ViewPlane;
        // TODO: SingleSphere tracer [array ?]
        // TODO: Sphere object [array?]
        gui : GUI;
        context; // the canvas 2D context

        // class constructor
        constructor(context, background_color?: RGBColor) {

            this.context = context;

            this.vp = new Tracejs.ViewPlane(); // create default ViewPlane

            this.gui = new Tracejs.GUI(this.vp, background_color); // create default GUI

            if (background_color) {
                this.background_color = background_color;
            }
            else {
                this.background_color = new Tracejs.RGBColor(0, 0, 0);
            }
        }

        // class methods
        renderScene() : World {
            return this.build();
        }
        build() : World {
            // Read all GUI values
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

            return this;
        }
        createGUI() : GUI {
            return this.gui.create()
        }
    }
}