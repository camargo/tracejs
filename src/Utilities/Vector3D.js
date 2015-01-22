var Tracejs = Tracejs || {};

(function () {
    'use strict';

    Tracejs.Vector3D = function (x, y, z) { // Arguments Types: (float, float, float)
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