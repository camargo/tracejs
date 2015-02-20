// Trace.js - Pinhole.ts

/// <reference path="../Cameras/Camera.ts" />
/// <reference path="./../Utilities/Vector3D.ts" />
/// <reference path="./../Utilities/Point3D.ts" />
/// <reference path="./../Utilities/Point2D.ts" />
/// <reference path="./../Utilities/RGBColor.ts" />
/// <reference path="./../Utilities/Ray.ts" />
/// <reference path="./../World/World.ts" />
/// <reference path="./../World/ViewPlane.ts" />

module Tracejs {
    export class Pinhole extends Camera {
    	d : number;
    	zoom : number;
    	
    	constructor() {
            this.d = 300;
    	    this.zoom = 1;
    	    super();
    	}
            
    	ray_direction(p : Point2D) : Vector3D {
            var dir : Vector3D = this.u.mult(p.x).add(this.v.mult(p.y)).sub(this.w.mult(this.d));
            dir.normalize();
    	    return dir;
    	}

    	render_scene(w : World) : void {
            var L = new RGBColor(0, 0, 0); 
    	    var vp = w.view_plane;

            var ray_vector = new Vector3D(0.0, 0.0, 0.0);
            var ray = new Ray(this.eye, ray_vector);

            var depth = 0;
    	    var sp = new Point2D(0.0, 0.0);
    	    var pp = new Point2D(0.0, 0.0);

            w.view_plane_matrix = new Array(vp.vres);

    	    for(var r = 0; r < vp.vres; r++) {
                w.view_plane_matrix[r] = new Array();

                for(var c = 0; c < vp.hres; c++) {
                    L = new RGBColor(0.0, 0.0, 0.0);

        		    for(var j = 0; j < vp.num_samples; j++) {
                        sp = vp.sampler.sample_unit_square();

            			pp.x = vp.psize * (c - 0.5 * vp.hres + sp.x);
            			pp.y = vp.psize * (r - 0.5 * vp.vres + sp.y);

                        ray.d = this.ray_direction(pp);

            			L = L.add_color(w.tracer.trace(ray, depth));
        		    }

    		        L = L.div(vp.num_samples).scale(255);
                    w.view_plane_matrix[r].push(L);
    		  }
    	    }
    	}
    }
}
