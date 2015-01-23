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
        // class methods
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
        return Vector3D;
    })();
    Tracejs.Vector3D = Vector3D;
})(Tracejs || (Tracejs = {}));
