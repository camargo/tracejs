/// <reference path="./../Utilities/RGBColor.ts" />
module Tracejs {
    export class GeometricObject {
        color : RGBColor;

        constructor(color : RGBColor) {
            this.color = color;
        }

        get_color() : RGBColor {
            return this.color;
        }

        set_color(color : RGBColor) {
            this.color = color;
        }
    }
}