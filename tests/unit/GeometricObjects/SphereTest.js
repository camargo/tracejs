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
        var sphere = new Tracejs.Sphere(center, radius);
        expect(sphere.get_center()).toEqual(center);
        expect(sphere.get_radius()).toEqual(radius);

        expect(Tracejs.Sphere.kEpsilon).toEqual(0.001);
    });

    it("should correctly record a sphere intersection", function() {
        var sphere = new Tracejs.Sphere();

        expect(sphere.hit()).toEqual(false);
    });
});