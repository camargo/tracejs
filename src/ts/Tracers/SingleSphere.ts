// Trace.js - SingleSphere.ts

/// <reference path="../Tracers/Tracer.ts" />
/// <reference path="../Utilities/Ray.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="../GeometricObjects/Primitives/Sphere.ts" />

module Tracejs {
    export class SingleSphere extends Tracer {

        constructor(world_ptr? : World) {
            super(world_ptr);
        }

        trace(ray: Ray) : RGBColor {
    	    var sphere : Sphere = this.world_ptr.geo_sphere;

            if(sphere.hit(ray)) {
                return sphere.get_color();
    	    } else {
                return this.world_ptr.background_color;
    	    }
        }
    }
}