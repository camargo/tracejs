var Tracejs = Tracejs || {};

(function () {
    'use strict';

    Tracejs.Vector3D = function (x, y, z) { // Arguments Types: (float, float, float)
        this.x = x;
        this.y = y;
        this.z = z;
    };

    Tracejs.Vector3D.prototype = {
        get_x : function () {
            return this.x;
        },
        get_y : function () {
            return this.y
        },
        get_z : function () {
            return this.z
        },
        type : function() {
            return "Vector3D";
        },
        add : function(other){ // Argument Type Vector3D
            return new Tracejs.Vector3D(this.x + other.x,
                                        this.y + other.y, 
                                        this.z + other.z);
        },
        sub : function(other){ // Argument Type Vector3D
            return new Tracejs.Vector3D(this.x - other.x,
                                        this.y - other.y,
                                        this.z - other.z);
        },

        multiply: function(scalar){
           return new Tracejs.Vector3D(this.x * scalar, this.y * scalar, this.z * scalar);
        },    
   
        length: function(){
            return Math.sqrt((this.x * this.x) + 
                             (this.y * this.y) + 
                             (this.z * this.z));
        },

        length_squared: function(){
            return (this.length() * this.length());
        },
    
        // dot product
        dot: function(other){
            return ((this.x * other.x) + 
                    (this.y * other.y) +
                    (this.z * other.z));
        },
  
        // cross product
        cross: function(other){
            return new Tracejs.Vector3D(this.y * other.z - this.z * other.y,
                                        this.z * other.x - this.x * other.z,
                                        this.x * other.y - this.y * other.x);
        },

        // theta = (a . b) / (magnitude(a) * magnitude(b))
        // currently returns in degrees, if need to convert formula is:
        // radians = degrees * (pi/180)
        angle_between: function(other){
            // don't divide by 0
            if(this.length() == 0 || other.length() == 0) return 0;
            var radians = Math.acos(this.dot(other) / (this.length() * other.length()));
            return radians * (180 / Math.PI);
        },

        // turn into unit vector (magnitude = 1) 
        normalize: function(){
           var mag = this.length();
           this.x /= mag;
           this.y /= mag;
           this.z /= mag;
        },
    
        // distance between two vectors
        distance_from: function(other){
            return Math.sqrt((this.x - other.x) * (this.x - other.x) +
                             (this.y - other.y) * (this.y - other.y) +
                             (this.z - other.z) * (this.z - other.z));
        },

    }
}());
