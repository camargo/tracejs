var Tracerjs = Tracerjs || {};

(function () {
    'use strict';

    Tracerjs.Sphere = function (center, radius) { // Argument Types: (Point3D, float).
        this.center = center;
        this.radius = radius;
    };

    Tracerjs.Sphere.prototype = new Tracerjs.GeometricObject(); // Inherit from GeometricObject.

    Tracerjs.Sphere.prototype.hit = function (ray, tmin, shadeRec) { // Argument Types: (Ray, float, ShadeRec)
        // TODO: Implement Sphere-Ray-Intersection routine.
    };

    Tracerjs.Sphere.prototype.center = function () {
        return this.center;
    };

    Tracerjs.Sphere.prototype.radius = function () {
        return this.radius;
    };

    Tracerjs.Sphere.prototype.set_center = function (x, y, z) { // Argument Types: (float, float, float)
        this.center.x = x;
        this.center.y = y;
        this.center.z = z;
    };
}());