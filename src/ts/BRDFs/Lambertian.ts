// Trace.js - Lambertian.ts

/// <reference path="./BRDF.ts" />
/// <reference path="./../Utilities/Utils.ts" />

module Tracejs {
    export class Lambertian extends BRDF {
        kd : number;
        cd : RGBColor;

        constructor(kd ?: number, cd ?: RGBColor) {
            super();

            if (kd) {
                this.kd = kd;
            }
            else {
                this.kd = 0.0;
            }

            if (cd) {
                this.cd = cd;
            }
            else {
                this.cd = new RGBColor(0.0, 0.0, 0.0);
            }
        }

        f(sr : ShadeRec, wo : Vector3D, wi : Vector3D) : RGBColor {
            return this.cd.scale(this.kd).scale(invPI);
        }

        rho(sr : ShadeRec, wo : Vector3D) : RGBColor {
            return this.cd.scale(this.kd);
        }

        set_kd(kd : number) : void {
            this.kd = kd;
        }

        set_cd(cd : RGBColor) : void {
            this.cd = cd;
        }
    }
}