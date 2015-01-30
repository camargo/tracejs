// Trace.js - SingleSphere.ts

/// <reference path="Tracer.ts" />
/// <reference path="../Utilities/Ray.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />

module Tracejs {
    export class SingleSphere extends Tracer {

        // class methods
        trace(ray: Ray) : RGBColor {
            return new RGBColor(1.0, 0.0, 0.0); // TO DO: Implement sphere trace.
        }
    }
}