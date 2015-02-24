// Trace.js - ShadeRec.ts

/// <reference path="./../World/World.ts" />
/// <reference path="./Point3D.ts" />
/// <reference path="./Vector3D.ts" />
/// <reference path="./Ray.ts" />
/// <reference path="./Normal.ts" />
/// <reference path="./RGBColor.ts" />
/// <reference path="./../Materials/Material.ts" />

module Tracejs {
    export class ShadeRec {

        hit_an_object : boolean; 
        material_ptr : Material;
        hit_point : Point3D; 
        local_hit_point : Point3D; 
        normal : Normal; 
        ray : Ray; 
        depth : number;
        color : RGBColor;
        t : number;
        w : World; 

        constructor(wr : World) {
            this.hit_an_object = false;
            this.material_ptr = null;
            this.hit_point = null;
            this.local_hit_point = null;
            this.normal = null;
            this.ray = null;
            this.depth = 0;
            this.color = new RGBColor(0.0, 0.0, 0.0);
            this.t = 0.0;
            this.w = wr;
        }

        get_hit_an_object() : boolean {
            return this.hit_an_object;
        }
 
        get_hit_point() : Point3D{
            return this.hit_point;
        } 
        
        get_local_hit_point() : Point3D{
            return this.local_hit_point;
        } 

        get_ray() : Ray{
            return this.ray;
        }

        get_depth() : number {
            return this.depth;
        }

        get_normal() : Normal{
            return this.normal;
        }
        
        get_world() : World{
            return this.w;
        }
    }
}