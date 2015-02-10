// Trace.js - AmbientLight.ts

/// <reference path="./../World/World.ts" />
/// <reference path="Point3D.ts" />
/// <reference path="Vector3D.ts" />
/// <reference path="Ray.ts" />
/// <reference path="Normal.ts" />
/// <reference path="ShadeRec.ts" />
/// <reference path="Light.ts" />

module Tracejs {
    export class AmbientLight extends Light{
      ls       : number;
      color    : RGBColor;

      constructor(shadow ?: boolean, l_s ?: number, col ?: RGBColor){
        if(shadow) super(shadow);
        else       super(false);
        if(l_s) this.ls = l_s;
        else    this.ls = 1.0;
        if(col) this.color = col;
        else    this.color = new RGBColor(0,0,0);
      }
    
      set_ls(l_s : number) : void{
        this.ls = l_s;
      }
    
      set_color(col : RGBColor) : void{
        this.color = col;
      }
      
      get_ls() : number{
        return this.ls;
      }

      get_color() : RGBColor{
        return this.color;
      }
      
      get_direction(sr : ShadeRec) : Vector3D{
        return new Vector3D(0.0, 0.0, 0.0);
      }
      
      incident_radiance(sr : ShadeRec) : RGBColor{
        return (this.color).scale(this.ls);
      }
    }
}
