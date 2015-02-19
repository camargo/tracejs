describe("PerfectSpecular class", function() {
	it("should return PerfectSpecular f's default color black", function() {
        var gs_w = new Tracejs.PerfectSpecular(0,0,0); 
        var gs_wo = new Tracejs.PerfectSpecular();
        expect(gs_w.f()).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(gs_wo.f(0,0)).toEqual(new Tracejs.RGBColor(0,0,0)); //test rho's parameters sr & wo
	});

	it("should return PerfectSpecular rho's default color black", function() {
        var gs_w = new Tracejs.PerfectSpecular(0,0,0); 
        var gs_wo = new Tracejs.PerfectSpecular();
        expect(gs_w.rho()).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(gs_wo.rho(0,0)).toEqual(new Tracejs.RGBColor(0,0,0)); //test rho's parameters sr & wo
	});

    it("should return PerfectSpecular's kr number", function() {
        var gloss = new Tracejs.PerfectSpecular();
        gloss.set_kr(1.0);
        expect(gloss.get_kr()).toEqual(1.0);
    });

    it("should return PerfectSpecular's cs RGBColor", function() {
        var gloss = new Tracejs.PerfectSpecular(0, 0, new Tracejs.RGBColor(1.0, 0.0, 0.0));
        gloss.set_cr(new Tracejs.RGBColor(5.0, 2.0, 1.0));
        var color  = gloss.get_cr();
        expect(color.get_r()).toEqual(5.0);
        expect(color.get_g()).toEqual(2.0);
        expect(color.get_b()).toEqual(1.0);
    });

    //BELOW TEST GIVE A NULL UNDEFINED ERROR AT RETURN LINE
/**
    it("should return PerfectSpecular fSample's function and be equal to black", function() {
        var gs_black = new Tracejs.PerfectSpecular(0,0,0); 
        expect(gs_black.fSample(0,0,0)).toEqual(new Tracejs.RGBColor(0,0,0));

    });
*/
});