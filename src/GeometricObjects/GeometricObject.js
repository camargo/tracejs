var Tracejs = Tracejs || {};

(function () {
    'use strict';

    Tracejs.GeometricObject = function (color) { // Argument Type: (RGBColor).
        this.color = color;
    };

    Tracejs.GeometricObject.prototype.hit = function (ray, tmin, shadeRec) { // Argument Types: (Ray, float, ShadeRec)
        return false;
    };
}());