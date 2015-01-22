(function () {
    'use strict';

    var Sphere = function (center, radius) { // Argument Types: (Point3D, float).
        this.center = center;
        this.radius = radius;
    };

    //Sphere.prototype = new GeometricObject(); // Inherit from GeometricObject.

    Sphere.prototype.hit = function (ray, tmin, shadeRec) { // Argument Types: (Ray, float, ShadeRec)
        // TODO: Implement Sphere-Ray-Intersection routine.
    };

    Sphere.prototype.center = function () {
        return this.center;
    };

    Sphere.prototype.radius = function () {
        return this.radius;
    };

    Sphere.prototype.set_center = function (x, y, z) { // Argument Types: (float, float, float)
        this.center.x = x;
        this.center.y = y;
        this.center.z = z;
    };
}());