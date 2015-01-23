/*
    Shahar Zimmerman 1/22/15
 */

/* Include modules */
/// <reference path="Vector3D.ts" />

module Tracejs {
    export class Point3D {

        // class properties
        x : number;
        y : number;
        z : number;

        /**
         * Point3D()
         * @param x
         * @param y
         * @param z
         * @constructor
         */
        constructor(x:number,y:number,z:number) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        // class methods
        get_x() {
            return this.x
        }
        get_y() {
            return this.y
        }
        get_z() {
            return this.z
        }
        negate() {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
        }
        sub_point(point : Point3D) {
            return new Vector3D(this.x - point.x, this.y - point.y, this.z - point.z);
        }
        add_vector(vector : Vector3D) {
            return new Point3D(this.x + vector.x, this.y + vector.y, this.z + vector.z);
        }
        sub_vector(vector : Vector3D) {
            return new Point3D(this.x - vector.x, this.y - vector.y, this.z - vector.z);
        }
        d_squared(point : Point3D) {
            return (this.x - point.x) * (this.x - point.x) +
                (this.y - point.y) * (this.y - point.y) +
                (this.z - point.z) * (this.z - point.z)
        }
    }
}