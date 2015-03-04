describe("Triangle class", function() {
    
    it("should construct triangle correctly", function() {
        var tri = new Tracejs.Triangle();
        expect(tri.get_color()).toEqual(new Tracejs.RGBColor(1.0, 0.0, 0.0));

        tri.set_color(new Tracejs.RGBColor(0.0, 0.0, 0.0));
        expect(tri.get_color()).toEqual(new Tracejs.RGBColor(0.0, 0.0, 0.0));

        expect(tri.get_point1()).toEqual(new Tracejs.Point3D(0.0, 0.0, 0.0));
        expect(tri.get_point2()).toEqual(new Tracejs.Point3D(0.0, 0.0, 1.0));
        expect(tri.get_point3()).toEqual(new Tracejs.Point3D(1.0, 0.0, 0.0));
        expect(tri.get_normal()).toEqual(new Tracejs.Normal(0.0, 1.0, 0.0));

        var p1 = new Tracejs.Point3D(0.0, 0.0, 0.0);
        var p2 = new Tracejs.Point3D(1.0, 2.0, 2.0);
        var p3 = new Tracejs.Point3D(1.0, 1.0, 4.0);
        var normal = new Tracejs.Normal(6.0/Math.sqrt(41.0), -2.0/Math.sqrt(41.0), 
                                        -1.0/Math.sqrt(41.0));
        var tri2 = new Tracejs.Triangle(null, null, p1, p2, p3);
        expect(tri2.get_point1()).toEqual(p1);
        expect(tri2.get_point2()).toEqual(p2);
        expect(tri2.get_point3()).toEqual(p3);
        expect(tri2.get_normal()).toEqual(normal);
        

        expect(Tracejs.Triangle.kEpsilon).toEqual(0.001);
    });
    
    it("should correctly record a hit triangle intersection", function() {
        var tri = new Tracejs.Triangle();

        var origin = new Tracejs.Point3D(0.0, 0.0, 100.0);
        var dir = new Tracejs.Vector3D(0.0, 0.0, -1.0);

        var ray = new Tracejs.Ray(origin, dir);

        expect(tri.hit(ray)).toEqual(true);
    });
    
    it("should correctly record a miss triangle intersection", function() {
        var tri = new Tracejs.Triangle();

        var origin = new Tracejs.Point3D(0.0, 2.0, 100.0);
        var dir = new Tracejs.Vector3D(0.0, 0.0, -1.0);

        var ray = new Tracejs.Ray(origin, dir);

        expect(tri.hit(ray)).toEqual(false);
    });
});
