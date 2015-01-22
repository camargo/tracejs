var Tracerjs = Tracerjs || {};

(function () {
    'use strict';

    Tracerjs.Point3D = function (x, y, z) { // Arguments Types: (float, float, float)
        this.x = x;
        this.y = y;
        this.z = z;
    };

    Tracerjs.Point3D.prototype.x = function () {
        return this.x;
    };

    Tracerjs.Point3D.prototype.y = function () {
        return this.y;
    };

    Tracerjs.Point3D.prototype.z = function () {
        return this.z;
    };

    Tracerjs.Point3D.prototype.d_squared = function (point) { // Argument Type: (Point3D)
        return (this.x - point.x) * (this.x - point.x) +
               (this.y - point.y) * (this.y - point.y) +
               (this.z - point.z) * (this.z - point.z);
    };
}());