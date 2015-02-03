describe("SingleSphere class", function() {
    it("will run trace correctly when there is a hit", function() {
        var world = new Tracejs.World();
        var ss = new Tracejs.SingleSphere(world);
        expect(ss).toBeDefined();

        var origin = new Tracejs.Point3D(0.0, 0.0, 100.0);
        var dir = new Tracejs.Vector3D(0.0, 0.0, -1.0);

        var ray = new Tracejs.Ray(origin, dir);
       
        // hit will be true
        expect(ss.trace(ray)).toEqual(new Tracejs.RGBColor(1.0, 0.0, 0.0));
    });

    it("will run trace correctly when there is not a hit", function() {
        var world = new Tracejs.World();
        var ss = new Tracejs.SingleSphere(world);
        expect(ss).toBeDefined();

        var origin = new Tracejs.Point3D(0.0, 2.0, -100.0);
        var dir = new Tracejs.Vector3D(0.0, 0.0, -1.0);

        var ray = new Tracejs.Ray(origin, dir);

        // hit will be false (returning a black RBGColor)
        expect(ss.trace(ray)).toEqual(new Tracejs.RGBColor(0.0, 0.0, 0.0));
    });
});