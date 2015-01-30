// Trace.js - GeometricObject.ts

/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />

module Tracejs {
    export class GeometricObject {
        color : RGBColor;

        constructor(color : RGBColor) {
            if (color) {
                this.color = color;
            }
        }

        hit(ray : Ray) : boolean {
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