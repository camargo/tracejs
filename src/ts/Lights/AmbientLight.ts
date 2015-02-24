// Trace.js - AmbientLight.ts

/// <reference path="./../World/World.ts" />
/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/Normal.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./Light.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />

module Tracejs {
    export class AmbientLight extends Light {
      ls       : number;
      color    : RGBColor;

      constructor(shadow ?: boolean, l_s ?: number, col ?: RGBColor){
        if (shadow) {
          super(shadow);
        }
        else {
          super(false);
        }

        if (l_s) {
          this.ls = l_s;
        }
        else {
          this.ls = 1.0;
        }

        if (col) {
          this.color = col;
        }
        else {
          this.color = new RGBColor(0.0, 0.0, 0.0);
        }
      }
    
      set_ls(l_s : number) : void {
        this.ls = l_s;
      }
    
      set_color(col : RGBColor) : void {
        this.color = col;
      }
      
      get_ls() : number {
        return this.ls;
      }

      get_color() : RGBColor {
        return this.color;
      }
      
      get_direction(sr : ShadeRec) : Vector3D {
        return new Vector3D(0.0, 0.0, 0.0);
      }
      
      L(sr : ShadeRec) : RGBColor { // Incident radiance.
        return (this.color).scale(this.ls);
      }
    }
}
