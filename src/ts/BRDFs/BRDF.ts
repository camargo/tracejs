// Trace.js - BRDF.ts

/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Samplers/Sampler.ts" />

module Tracejs {
    export class BRDF {
        sampler : Sampler;
 
        f(sr : ShadeRec, wi : Vector3D, wo : Vector3D) : RGBColor{
            return new RGBColor(0,0,0);  
        }
         
        fSample(sr : ShadeRec, wi : Vector3D, wo : Vector3D) : RGBColor{
            return new RGBColor(0,0,0);
        }

        rho(sr : ShadeRec, wo : Vector3D) : RGBColor{
            return new RGBColor(0,0,0);
        }
    }
}