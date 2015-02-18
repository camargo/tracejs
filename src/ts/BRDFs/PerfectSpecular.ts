/// <reference path="./BRDF.ts" />
/// <reference path="./../Utilities/Utils.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />

module Tracejs {
    export class PerfectSpecular extends BRDF {
        kr : number;
        cr : RGBColor;

        constructor(kr ?: number, cr ?: RGBColor) {
            super();

            if (kr) {
                this.kr = kr;
            }
            else {
                this.kr = 0.0;
            }

            if (cr) {
                this.cr = cr;
            }
            else {
                this.cr = new RGBColor(0.0, 0.0, 0.0);
            }
        }

        
        f(sr : ShadeRec, wo : Vector3D, wi : Vector3D) : RGBColor {
            return new RGBColor(0.0 ,0.0, 0.0); //return Black
        }

        fSample(sr : ShadeRec, wi : Vector3D, wo : Vector3D) : RGBColor{
            var r_dot_wo : number = sr.normal.dot_vec(wo); //r_dot_wo = r * wo;

            //DOES NOT WORK
            //var wi : Vector3D = wi.negate().add(2.0).dot_vec(sr.normal).scale(r_dot_wo);
            var wi : Vector3D = wi.negate().add(2.0).dot_vec(sr.normal).scale(r_dot_wo);


            //Swapped cr and kr, should not matter. 
            return(this.cr.scale(this.kr).div(sr.normal.dot_vec(wi))); //return(cr * kr / (sr.normal * wi))

        }

        rho(sr : ShadeRec, wo : Vector3D) : RGBColor{
            return new RGBColor(0.0 ,0.0, 0.0); //return Black
        }

        set_kr(kr : number) : void {
            this.kr = kr;
        }

        set_cr(cr : RGBColor) : void {
            this.cr = cr;
        }
    }
 }