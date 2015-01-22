var Tracejs = Tracejs || {};

(function () {
    'use strict';

    Tracejs.Sphere = function (center, radius) { // Argument Types: (Point3D, float).
        this.center = center;
        this.radius = radius;
    };

    Tracejs.Sphere.prototype = new Tracejs.GeometricObject(); // Inherit from GeometricObject.

    Tracejs.Sphere.prototype.hit = function (ray, tmin, shadeRec) { // Argument Types: (Ray, float, ShadeRec)
        // TODO: Implement Sphere-Ray-Intersection routine.
    };

    Tracejs.Sphere.prototype.center = function () {
        return this.center;
    };

    Tracejs.Sphere.prototype.radius = function () {
        return this.radius;
    };

    Tracejs.Sphere.prototype.set_center = function (x, y, z) { // Argument Types: (float, float, float)
        this.center.x = x;
        this.center.y = y;
        this.center.z = z;
    };
}());