// Trace.js - Normal.ts

/// <reference path="Vector3D.ts" />
/// <reference path="Point3D.ts" />

module Tracejs {
    export class Normal {
        x : number;
        y : number;
        z : number;

        constructor(x ?: number, y ?: number, z ?: number) {
            if (x) {
                this.x = x;
            }
            else {
                this.x = 0.0;
            }
            if (y) {
                this.y = y;
            }
            else {
                this.y = 0.0;
            }
            if (z) {
                this.z = z;
            }
            else {
                this.z = 0.0;
            }
        }

        // Member Functions.
        get_x() : number {
            return this.x
        }

        get_y() : number {
            return this.y
        }

        get_z() : number {
            return this.z
        }

        negate() : void {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
        }

        add_norm(n : Normal) : Normal {
            return new Normal(this.x + n.x, this.y + n.y, this.z + n.z);
        }

        add_norm_this(n : Normal) : Normal {
            this.x += n.x;
            this.y += n.y;
            this.z += n.z;

            return this;
        }

        dot_vec(v : Vector3D) : number {
            return (this.x * v.x + this.y * v.y + this.z * v.z);
        }

        mult_right(a : number) : Normal {
            return new Normal(this.x * a, this.y * a, this.z * a);
        }

        assign_norm(n : Normal) : Normal {
            if (this === n) {
                return this;
            }

            this.x = n.x;
            this.y = n.y;
            this.z = n.z;

            return this;
        }

        assign_vec(v : Vector3D) : Normal {
            this.x = v.x;
            this.y = v.y;
            this.z = v.z;

            return this;
        }

        assign_point(p : Point3D) : Normal {
            this.x = p.x;
            this.y = p.y;
            this.z = p.z;

            return this;
        }

        normalize() : void {
            var length = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
            this.x /= length;
            this.y /= length;
            this.z /= length;
        }

        // Non-Member Functions.
        static mult_left(a : number, n : Normal) : Normal {
            return new Normal(a * n.x, a * n.y, a * n.z);
        }

        static add_vec_norm(v : Vector3D, n : Normal) : Vector3D {
            return new Vector3D(v.x + n.x, v.y + n.y, v.z + n.z);
        }

        static sub_vec_norm(v : Vector3D, n : Normal) : Vector3D {
            return new Vector3D(v.x - n.x, v.y - n.y, v.z - n.z);
        }

        static dot_vec_norm(v : Vector3D, n : Normal) : number {
            return (v.x * n.x + v.y * n.y + v.z * n.z);
        }
    }
}