(function () {
    'use strict';

    var Point3D = function (x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    };

    Point3D.prototype.x = function () {
        return this.x;
    };

    Point3D.prototype.y = function () {
        return this.y;
    };

    Point3D.prototype.z = function () {
        return this.z;
    };

    Point3D.prototype.d_squared = function (point) {
        return (this.x - point.x) * (this.x - point.x) +
               (this.y - point.y) * (this.y - point.y) +
               (this.z - point.z) * (this.z - point.z);
    };
}());