describe("PerfectSpecular class", function() {
	it("should return PerfectSpecular f's default color black", function() {
        var gs_w = new Tracejs.PerfectSpecular(0,0,0); 
        var gs_wo = new Tracejs.PerfectSpecular();
        expect(gs_w.f()).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(gs_wo.f(0,0)).toEqual(new Tracejs.RGBColor(0,0,0)); //test rho's parameters sr & wo
	});

/**
	it("should return PerfectSpecular fSample's function and be equal to black", function() {
        var gs_black = new Tracejs.PerfectSpecular(0,0,0); 
        expect(gs_black.fSample(0,0,0)).toEqual(new Tracejs.RGBColor(0,0,0));

    });
*/
	it("should return PerfectSpecular rho's default color black", function() {
        var gs_w = new Tracejs.PerfectSpecular(0,0,0); 
        var gs_wo = new Tracejs.PerfectSpecular();
        expect(gs_w.rho()).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(gs_wo.rho(0,0)).toEqual(new Tracejs.RGBColor(0,0,0)); //test rho's parameters sr & wo
	});
});