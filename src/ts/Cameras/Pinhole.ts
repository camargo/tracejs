// Pinhole.ts

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

        // properties
	d : number;     // viewplane distance
	zoom : number;  // zoom factor
	
	constructor() {
            this.d = 0;
	    this.zoom = 0;
	    super();
	}
        
	ray_direction(p : Point2D) : Vector3D {
            var dir : Vector3D = this.u.mult(p.x).add(this.v.mult(p.y)).sub(this.w.mult(this.d));
            dir.normalize();
	    return dir;
	}

	render_scene(w : World) : void {
            var L = new Tracejs.RGBColor(0, 0, 0); 
	    var vp = new Tracejs.ViewPlane(w.view_plane.getHres(),
	                                   w.view_plane.getVres(),
					   w.view_plane.getPsize());

	    var ray = new Tracejs.Ray(new Tracejs.Point3D(0,0,0),
	                              new Tracejs.Vector3D(0,0,0));

            var depth = 0; // the depth of recursion
	    var sp = new Tracejs.Point2D(0,0);
	    var pp = new Tracejs.Point2D(0,0);
            
	    // dont know how to translate this
	    // w.open_window(vp.hres, vp.vres);

	    vp.psize /= this.zoom;
	    ray.o = this.eye;

	    for(var r = 0; r < vp.vres; r++) {      // up
                for(var c = 0; c < vp.hres; c++) {   // across
                    L = new Tracejs.RGBColor(1,1,1); // black

		    for(var j = 0; j < vp.num_samples; j++) {
                        sp = vp.sampler.sample_unit_square();
			pp.x = vp.psize * (c - 0.5 * vp.hres + sp.x);
			pp.y = vp.psize * (c - 0.5 * vp.vres + sp.y);
			ray.d = this.ray_direction(pp);
			L = L.add_color(w.ray_cast_tracer.trace(ray, depth));
		    }

		    L = L.div(vp.num_samples);
		    L = L.scale(this.exposure_time);

		    // Dont know how to do?
		    // w.display_pixel(r, c, L);
		}
	    }
	}
    }
}
