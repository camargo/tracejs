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

        hit() : boolean { // TO DO: Implement intersection routine.
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