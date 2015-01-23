/*
    Shahar Zimmerman 1/22/2015
 */
/// <reference path="../Interfaces.ts" />
var Tracejs = Tracejs || {};
'use strict';
Tracejs.Point3D = function (x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
};
Tracejs.Point3D.prototype = {
    get_x: function () {
        return this.x;
    },
    get_y: function () {
        return this.y;
    },
    get_z: function () {
        return this.z;
    },
    negate: function () {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
    },
    sub_point: function (point) {
        return new Tracejs.Vector3D(this.x - point.x, this.y - point.y, this.z - point.z);
    },
    add_vector: function (vector) {
        return new Tracejs.Point3D(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    },
    sub_vector: function (vector) {
        return new Tracejs.Point3D(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    },
    d_squared: function (point) {
        return (this.x - point.x) * (this.x - point.x) + (this.y - point.y) * (this.y - point.y) + (this.z - point.z) * (this.z - point.z);
    }
};
