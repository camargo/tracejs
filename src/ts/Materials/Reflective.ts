// Trace.js - Reflective.ts

/// <reference path="./Phong.ts" />
/// <reference path="./../BRDFs/PerfectSpecular.ts" />

module Tracejs {
    export class Reflective extends Phong {
        reflective_brdf : PerfectSpecular;

        constructor(ambient_brdf ?: Lambertian, 
                    diffuse_brdf ?: Lambertian, 
                    specular_brdf ?: GlossySpecular, 
                    reflective_brdf ?: PerfectSpecular) {

            super(ambient_brdf, diffuse_brdf, specular_brdf);

            if (reflective_brdf) {
                this.reflective_brdf = reflective_brdf;
            }
            else {
                reflective_brdf = new PerfectSpecular();
            }
        }

        shade(sr : ShadeRec) : RGBColor {
            var L : RGBColor = super.shade(sr);
            
            var wo : Vector3D = sr.ray.d.negate();
            var wi : Vector3D = new Vector3D(0.0, 0.0, 0.0);

            var fr : RGBColor = this.reflective_brdf.sample_f(sr, wo, wi);
            
            var reflected_ray : Ray = new Ray(sr.hit_point, wi);

            L = L.add_color(fr).mult_color(sr.w.tracer.trace(reflected_ray, sr.depth + 1)).scale(sr.normal.dot_vec(wi));

            return L;
        }
    }
}