/*
    Shahar Zimmerman 1/22/2015
 */

/// <reference path="Point3D.ts" />

module Tracejs {
    export class Vector3D {

        // class properties
        x:number;
        y:number;
        z:number;

        /**
         * Vector3D()
         * @param x
         * @param y
         * @param z
         * @constructor
         */
        constructor(x:number, y:number, z:number) {
            this.x = x;
            this.y = y;
            this.z = z;
        }

        // class methods
        get_x() {
            return this.x;
        }
        get_y() {
            return this.y
        }
        get_z() {
            return this.z
        }
    }
}

