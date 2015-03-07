// Trace.js - Triangle.ts

/// <reference path="./../GeometricObject.ts" />
/// <reference path="./../../Utilities/Point3D.ts" />
/// <reference path="./../../Utilities/Normal.ts" />
/// <reference path="./../../Utilities/Ray.ts" />

module Tracejs {
    export class Triangle extends GeometricObject {
        static kEpsilon : number = 0.001;
        point1 : Point3D;
        point2 : Point3D;
        point3 : Point3D;
        normal : Normal = new Normal(0.0, 1.0, 0.0);

        constructor(material ?: Material, color ?: RGBColor, p1 ?: Point3D, p2 ?: Point3D, p3 ?: Point3D) {
            super(material, color);

            if (p1) {
                this.point1 = p1;
            }
            else {
                this.point1 = new Point3D(0.0, 0.0, 0.0);
            }
            if (p2) {
                this.point2 = p2;
            }
            else {
                this.point2 = new Point3D(0.0, 0.0, 1.0);
            }
            if (p3) {
                this.point3 = p3;
            }
            else {
                this.point3 = new Point3D(1.0, 0.0, 0.0);
            }
          // normal = (v2 - v1) ^ (v3-v1)
          var norm = new Normal();
          var vec = ((this.point2.sub_point(this.point1)).cross(this.point3.sub_point(this.point1)));
          vec.normalize();
          this.normal = norm.assign_vec(vec);
        }

        hit(ray : Ray, sr ?: ShadeRec) : boolean {
          var a = this.point1.get_x() - this.point2.get_x();
          var b = this.point1.get_x() - this.point3.get_x();
          var c = ray.d.get_x();        
          var d = this.point1.get_x() - ray.o.get_x();
          var e = this.point1.get_y() - this.point2.get_y();
          var f = this.point1.get_y() - this.point3.get_y();
          var g = ray.d.get_y();
          var h = this.point1.get_y() - ray.o.get_y();
          var i = this.point1.get_z() - this.point2.get_z();
          var j = this.point1.get_z() - this.point3.get_z();
          var k = ray.d.get_z();
          var l = this.point1.get_z() - ray.o.get_z();
          
          var m = f*k - g*j; var n = h*k - g*l; var p = f*l - h*j;
          var q = g*i - e*k; var s = e*j - f*i;     
          
          var denom = 1.0 / (a*m + b*q + c*s); 
          var e1 = (d * m) - (b * n) - (c * p);
          var beta = e1 * denom;    
          if(beta < 0.0) return false;
          
          var r =  (e * l) - (h * i);
          var e2 = (a * n) + (d * q) + (c * r);
          var gamma = e2 * denom;
          if(gamma < 0.0) return false;
          if(beta + gamma > 1.0) return false;
          
          var e3 = (a * p) - (b * r) + (d * s);
          var t  = e3 * denom;
          if(t < Triangle.kEpsilon) return false;
          
          if(sr){
            sr.normal = this.normal;
            sr.local_hit_point = ray.o.add_vector(ray.d.mult(t));
          }
          return true;
        }

        get_point1() : Point3D {
            return this.point1;
        }

        get_point2() : Point3D {
            return this.point2;
        }
        
        get_point3() : Point3D {
            return this.point3;
        }

        get_normal() : Normal{
          return this.normal;
        }   
        
        set_normal(norm : Normal) : void {
            this.normal = norm;
        }
        
        set_point1(point : Point3D) : void {
            this.point1 = point;
        }
        
        set_point2(point : Point3D) : void {
            this.point2 = point;
        }
        
        set_p1(point : Point3D) : void {
            this.point1 = point;
        }
    }
}
