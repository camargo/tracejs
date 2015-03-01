// Trace.js - Orthographic.ts

/// <reference path="../Cameras/Camera.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Point2D.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../World/World.ts" />
/// <reference path="./../World/ViewPlane.ts" />

module Tracejs {
    export class Orthographic extends Camera {
        zw : number;

        constructor( zw ?: number) {
            super();

            if (zw) {
                this.zw = zw;
            }
            else {
                this.zw = 100;
            }
        }

        render_scene(w : World) : void {
            var L = new RGBColor(0, 0, 0); 
            var vp = w.view_plane;

            var origin = new Point3D(0.0, 0.0, this.zw);     
            var ray_vector = new Vector3D(0.0, 0.0, -1.0);
            var ray = new Ray(origin, ray_vector);

            var depth = 0;
            var sp = new Point2D(0.0, 0.0);
            var pp = new Point2D(0.0, 0.0);

            w.view_plane_matrix = new Array(vp.vres);

            for(var v = 0; v < vp.vres; ++v) {
                w.view_plane_matrix[v] = new Array();

                for(var h = 0; h < vp.hres; h++) {
                    L = new RGBColor(0.0, 0.0, 0.0);

                    for(var j = 0; j < vp.num_samples; j++) {
                        sp = vp.sampler.sample_unit_square();

                        pp.x = vp.psize * (h - 0.5 * (vp.hres - sp.x));
                        pp.y = vp.psize * (v - 0.5 * (vp.vres - sp.y));

                        origin.setPoint(pp.x, pp.y, this.zw);
                        ray.setRay(origin, ray_vector);

                        L = L.add_color(w.tracer.trace(ray, depth));
                    }

                    L = L.div(vp.num_samples).scale(255);
                    w.view_plane_matrix[v].push(L);
                }
            }
        }
    }
}