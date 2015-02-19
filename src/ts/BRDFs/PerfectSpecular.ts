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

            var n_dot_wo : number = sr.normal.dot_vec(wo); //n_dot_wi = sr.normal * wo;
            var n : Normal = sr.normal.mult_right(n_dot_wo); // sr.normal * n_dot_wo
            n = Normal.mult_left(2.0, n); // 2.0 * sr.normal
            wi = Normal.add_vec_norm(wi.negate(), n); //wi = -wo + 2.0 * sr.normal * wo

            //Swapped cr and kr from book, should not matter. 
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