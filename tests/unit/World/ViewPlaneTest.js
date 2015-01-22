/**
 * Created by mzimmerman on 1/21/15.
 */

 var Tracerjs = Tracerjs || {};

describe("Is karma working", function() {
    it("should work", function() {
        expect(true).toEqual(true)
    })
});

describe("ViewPlane class", function() {

    /*it("should default to vres=150, hres=300, psize=1 when no arguments given", function() {

        var viewplane = new Tracerjs.ViewPlane();

        expect(viewplane.getHres()).toEqual(300);
        expect(viewplane.getVres()).toEqual(150);
        expect(viewplane.getPsize()).toEqual(1);
    });*/

    it("should take on correct hres and vres when specified in arguments", function() {

        var hres = 100;
        var vres = 50;
        var psize = 5;

        var viewPlane = new Tracerjs.ViewPlane({
            hres : hres,
            vres : vres,
            psize : psize
        });

        expect(viewPlane.getHres()).toEqual(hres);
        expect(viewPlane.getVres()).toEqual(vres);
        expect(viewPlane.getPsize()).toEqual(psize);
    })
});


