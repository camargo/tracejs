describe("GeometricObject class", function() {
    it("should construct a geometric object with given color", function() {
        var color = new Tracejs.RGBColor(1.0, 0.0, 0.0); // Red.
        var object = new Tracejs.GeometricObject(color);

        expect(object.get_color()).toEqual(color);

        var color = new Tracejs.RGBColor(0.0, 1.0, 0.0); // Green.

        object.set_color(color);

        expect(object.get_color()).toEqual(color);
    });
});