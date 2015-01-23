var Tracejs = Tracejs || {};

(function () {
    'use strict';

    Tracejs.RGBColor = function (r, g, b) { // Arg type: (int, int, int)
        this.r = r;
        this.g = g;
        this.b = b;
    }; 

    Tracejs.RGBColor.prototype = {
        get_r : function() {
            return this.r;
	},
	get_g : function() {
            return this.g;
	},
	get_b : function() {
            return this.b;
	}
    }
}());
