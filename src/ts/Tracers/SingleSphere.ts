// Trace.js - SingleSphere.ts

/// <reference path="../Tracers/Tracer.ts" />
/// <reference path="../Utilities/Ray.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="../GeometricObjects/Primitives/Sphere.ts" />

module Tracejs {
    export class SingleSphere extends Tracer {
        
	// properties
        
        // constructor

        // class methods
        trace(ray: Ray) : RGBColor {
            var sphere = new Tracejs.Sphere();
	    
	    // need to check and see if there sphere is a hit.
            if(sphere.hit(ray) == true) {
                return new RGBColor(1.0, 0.0, 0.0);
	    } else {
                return new RGBColor(1.0, 1.0, 1.0);
	    }
        }
    }
}
