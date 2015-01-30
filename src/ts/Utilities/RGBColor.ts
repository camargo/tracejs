// Trace.js - RGBColor.ts

module Tracejs {
    export class RGBColor {
        r : number;
        g : number;
        b : number;

        constructor(r : number, g : number, b : number) {
            this.r = r;
            this.g = g;
            this.b = b;
        }

        get_r() : number {
            return this.r;
        }

        get_g() : number {
            return this.g;
        }

        get_b() : number {
            return this.b;
        }

        add_color(color : RGBColor) : RGBColor {
            return new RGBColor(this.r + color.r, this.g + color.g, this.b + color.b);
        }

        scale(s : number) : RGBColor {
            return new RGBColor(this.r * s, this.g * s, this.b * s);
        }

        div_color(color : RGBColor) : RGBColor {
            return new RGBColor(this.r / color.r, this.g / color.g, this.b / color.b);
        }

        mult_color(color : RGBColor) : RGBColor {
            return new RGBColor(this.r * color.r, this.g * color.g, this.b * color.b);
        }

        exp(n : number) : RGBColor {
            return new RGBColor(Math.pow(this.r, n), Math.pow(this.g, n), Math.pow(this.b, n));
        }
    }
}