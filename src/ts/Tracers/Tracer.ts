// Trace.js - Tracer.ts

/// <reference path="../World/ViewPlane.ts" />
/// <reference path="../Utilities/RGBColor.ts" />
/// <reference path="../Tracers/SingleSphere.ts" />
/// <reference path="../Utilities/Ray.ts" />
/// <reference path="../Utilities/Point3D.ts" />
/// <reference path="../Utilities/Vector3D.ts" />
/// <reference path="../World/World.ts" />

module Tracejs {
    export class Tracer {
    	// class properties
    	world_ptr : World;

    	// constructor
    	constructor(world_ptr? : World) {
            this.world_ptr = world_ptr;
    	}
    }
}