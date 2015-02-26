// Trace.js - RayCast.ts

/// <reference path="./Tracer.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Utilities/ShadeRec.ts" />
/// <reference path="./../GeometricObjects/GeometricObject.ts" />
/// <reference path="./../GeometricObjects/Primitives/Sphere.ts" />

module Tracejs {
    export class RayCast extends Tracer {

        constructor(world_ptr? : World) {
            super(world_ptr);
        }

        trace(ray : Ray, depth : number) : RGBColor {
            var sr : ShadeRec = this.world_ptr.hit_objects(ray);

            if(sr.hit_an_object) {
                sr.ray = ray;
                return sr.material_ptr.shade(sr);
            } else {
                return this.world_ptr.background_color;
            }
        }
    }
}