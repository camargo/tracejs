var Tracejs = Tracejs || {};

(function () {
    'use strict';

    Tracejs.Point3D = function (x, y, z) { // Arguments Types: (float, float, float)
        this.x = x;
        this.y = y;
        this.z = z;
    };

    Tracejs.Point3D.prototype.x = function () {
        return this.x;
    };

    Tracejs.Point3D.prototype.y = function () {
        return this.y;
    };

    Tracejs.Point3D.prototype.z = function () {
        return this.z;
    };

    Tracejs.Point3D.prototype.d_squared = function (point) { // Argument Type: (Point3D)
        return (this.x - point.x) * (this.x - point.x) +
               (this.y - point.y) * (this.y - point.y) +
               (this.z - point.z) * (this.z - point.z);
    };
}());