/**
Katherine Barsaloux 1/23/2015

*/

module Tracejs {
    export class ShadeRec {

       hit : boolean; 
       // material_ptr : Material; 
       hit_point : Point3D; 
       local_hit_point : Point3D; 
       normal : Normal; 
       ray : Ray; 
       depth : number; 
       dir : Vector3D; 
       w : World; 

        constructor(hit : boolean, hit_point : Point3D, local_hit_point : Point3D,
                     ray : Ray, depth : number, dir : Vector3D){
            this.hit = hit;
            this.hit_point = hit_point;
            this.local_hit_point = local_hit_point;
            //this.normal = normal;
            this.ray = ray;
            this.depth = depth;
            this.dir = dir;
            //this.w = w;
        }


     
        //For test file

       get_hit() : boolean {
            return this.hit;
        }
 
        get_hit_point() : Point3D{
            return this.hit_point;
        } 
        
        get_local_hit_point() : Point3D{
            return this.local_hit_point;
        } 

        get_normal() : Normal{
            return this.normal;
        }

        get_ray() : Ray{
            return this.ray;
        }

        get_depth() : number {
            return this.depth;
        }
        
        get_vector() : Vector3D{
            return this.dir;
        }

        get_world() : World{
            return this.w;
        }


      
        
    }
}