// Trace.js - Phong.ts

/// <reference path="./Material.ts" />
/// <reference path="./../BRDFs/Lambertian.ts" />
/// <reference path="./../BRDFs/GlossySpecular.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />

module Tracejs {
    export class Phong extends Material {
        ambient_brdf : Lambertian;
        diffuse_brdf : Lambertian;
        specular_brdf : GlossySpecular;

        constructor(ambient_brdf ?: Lambertian, diffuse_brdf ?: Lambertian, specular_brdf ?: GlossySpecular) {
            super();

            if (ambient_brdf) {
                this.ambient_brdf = ambient_brdf;
            }
            else {
                this.ambient_brdf = new Lambertian();
            }

            if (diffuse_brdf) {
                this.diffuse_brdf = diffuse_brdf;
            }
            else {
                this.diffuse_brdf = new Lambertian();
            }

            if (specular_brdf) {
                this.specular_brdf = specular_brdf;
            }
            else {
                this.specular_brdf = new GlossySpecular();
            }
        }

        shade(sr : ShadeRec) : RGBColor {
            var wo : Vector3D = sr.ray.d.negate(); // Vector to camera;
            var L : RGBColor = this.ambient_brdf.rho(sr, wo).mult_color(sr.w.ambient_ptr.L(sr));
            var num_lights : number = sr.w.lights.length;

            for (var i = 0; i < num_lights; ++i) {
                var wi : Vector3D = sr.w.lights[i].get_direction(sr); // Vector to light i.
                var n_dot_wi : number = sr.normal.dot_vec(wi); // Cosine of angle between light and normal.

                if (n_dot_wi > 0.0) { // Check if light is above surface.
                    L = L.add_color((this.diffuse_brdf.f(sr, wo, wi).add_color(this.specular_brdf.f(sr, wo, wi))).mult_color(sr.w.lights[i].L(sr)).scale(n_dot_wi));
                }

            }

            return L;
        }
    }
}