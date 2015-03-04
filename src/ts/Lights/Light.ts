// Trace.js - Light.ts

/// <reference path="./../World/World.ts" />
/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/Normal.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />

module Tracejs {
    export class Light {
      shadows : boolean; // Only PointLights should this be true!
      
      constructor(shadow ?: boolean) {
        if (shadow) {
          this.shadows = shadow;
        }
        else {
          this.shadows = false;
        }
      }

      set_shadows(shadow : boolean) : void {
        this.shadows = shadow;
      }      

      get_shadows() : boolean {
        return this.shadows;
      }
      
      get_direction(sr : ShadeRec) : Vector3D {
        return new Vector3D(0.0, 0.0, 0.0);  
      }
      
      L(sr : ShadeRec) : RGBColor {
        return new RGBColor(0.0, 0.0, 0.0);
      }
    }
}