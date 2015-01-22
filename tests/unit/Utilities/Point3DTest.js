describe("Point3D class", function() {
    it("should construct a point at the origin", function() {

        var point = new Tracejs.Point3D(0.0, 0.0, 0.0);

        expect(point.get_x()).toEqual(0.0);
        expect(point.get_y()).toEqual(0.0);
        expect(point.get_z()).toEqual(0.0);
    });

    it("should reverse the sign of x, y, and z", function() {
        var point = new Tracejs.Point3D(1.0, 1.0, 1.0);

        point.negate();

        expect(point.get_x()).toEqual(-1.0);
        expect(point.get_y()).toEqual(-1.0);
        expect(point.get_z()).toEqual(-1.0);
    });

    it("should subtract one point from another, resulting in a Vector3D", function () {
        var point1 = new Tracejs.Point3D(10.0, 9.0, 8.0);
        var point2 = new Tracejs.Point3D(6.0, 3.0, 10.0);

        expect(point1.sub_point(point2)).toEqual(new Tracejs.Vector3D(4.0, 6.0, -2.0));
    });

    it("should add a vector to a point, resulting in a Point3D", function () {
        var point = new Tracejs.Point3D(0.0, 0.0, 0.0);
        var vector = new Tracejs.Vector3D(10.0, 10.0, 10.0);

        expect(point.add_vector(vector)).toEqual(new Tracejs.Point3D(10.0, 10.0, 10.0));
    });

    it("should subtract a vector from a point, resulting in a Point3D", function () {
        var point = new Tracejs.Point3D(10.0, 10.0, 10.0);
        var vector = new Tracejs.Vector3D(10.0, 10.0, 10.0);

        expect(point.sub_vector(vector)).toEqual(new Tracejs.Point3D(0.0, 0.0, 0.0));
    });

    it("should return the squared distance between two points", function() {

        var point1 = new Tracejs.Point3D(0.0, 0.0, 0.0);
        var point2 = new Tracejs.Point3D(2.0, 2.0, 2.0);

        expect(point1.d_squared(point2)).toEqual(12.0);
    });
});