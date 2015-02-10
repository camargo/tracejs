// Trace.js - Light.ts

/// <reference path="./../World/World.ts" />
/// <reference path="Point3D.ts" />
/// <reference path="Vector3D.ts" />
/// <reference path="Ray.ts" />
/// <reference path="Normal.ts" />
/// <reference path="ShadeRec.ts" />

module Tracejs {
    export class Light {
      shadows : boolean;
      
      constructor(shadow ?: boolean){
        if(shadow) this.shadows = shadow;
        else       this.shadows = false;
      }

      set_shadows(shadow : boolean) : void{
        this.shadows = shadow;
      }      

      get_shadows() : boolean{
        return this.shadows;
      }
      
      get_direction(sr : ShadeRec) : Vector3D{
        return new Vector3D(0.0, 0.0, 0.0);  
      }
      
      incident_radiance(sr : ShadeRec) : RGBColor{
        return new RGBColor(0, 0, 0);
      }
    }
}
