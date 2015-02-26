// Trace.js - PerfectSpecular.ts

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
                this.cr = new RGBColor(1.0, 1.0, 1.0);
            }
        }

        
        f(sr : ShadeRec, wo : Vector3D, wi : Vector3D) : RGBColor {
            return new RGBColor(0.0 ,0.0, 0.0); //return Black
        }

        sample_f(sr : ShadeRec, wo : Vector3D, wi : Vector3D) : RGBColor {
            var n_dot_wo : number = sr.normal.dot_vec(wo); //n_dot_wi = sr.normal * wo;
            
            n_dot_wo = n_dot_wo * 2;

            var n : Normal = sr.normal.mult_right(n_dot_wo); // sr.normal * n_dot_wo
            
            var wi_tmp : Vector3D = Normal.add_vec_norm(wo.negate(), n); //wi = -wo + 2.0 * sr.normal * wo

            wi.x = wi_tmp.x;
            wi.y = wi_tmp.y;
            wi.z = wi_tmp.z;

            return this.cr.scale(this.kr).div(sr.normal.dot_vec(wi)); //return(cr * kr / (sr.normal * wi))
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

        //For testing purposes
        get_kr() : number{
            return this.kr;
        }

        get_cr(): RGBColor{
            return this.cr;
        }
    }
 }