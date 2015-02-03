// Trace.js - Sphere.js

/// <reference path="./../GeometricObject.ts" />
/// <reference path="./../../Utilities/Point3D.ts" />

module Tracejs {
    export class Sphere extends GeometricObject {
        static kEpsilon : number = 0.001;
        center : Point3D;
        radius : number;

        constructor(center ?: Point3D, r ?: number) {
            super(new RGBColor(1.0, 0.0, 0.0)); // Red (hard-code for now).

            if (center) {
                this.center = center;
            }
            else {
                this.center = new Point3D(0.0, 0.0, 0.0);
            }

            if (r) {
                this.radius = r;
            }
            else {
                this.radius = 1.0;
            }
        }

        hit(ray : Ray) : boolean {
            var t : number;
            var temp : Vector3D = ray.o.sub_point(this.center);

            var a : number = ray.d.dot(ray.d);
            var b : number = temp.mult(2.0).dot(ray.d);
            var c : number = (temp.dot(temp)) - (this.radius * this.radius);

            var disc : number = (b * b) - (4.0 * a * c);

            if (disc < 0.0) {
                return false;
            }
            else {
                var e : number = Math.sqrt(disc);
                var denom : number = 2.0 * a;
                t = (-b - e) / denom;

                if (t > Sphere.kEpsilon) {
                    // Later iterations will need to populate ShadeRec.
                    return true;
                }

                t = (-b + e) / denom;

                if (t > Sphere.kEpsilon) {
                    // Later iterations will need to populate ShadeRec.
                    return true;
                }
            }

            return false;
        }

        get_center() : Point3D {
            return this.center;
        }

        set_center(center : Point3D) : void {
            this.center = center;
        }

        get_radius() : number {
            return this.radius;
        }

        set_radius(radius : number) : void {
            this.radius = radius;
        }
    }
}
