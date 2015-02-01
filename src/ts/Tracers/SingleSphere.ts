// Trace.js - SingleSphere.ts

/// <reference path="Tracer.ts" />
/// <reference path="../Utilities/Ray.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />

module Tracejs {
    export class SingleSphere extends Tracer {

        // class methods
        trace(ray: Ray) : RGBColor {
	    // need to check and see if there sphere is a hit.
            if(true) {
                return new RGBColor(1.0, 0.0, 0.0);
	    } else {
                return new RGBColor(1.0, 1.0, 1.0);
	    }
        }
    }
}
