/// <reference path="./../GeometricObject.ts" />
/// <reference path="./../../Utilities/Point3D.ts" />
/// <reference path="./../../Utilities/Normal.ts" />
/// <reference path="./../../Utilities/Utils.ts" />

module Tracejs {
    export class Torus extends GeometricObject {
            static kEpsilon : number = 0.001;
            a : number;
            b : number;

        // constructor
        constructor(a ?: number, b ?: number) {
            
            this.a = a;
            this.b = b;
            super();
        }

        // c, s are arrays
        SolveQuartic(c, s) : number {
            var p : number;
            var q : number;
            var D : number; 

            p = c[1]/(2 * c[2]);
            q = c[0]/c[2];

            D = p * p - q;

            if (D === 0) {
                s[0] = -p;
                return -1;
            }
            else if (D > 0) {
                var sqrt_D : number;
                sqrt_D = Math.sqrt(D);

                s[0] = sqrt_D - p;
                s[1] = -(sqrt_D - p);
                return 2;
            }
            else {
                return 0;
            }
        }

        // compute normal
        compute_normal(p : Point3D) : Normal {
            var normal = new Tracejs.Normal();
            var param_squared : number = this.a * this.a + this.b * this.b;

            var x : number = p.x;
            var y : number = p.y;
            var z : number = p.z;
            var sum_squared : number = x * x + y * y + z * z;

            normal.x = 4.0 * x * (sum_squared - param_squared);
            normal.y = 4.0 * y * (sum_squared - param_squared + 2.0 * this.a * this.a);
            normal.z = 4.0 * z * (sum_squared - param_squared);
            normal.normalize();
  
            return normal;
        }

        // hit function
        hit(ray : Ray, sr ?: ShadeRec) : boolean {
            // bbox?
           
            // setting varibles 
            var x1 = ray.o.x; var d1 = ray.d.x;
            var y1 = ray.o.y; var d2 = ray.d.y;
            var z1 = ray.o.z; var d3 = ray.d.z;
           
            var coeffs = new Array(5); // coefficint array
            var roots  = new Array(4);  // solution array

            // define the coefficients
            var sum_d_sqrd = d1 * d1 + d2 * d2 + d3 * d3;

            var e = x1 * x1 + y1 * y1+z1 * z1 - this.a * this.a - this.b * this.b;
            var f = x1 * d1 + y1 * d2 +z1 * d3;
            
            var four_a_sqrd = 4.0 * this.a * this.a;

            coeffs[0] = e * e - four_a_sqrd * (this.b * this.b - y1 * y1);
            coeffs[1] = 4.0 * f * e + 2.0 * four_a_sqrd * y1 * d2;
            coeffs[2] = 2.0 * sum_d_sqrd * e + 4.0 * f * f + four_a_sqrd * d2 * d2;
            coeffs[3] = 4.0 * sum_d_sqrd * f;
            coeffs[4] = sum_d_sqrd * sum_d_sqrd;

            // find the roots
            var num_real_roots = this.SolveQuartic(coeffs, roots); 
            var intersected : boolean = false;
            var t : number = kHugeValue;

            if(num_real_roots === 0) { return false; }

            // find the smalles root greater than kEpsilon, if any
            // the roots array is not sorted

            for(var j = 0; j < num_real_roots; j++) {
                if(roots[j] > Torus.kEpsilon) {
                    intersected = true;
                    if(roots[j] < t) {
                        t = roots[j];
                    }
                }
            }

            if(!intersected) { return false; }

            sr.t = t;
            sr.local_hit_point = ray.o.add_vector(ray.d.mult(t));
            sr.normal = this.compute_normal(sr.local_hit_point);

            return true;;
        }

    }
}
