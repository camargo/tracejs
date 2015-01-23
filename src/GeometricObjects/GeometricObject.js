/*
    Shahar Zimmerman 1/22/2015
 */
var Tracejs;
(function (Tracejs) {
    'use strict';
    var GeometricObject = (function () {
        function GeometricObject(color) {
            this.color = color;
        }
        return GeometricObject;
    })();
    Tracejs.GeometricObject = GeometricObject;
})(Tracejs || (Tracejs = {}));
