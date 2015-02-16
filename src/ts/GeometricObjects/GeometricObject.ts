// Trace.js - GeometricObject.ts

/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./../Materials/Material.ts" />

module Tracejs {
    export class GeometricObject {
        color : RGBColor;
        material : Material;

        constructor(color : RGBColor) {
            if (color) {
                this.color = color;
            }
        }

        set_material(material : Material) {
            this.material = material;
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