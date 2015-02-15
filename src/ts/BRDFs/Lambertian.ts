// Trace.js - Lambertian.ts

/// <reference path="./BRDF.ts" />
/// <reference path="./../Utilities/Utils.ts" />

module Tracejs {
    export class Lambertian extends BRDF {
        kd : number;
        cd : RGBColor;

        constructor(lamb ?: Lambertian) {
            super();

            if (lamb) {
                this.kd = lamb.kd;
                this.cd = lamb.cd;
            }
            else {
                this.kd = 0.0;
                this.cd = new RGBColor(0.0, 0.0, 0.0);
            }
        }

        f(sr : ShadeRec, wo : Vector3D, wi : Vector3D) : RGBColor {
            return this.cd.scale(this.kd).scale(invPI);
        }
    }
}