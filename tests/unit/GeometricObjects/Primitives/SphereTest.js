describe("Sphere class", function() {
    it("should construct sphere correctly", function() {
        var sphere = new Tracejs.Sphere();
        expect(sphere.get_color()).toEqual(new Tracejs.RGBColor(1.0, 0.0, 0.0));

        sphere.set_color(new Tracejs.RGBColor(0.0, 0.0, 0.0));
        expect(sphere.get_color()).toEqual(new Tracejs.RGBColor(0.0, 0.0, 0.0));

        expect(sphere.get_center()).toEqual(new Tracejs.Point3D(0.0, 0.0, 0.0));
        expect(sphere.get_radius()).toEqual(1.0);

        var center = new Tracejs.Point3D(10.0, 10.0, 10.0);
        var radius = 200.0;
        var sphere = new Tracejs.Sphere(null, null, center, radius);
        expect(sphere.get_center()).toEqual(center);
        expect(sphere.get_radius()).toEqual(radius);

        expect(Tracejs.Sphere.kEpsilon).toEqual(0.001);
    });

    it("should correctly record a hit sphere intersection", function() {
        var sphere = new Tracejs.Sphere(new Tracejs.Point3D(0.0, 0.0, 0.0), 1.0);

        var origin = new Tracejs.Point3D(0.0, 0.0, 100.0);
        var dir = new Tracejs.Vector3D(0.0, 0.0, -1.0);

        var ray = new Tracejs.Ray(origin, dir);

        expect(sphere.hit(ray)).toEqual(true);
    });

    it("should correctly record a miss sphere intersection", function() {
        var sphere = new Tracejs.Sphere(new Tracejs.Point3D(0.0, 0.0, 0.0), 1.0);

        var origin = new Tracejs.Point3D(0.0, 2.0, 100.0);
        var dir = new Tracejs.Vector3D(0.0, 0.0, -1.0);

        var ray = new Tracejs.Ray(origin, dir);

        expect(sphere.hit(ray)).toEqual(false);
    });
});