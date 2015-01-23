/*
    Shahar Zimmerman 1/22/15
 */
/* Include modules */
/// <reference path="Vector3D.ts" />
var Tracejs;
(function (Tracejs) {
    var Point3D = (function () {
        /**
         * Point3D()
         * @param x
         * @param y
         * @param z
         * @constructor
         */
        function Point3D(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        // class methods
        Point3D.prototype.get_x = function () {
            return this.x;
        };
        Point3D.prototype.get_y = function () {
            return this.y;
        };
        Point3D.prototype.get_z = function () {
            return this.z;
        };
        Point3D.prototype.negate = function () {
            this.x = -this.x;
            this.y = -this.y;
            this.z = -this.z;
        };
        Point3D.prototype.sub_point = function (point) {
            return new Tracejs.Vector3D(this.x - point.x, this.y - point.y, this.z - point.z);
        };
        Point3D.prototype.add_vector = function (vector) {
            return new Point3D(this.x + vector.x, this.y + vector.y, this.z + vector.z);
        };
        Point3D.prototype.sub_vector = function (vector) {
            return new Point3D(this.x - vector.x, this.y - vector.y, this.z - vector.z);
        };
        Point3D.prototype.d_squared = function (point) {
            return (this.x - point.x) * (this.x - point.x) + (this.y - point.y) * (this.y - point.y) + (this.z - point.z) * (this.z - point.z);
        };
        return Point3D;
    })();
    Tracejs.Point3D = Point3D;
})(Tracejs || (Tracejs = {}));
