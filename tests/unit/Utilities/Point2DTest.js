describe("Point2D class", function() {
    it("should construct a 2D point at the origin", function() {
        var point = new Tracejs.Point2D(0.0, 0.0);

        expect(point.get_x()).toEqual(0.0);
        expect(point.get_y()).toEqual(0.0);
    });

    it("should properly set a 2D point", function() {
        var point = new Tracejs.Point2D(0.0, 0.0);

        expect(point.get_x()).toEqual(0.0);
        expect(point.get_y()).toEqual(0.0);

        var new_point = point.set_point(new Tracejs.Point2D(1.0, 1.0));

        expect(point.get_x()).toEqual(1.0);
        expect(point.get_y()).toEqual(1.0);

        expect(new_point.get_x()).toEqual(1.0);
        expect(new_point.get_y()).toEqual(1.0);
    });
});