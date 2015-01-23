describe("RGBColor class", function() {
    it("should make a color of kind RGBColor(r,g,b)", function() {
        var point = new Tracejs.RGBColor(0,0,0);

	expect(point.get_r()).toEqual(0);
	expect(point.get_g()).toEqual(0);
	expect(point.get_b()).toEqual(0);
    });

    it("should add two RGBColor together, resulting in a RGBColor", function() {
        var color1 = new Tracejs.RGBColor(5,10,15);
	var color2 = new Tracejs.RGBColor(3,6,9);

	expect(color1.add_color(color2)).toEqual(new Tracejs.RGBColor(8,16,24));
    });
});
