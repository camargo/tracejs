describe("BRDF class", function() {   
    it("should return BRDF's default 'f' function", function() {
        var BRDF = new Tracejs.BRDF(); 
        expect(BRDF.f()).toEqual(new Tracejs.RGBColor(0,0,0));
    });

    it("should return BRDF's default 'fSample' function", function() {
        var BRDF = new Tracejs.BRDF(); 
        expect(BRDF.fSample()).toEqual(new Tracejs.RGBColor(0,0,0));
    });

    it("should return BRDF's default rho' function", function() {
        var BRDF = new Tracejs.BRDF(); 
        expect(BRDF.rho()).toEqual(new Tracejs.RGBColor(0,0,0));
    });
 
});