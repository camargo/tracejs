/*
    Shahar Zimmerman 1/22/2015
 */
/// <reference path="Point3D.ts" />
var Tracejs;
(function (Tracejs) {
    var Vector3D = (function () {
        /**
         * Vector3D()
         * @param x
         * @param y
         * @param z
         * @constructor
         */
        function Vector3D(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        // Class methods.
        Vector3D.prototype.get_x = function () {
            return this.x;
        };
        Vector3D.prototype.get_y = function () {
            return this.y;
        };
        Vector3D.prototype.get_z = function () {
            return this.z;
        };
        Vector3D.prototype.add = function (v) {
            return new Vector3D(this.x + v.x, this.y + v.y, this.z + v.z);
        };
        Vector3D.prototype.sub = function (v) {
            return new Vector3D(this.x - v.x, this.y - v.y, this.z - v.z);
        };
        Vector3D.prototype.multiply = function (scalar) {
            return new Vector3D(this.x * scalar, this.y * scalar, this.z * scalar);
        };
        Vector3D.prototype.length = function () {
            return Math.sqrt((this.x * this.x) + (this.y * this.y) + (this.z * this.z));
        };
        Vector3D.prototype.length_squared = function () {
            return (this.length() * this.length());
        };
        Vector3D.prototype.dot = function (v) {
            return ((this.x * v.x) + (this.y * v.y) + (this.z * v.z));
        };
        Vector3D.prototype.cross = function (v) {
            return new Vector3D(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
        };
        Vector3D.prototype.angle_between = function (v) {
            if (this.length() == 0 || v.length() == 0) {
                return 0;
            }
            var radians = Math.acos(this.dot(v) / (this.length() * v.length()));
            return radians * (180 / Math.PI);
        };
        Vector3D.prototype.normalize = function () {
            var mag = this.length();
            this.x /= mag;
            this.y /= mag;
            this.z /= mag;
        };
        Vector3D.prototype.distance_from = function (v) {
            return Math.sqrt((this.x - v.x) * (this.x - v.x) + (this.y - v.y) * (this.y - v.y) + (this.z - v.z) * (this.z - v.z));
        };
        return Vector3D;
    })();
    Tracejs.Vector3D = Vector3D;
})(Tracejs || (Tracejs = {}));
