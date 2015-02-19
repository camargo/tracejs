// Camera.ts

/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../World/World.ts" />

module Tracejs {
    export class Camera {
        eye : Point3D;
        lookat : Point3D;
        up : Vector3D;
        u : Vector3D;
        v : Vector3D;
        w : Vector3D;
        exposure_time : number;

        constructor() {
            this.eye    = new Tracejs.Point3D(0,0,0);
            this.lookat = new Tracejs.Point3D(0,0,0);
            this.up     = new Tracejs.Vector3D(0,0,0);
            this.u      = new Tracejs.Vector3D(0,0,0);
            this.v      = new Tracejs.Vector3D(0,0,0);
            this.w      = new Tracejs.Vector3D(0,0,0);
        }

        compute_uvw() : void {
            this.w = this.eye.sub_point(this.lookat);
            this.w.normalize();
            this.u = this.up.cross(this.w);
            this.u.normalize();
            this.v = this.w.cross(this.u);
        }

        render_scene(w : World) : void {
        }
    }
}