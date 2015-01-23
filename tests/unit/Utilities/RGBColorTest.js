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

    it("should scale (multiply by a constant) an RGBColor by a constant c", function () {
        var c = 10;
	var color = new Tracejs.RGBColor(5,6,7);

	expect(color.scale(c)).toEqual(new Tracejs.RGBColor(50,60,70));
    });

    it("should divide two RGBColor, returning an RGBColor", function () {
        var c1 = new Tracejs.RGBColor(45,90,180);
	var c2 = new Tracejs.RGBColor(5,9,3);  // ans = (9, 10, 60)

	expect(c1.div_color(c2)).toEqual(new Tracejs.RGBColor(9,10,60));
    });

    it("should multiply two RGBColor, returning an RGBColor", function() {
        var c1 = new Tracejs.RGBColor(5,9,15);
	var c2 = new Tracejs.RGBColor(2,9,3); // ans = (10,81,45)

	expect(c1.mult_color(c2)).toEqual(new Tracejs.RGBColor(10,81,45));
    });

    it("shold raise and RGBColor to the power of n", function () {
        var c1 = new Tracejs.RGBColor(5,10,12); 
	var n = 2; // ans = (25, 100, 144)

	expect(c1.exp(n)).toEqual(new Tracejs.RGBColor(25, 100, 144));
    });
});
