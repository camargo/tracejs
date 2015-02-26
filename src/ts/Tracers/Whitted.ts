// Trace.js - Whitted.ts

/// <reference path="./Tracer.ts" />

module Tracejs {
    export class Whitted extends Tracer {
        constructor(world_ptr? : World) {
            super(world_ptr);
        }

        trace(ray : Ray, depth : number) : RGBColor {
            if (depth > this.world_ptr.view_plane.max_depth) {
                return this.world_ptr.background_color;
            }
            else {
                var sr : ShadeRec = this.world_ptr.hit_objects(ray);

                if(sr.hit_an_object) {
                    sr.depth = depth;
                    sr.ray = ray;
                    return sr.material_ptr.shade(sr);
                } else {
                    return this.world_ptr.background_color;
                }
            }
        }
    }
}