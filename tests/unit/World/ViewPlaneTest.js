describe("ViewPlane class", function() {
    it("should take on correct hres and vres when specified in arguments", function() {
        var hres = 100;
        var vres = 50;
        var psize = 5;

        var viewPlane = new Tracejs.ViewPlane(hres, vres, psize);

        expect(viewPlane.getHres()).toEqual(hres);
        expect(viewPlane.getVres()).toEqual(vres);
        expect(viewPlane.getPsize()).toEqual(psize);
    });

    it("should default to hres=300, vres=150, psize=1", function() {
        var viewPlane = new Tracejs.ViewPlane();

        expect(viewPlane.getHres()).toEqual(300);
        expect(viewPlane.getVres()).toEqual(150);
        expect(viewPlane.getPsize()).toEqual(1);
    });
});