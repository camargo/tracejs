// Trace.js - GeometricObject.ts

/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./../Materials/Material.ts" />
/// <reference path="./../Materials/Matte.ts" />

module Tracejs {
    export class GeometricObject {
        color : RGBColor;
        material : Material;

        constructor(material ?: Material, color ?: RGBColor) {
            if (color) {
                this.color = color;
            }
            else {
                this.color = new RGBColor(1.0, 0.0, 0.0); // Red (default).
            }

            if (material) {
                this.material = material;
            }
            else {
                this.material = new Matte(); // Matte (default).
            }
        }

        set_material(material : Material) : Material {
            this.material = material;
            return this.material;
        }

        get_material() : Material {
            return this.material;
        }

        hit(ray : Ray, sr ?: ShadeRec) : boolean {
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