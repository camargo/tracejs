/*
    Shahar Zimmerman 1/22/2015
 */
var Tracejs = Tracejs || {};

interface Vector3D {
    x:number;
    y:number;
    z:number;
}

(function () {
    'use strict';

    Tracejs.Vector3D = function (x:number, y:number, z:number) { // Arguments Types: (float, float, float)
        this.x = x;
        this.y = y;
        this.z = z;
    };

    Tracejs.Vector3D.prototype = {
        get_x : function () {
            return this.x;
        },
        get_y : function () {
            return this.y
        },
        get_z : function () {
            return this.z
        }
    }
}());
