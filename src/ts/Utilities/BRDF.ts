/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="../Utilities/RGBColor.ts" />
/// <reference path="../Samplers/Sampler.ts" />


//From chapter 13.6 page 229 in the book.

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