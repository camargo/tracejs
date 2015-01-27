/// <reference path="./../Utilities/RGBColor.ts" />

module Tracejs {
    export class GeometricObject {
        color : RGBColor;

        constructor(color : RGBColor) {
            if (color) {
                this.color = color;
            }
        }

        hit() : boolean {
            return false;
        }

        get_color() : RGBColor {
            return this.color;
        }

        set_color(color : RGBColor) : void {
            this.color = color;
        }
    }
}