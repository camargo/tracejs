/**
 * Created by mzimmerman on 1/21/15.
 */

describe("ViewPlane class", function() {
    it("should take on correct hres and vres when specified in arguments", function() {
        var hres = 100;
        var vres = 50;
        var psize = 5;

        var viewPlane = new Tracejs.ViewPlane(hres, vres, psize);

        expect(viewPlane.get_hres()).toEqual(hres);
        expect(viewPlane.get_vres()).toEqual(vres);
        expect(viewPlane.get_psize()).toEqual(psize);
    });
});