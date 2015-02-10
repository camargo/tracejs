/// <reference path="../Utilities/RGBColor.ts" />
/// <reference path="../Utilities/ShadeRec.ts" />


module Tracejs {
    export class Material {

       //Functions
       shade (sr : ShadeRec) : RGBColor{
           //Set RGBColor to black
           var black = new Tracejs.RGBColor(0,0,0);
           return black;
       }
       area_light_shade(sr : ShadeRec) : RGBColor{
       //Set RGBColor to black
           var black = new Tracejs.RGBColor(0,0,0);
           return black;
       }
       path_shade(sr : ShadeRec) : RGBColor{
       //Set RGBColor to black
           var black = new Tracejs.RGBColor(0,0,0);
           return black;
        }

    }
}