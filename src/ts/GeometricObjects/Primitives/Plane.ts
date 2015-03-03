/// <reference path="./../GeometricObject.ts" />
/// <reference path="./../../Utilities/Point3D.ts" />

module Tracejs {
    export class Plane extends GeometricObject {
        static kEpsilon : number = 0.001;
        point : Point3D;
        normal : Normal;

        constructor(material ?: Material, color ?: RGBColor, point ?: Point3D, normal ?: Normal) {
            super(material, color);

            if (point) {
                this.point = point;
            }
            else {
                this.point = new Point3D(0.0, 0.0, 0.0);
            }

            if (normal) {
                this.normal = normal;
            }
            else {
                this.normal = new Normal(0.0, 0.0, 0.0);
            }
        }



        hit_plane(ray : Ray, min_t ?: number, sr ?: ShadeRec) : boolean {
            /**
            variable t holds 3 parts: 
            1) point - ray.o
            2) (point - ray.o) * normal
            3) (ray.d * normal)

            Together you should get t = (point - ray.o) * normal / (ray.d * normal)

            */

            var t : number; //t = (point - ray.o) * normal / (ray.d * normal);

            var first : Vector3D = ray.o.sub_point(this.point); // (point - ray.o) MATH PLACEMENT MAY BE WRONG CHECK LATER

            var second : number = this.normal.dot_vec(first); //normal * (point - ray.o)           

            var third : number = this.normal.dot_vec(ray.d); //(ray.d * normal);

            t = second / third; //COULD BE TOTALLY WRONG CHECK LATER            

            
            if(t > Plane.kEpsilon) {
		        min_t = t;

	        	sr.normal = this.normal;

                var temp: Vector3D = ray.d.mult(t); //t * ray.d

                sr.local_hit_point = ray.o.add_vector(temp); //sr.local_hit_point = ray.o + t * ray.d OR ray.o + temp


		        return true;
	        }
	        else {
		        return false;
	        }
        }
    }
}
