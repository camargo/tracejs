describe("Plane class", function() {
    it("should construct plane correctly", function() {
        var plane = new Tracejs.Plane();

        plane.set_color(new Tracejs.RGBColor(0.0, 0.0, 0.0));
        expect(plane.get_color()).toEqual(new Tracejs.RGBColor(0.0, 0.0, 0.0));
        expect(plane.get_point()).toEqual(new Tracejs.Point3D(0.0, 0.0, 0.0));
        expect(plane.get_normal()).toEqual(new Tracejs.Normal(1.0, 0.0, 0.0));

        var point = new Tracejs.Point3D(10.0, 10.0, 10.0);
        var normal = 200.0;
        var plane = new Tracejs.Plane(null, null, point, normal);
        expect(plane.get_point()).toEqual(point);
        expect(plane.get_normal()).toEqual(normal);

        expect(Tracejs.Plane.kEpsilon).toEqual(0.001);
        
    });

    it("should use plane's set and get functions correctly", function() {
        var plane = new Tracejs.Plane();

        plane.set_normal(new Tracejs.Normal(1.0, 10.0, 1.0));   
        expect(plane.get_normal()).toEqual(new Tracejs.Normal(1.0, 10.0, 1.0));

        plane.set_point(new Tracejs.Point3D(1.0, 10.0, 1.0));
        expect(plane.get_point()).toEqual(new Tracejs.Point3D(1.0, 10.0, 1.0));

    });


    it("should correctly record a miss plane intersection", function() {
        var plane = new Tracejs.Plane();
        var origin = new Tracejs.Point3D(0.0, 0.0, 100.0);
        var dir = new Tracejs.Vector3D(0.0, 0.0, -1.0);
        var ray = new Tracejs.Ray(origin, dir);

        expect(plane.hit(ray)).toEqual(false);
    });



    it("should correctly record a hit plane intersection", function() {

        //t = (point - ray.o) * normal / (ray.d * normal)  
        var plane = new Tracejs.Plane();
       
        plane.set_normal(new Tracejs.Normal(1.0, 1.0, 1.0));
        plane.set_point(new Tracejs.Point3D(2.0, 2.0, 2.0));
        
        var origin = new Tracejs.Point3D(0.0, 0.0, 0.0); //ray.o
        var dir = new Tracejs.Vector3D(1.0, 1.0, 1.0); // ray.d

        var ray = new Tracejs.Ray(origin, dir);
        expect(plane.hit(ray)).toEqual(true);
    });

});