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
	},
	add_color : function (color) { // arg type: (RGBColor)
	    return new Tracejs.RGBColor(this.r + color.r, this.g + color.g, this.b + color.b);
	},
	scale : function (c) { // arg type: int
            return new Tracejs.RGBColor(this.r * c, this.g * c, this.b * c);
	},
        div_color : function (color) { // arg type: RGBColor
	    return new Tracejs.RGBColor(this.r / color.r, this.g / color.g, this.b / color.b);
        }
    }
}());
