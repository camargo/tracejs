// Camera.ts

// Point3d loading shit
// Vector3d loading shit

/// <reference path="../Utilities/Point3D.ts" />
/// <reference path="../Utilities/Vector3D.ts" />
/// <reference path="../World/World.ts" />

module Tracejs {
  export class Camera {
    
    // class properties
    eye : Point3D;
    lookat : Point3D;
    up : Vector3D;
    u : Vector3D;
    v : Vector3D;
    w : Vector3D;
    exposure_time : number;

    // functions
    compute_uvw() : void {
      this.w = this.eye.sub_point(this.lookat);
      this.w.normalize();
      // this.u = up ^ w;
      this.u.normalize();
      // this.v = w ^ u;
    }

    render_scene(w : World) : void {
    }
  }
}
