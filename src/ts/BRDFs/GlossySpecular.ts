
/// <reference path="./BRDF.ts" />
/// <reference path="./../Utilities/Utils.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />

module Tracejs {
    export class GlossySpecular extends BRDF {
         ks : number;
         exp : number;
         cs : RGBColor;

         constructor(ks ?: number, exp ?: number, cs ?: RGBColor) {
            super();

            if (ks) {
                this.ks = ks;
            }
            else {
                this.ks = 0.0;
            }

            if (exp) {
                this.exp = exp;
            }
            else {
                this.exp = 0.0;
            }

            if (cs) {
                this.cs = cs;
            }
            else {
                this.cs = new RGBColor(0.0, 0.0, 0.0);
            }
        }

        f(sr : ShadeRec, wo : Vector3D, wi : Vector3D) : RGBColor {
            var L : RGBColor;
            var n_dot_wi : number = sr.normal.dot_vec(wi); //n_dot_wi = sr.normal * wi;


            //DOES NOT WORK
            var r : Vector3D = (wi.negate().add(2.0).dot_vec(sr.normal).dot_vec(n_dot_wi)); //Vector r(-wi + 2.0 * sr.normal * n_dot_wi);

            //DOES NOT WORK
            var r_dot_wo : number = r.product(wo); //r_dot_wo = r * wo;

            if(r_dot_wo > 0){
                //DOES NOT WORK
                var L : RGBColor = ks.mult_color(pow(r_dot_wo, exp)); //L = ks * pow(r_dot_wo, exp);
            }

            return L;

        }

        fSample(sr : ShadeRec, wi : Vector3D, wo : Vector3D) : RGBColor{
           //DOES NOT WORK
           return f(sr, wi, wo); //return f(sr, wi, wo);
        }

        rho(sr : ShadeRec, wo : Vector3D) : RGBColor{
            return new RGBColor(0.0 ,0.0, 0.0);//return Black
        }

        set_ks(ks : number) : void {
            this.ks = ks;
        }

        set_exp(exp : number) : void {
            this.exp = exp;
        }

        set_cs(cs: RGBColor) : void {
            this.cs = cs;
        }


    }
}