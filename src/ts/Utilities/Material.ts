/// <reference path="../Utilities/RGBColor.ts" />
/// <reference path="../Utilities/ShadeRec.ts" />


//Set RGBColor to black
var black = new Tracejs.RGBColor(0,0,0);

module Tracejs {
    export class Material {


    //Functions
       shade (sr : ShadeRec) : RGBColor{
           return black;
       }
       area_light_shade(sr : ShadeRec) : RGBColor{
           return black;
       }
       path_shade(sr : ShadeRec) : RGBColor{
           return black;
       }

    }
}