/**
 * Created by mzimmerman on 1/22/15.
 */

var Tracejs = Tracejs || {};

(function () {
    'use strict';

    Tracejs.GeometricObject = function (color:string) { // Argument Type: (RGBColor).
        this.color = color;
    };

    Tracejs.GeometricObject.prototype.hit = function (ray:number, tmin:number, shadeRec:string) { // Argument Types: (Ray, float, ShadeRec)
        return false;
    };
}());