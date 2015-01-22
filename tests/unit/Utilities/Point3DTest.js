describe("Point3D class", function() {
    it("should construct a point at the origin", function() {

        var point = new Tracejs.Point3D(0.0, 0.0, 0.0);

        expect(point.x).toEqual(0.0);
        expect(point.y).toEqual(0.0);
        expect(point.z).toEqual(0.0);
    });
});