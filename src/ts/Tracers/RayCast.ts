// Trace.js - RayCast.ts

/// <reference path="../Tracers/Tracer.ts" />
/// <reference path="../Utilities/Ray.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="../GeometricObjects/Primitives/Sphere.ts" />

module Tracejs {
    export class RayCast extends Tracer {

        constructor(world_ptr? : World) {
            super(world_ptr);
        }

        trace(ray : Ray, depth : number) : RGBColor {
            var sr : ShadeRec = new ShadeRec(this.world_ptr);
            var sphere : Sphere = this.world_ptr.geo_sphere;

            if(sphere.hit(ray, sr)) {
                return sphere.material.shade(sr);
            } else {
                return this.world_ptr.background_color;
            }
        }
    }
}