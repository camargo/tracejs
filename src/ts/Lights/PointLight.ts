// Trace.js - PointLight.ts

/// <reference path="./../World/World.ts" />
/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/Normal.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./Light.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />

module Tracejs {
    export class PointLight extends Light {
      ls       : number;
      color    : RGBColor;
      location : Vector3D;

      constructor(shadow ?: boolean, l_s ?: number, col ?: RGBColor, loc ?: Vector3D) {
        if(shadow) {
          super(shadow);
        }
        else {
          super(false);
        }

        if(l_s) {
          this.ls = l_s;
        }
        else {
          this.ls = 1.0;
        }

        if(col) {
          this.color = col;
        }
        else {
          this.color = new RGBColor(0.0, 0.0, 0.0);
        }

        if(loc) {
          this.location = loc;
        }
        else {
          this.location = new Vector3D(0.0, 0.0, 0.0);
        }
      }
    
      set_ls(l_s : number) : void {
        this.ls = l_s;
      }
    
      set_color(col : RGBColor) : void {
        this.color = col;
      }
  
      set_location(loc : Vector3D) : void {
        this.location = loc;
      }

      get_ls() : number {
        return this.ls;
      }

      get_color() : RGBColor {
        return this.color;
      }
   
      get_location() : Vector3D {
        return this.location;
      }
      
      get_direction(sr : ShadeRec) : Vector3D {
        var point = sr.get_hit_point();
        var hit = new Tracejs.Vector3D(point.x,
                                       point.y,
                                       point.z);
        var vec = hit.sub(this.location);
        vec.normalize();
        return vec;
      }
      
      L(sr : ShadeRec) : RGBColor {
        return (this.color).scale(this.ls);
      }

      in_shadow(ray : Ray, sr : ShadeRec) : boolean {
        var tmp_sr : ShadeRec = new ShadeRec(sr.w);
        var num_objects = sr.w.objects.length;
        var d : number = this.location.distance_from(new Vector3D(ray.o.x, ray.o.y, ray.o.z));

        for (var i = 0; i < num_objects; ++i) {
          if (sr.w.objects[i].hit(ray, tmp_sr) && tmp_sr.t < d) {
            return true;
          }
        }

        return false;
      }
    }
}
