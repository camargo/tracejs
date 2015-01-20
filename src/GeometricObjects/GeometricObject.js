(function () {
    'use strict';

    var GeometricObject = function (color) { // Argument Type: (RGBColor).
        this.color = color;
    };

    GeometricObject.prototype.hit = function (ray, tmin, shadeRec) { // Argument Types: (Ray, float, ShadeRec)
        return false;
    };
}());