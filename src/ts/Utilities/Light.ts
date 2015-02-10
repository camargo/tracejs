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
      
      constructor(s : boolean){
        this.shadows = s;
      }

      get_shadows() : boolean{
        return this.shadows;
      }
      
      get_direction() : Vector3D{
        return new Vector3D(0.0, 0.0, 0.0);  
      }
      
      incident_radiance() : RGBColor{
        return new RGBColor(0, 0, 0);
      }
    }
}
