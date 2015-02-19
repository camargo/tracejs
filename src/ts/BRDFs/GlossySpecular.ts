
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

        f(sr : ShadeRec, wi : Vector3D, wo : Vector3D) : RGBColor {
            var L : RGBColor;
            var n_dot_wi : number = sr.normal.dot_vec(wi); //n_dot_wi = sr.normal * wi;
        
            var n : Normal = sr.normal.mult_right(n_dot_wi); // sr.normal * n_dot_wi
            n = Normal.mult_left(2.0, n); // 2.0 * sr.normal
            var r : Vector3D = Normal.add_vec_norm(wi.negate(), n); // Vector r(-wi + 2.0 * sr.normal * n_dot_wi);

            var r_dot_wo : number = r.dot(wo); //r_dot_wo = r * wo;

            if(r_dot_wo > 0){
                var power : number = Math.pow(r_dot_wo, this.exp); //power = pow(r_dot_wo, exp)
                L = L.scale(this.ks).mult_color(L.scale(power)); //L = ks * power
            }

            return L;

        }

        fSample(sr : ShadeRec, wi : Vector3D, wo : Vector3D) : RGBColor{
           return this.f(sr, wi, wo); //return f(sr, wi, wo);
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