/*
Shahar Zimmerman
1/21/2015
 */

(function() {

    Tracerjs.ViewPlane = function(options) {
        if (typeof options == 'object' && typeof options.hres != 'undefined') {
            this.hres = options.hres;
        }
        else {
            this.hres = 150;
        }
        if (typeof options == 'object' && typeof options.vres != 'undefined') {
            this.vres = options.vres;
        }
        else {
            this.vres = 300;
        }
        if (typeof options == 'object' && typeof options.psize != 'undefined') {
            this.psize = options.psize;
        }
        else {
            this.psize = 1;
        }
    }

    Tracerjs.ViewPlane.prototype = {
        /* getters and setters */
        getHres : function() {
            return this.hres
        },
        setHres : function(hres) {
            this.hres = hres;
            return this
        },
        getVres : function() {
            return this.vres
        },
        setVres : function(vres) {
            this.vres = vres;
            return this
        },
        getPsize : function() {
            return this.psize
        },
        setPsize : function(psize) {
            this.psize = psize;
            return this
        }
    }

})();