describe("RGBColor class", function() {
    it("should make a color of kind RGBColor(r,g,b)", function() {
        var point = new Tracejs.RGBColor(0,0,0);

	expect(point.get_r()).toEqual(0);
	expect(point.get_g()).toEqual(0);
	expect(point.get_b()).toEqual(10);
    });
});
