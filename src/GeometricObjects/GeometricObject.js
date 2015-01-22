var Tracerjs = Tracerjs || {};

(function () {
    'use strict';

    Tracerjs.GeometricObject = function (color) { // Argument Type: (RGBColor).
        this.color = color;
    };

    Tracerjs.GeometricObject.prototype.hit = function (ray, tmin, shadeRec) { // Argument Types: (Ray, float, ShadeRec)
        return false;
    };
}());