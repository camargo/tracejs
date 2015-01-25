describe("Ray class", function() {
    it("should construct a ray starting at the origin pointed in the +Z direction", function() {
        var origin = new Tracejs.Point3D(0.0, 0.0, 0.0);
        var dir = new Tracejs.Vector3D(0.0, 0.0, 1.0);

        var ray = new Tracejs.Ray(origin, dir);

        expect(ray.o).toEqual(origin);
        expect(ray.d).toEqual(dir);
    });

    it("should set ray equal to another ray", function() {
        var origin1 = new Tracejs.Point3D(0.0, 0.0, 0.0);
        var dir1 = new Tracejs.Vector3D(0.0, 0.0, 1.0);

        var origin2 = new Tracejs.Point3D(1.0, 1.0, 1.0);
        var dir2 = new Tracejs.Vector3D(0.0, 0.0, 0.0);

        var ray1 = new Tracejs.Ray(origin1, dir1);
        var ray2 = new Tracejs.Ray(origin2, dir2);
        var ray3 = new Tracejs.Ray(origin1, dir1); // Same as ray1.

        var new_ray = ray1.assign(ray3);

        expect(new_ray).toEqual(ray1);
        expect(new_ray).toEqual(ray3);

        expect(ray1).not.toEqual(ray2);

        var new_ray = ray1.assign(ray2);

        expect(ray1).toEqual(ray2);
        expect(new_ray).toEqual(ray2);
    });
});