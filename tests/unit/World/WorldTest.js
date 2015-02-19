describe("World class", function() {
    var world = {};
    beforeEach(function() {
        world = new Tracejs.World()
    });
    afterEach(function() {
        world = {}
    });

    it("constructor", function() {

        var defaultWorld = new Tracejs.World();
        var customWorld = new Tracejs.World(new Tracejs.RGBColor(50,100,50));

        expect(defaultWorld).toBeDefined();
        expect(customWorld).toBeDefined();
        expect(defaultWorld.background_color).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(customWorld.background_color).toEqual(new Tracejs.RGBColor(50,100,50));
    });

    it("View Plane API", function() {
        var world = new Tracejs.World();
        //expect(world.vp()).toEqual(new Tracejs.ViewPlane(512,512,1));

        var newVp = world.vp(100,50,5);
        //expect(world.vp()).toEqual(new Tracejs.ViewPlane(100,50,5));

    });

    it("bgColor and z-distance API", function() {

        var world = new Tracejs.World();
        expect(world.bgColor()).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(world.vpzw()).toEqual(100);

        world.bgColor(1, 2, 3);
        world.vpzw(200);
        expect(world.bgColor()).toEqual(new Tracejs.RGBColor(1,2,3));
        expect(world.vpzw()).toEqual(200);
    });

    it("sphere API", function() {
        // Need different testing method as the geometry will change a lot.
        //expect(world.sphere()).toEqual(new Tracejs.Sphere(null, null, null, 200.0));

        //world.sphere({x:1,y:2,z:3},5.0);
        //expect(world.sphere()).toEqual(null, null, new Tracejs.Sphere(new Tracejs.Point3D(1,2,3), 5.0));
    });

    it("renderScene()", function() {

        var world = [];
        _(4).times(function() {
            world.push(new Tracejs.World())
        });
        world[1].vp(512,512,1); // view plane small hres, big vres
        world[2].vp(300,300,1); // view plane square

        // if sphere at origin, test that origin pixel is not black
        for (var i = 0; i < 4; i++) {
            if (world[i].geo_sphere.get_center().get_x() === 0 && world[i].geo_sphere.get_center().get_y() === 0 && world[i].geo_sphere.get_center().get_z() === 0) {
                var hres = world[i].vp().getHres();
                var vres = world[i].vp().getVres();
                var json = world[i].renderScene();
                var data = JSON.parse(json);

                //console.log("testing coordinates "+Math.floor(vres / 2).toString()+", "+Math.floor(hres / 2).toString()+" world w/ vp ",world[i].vp());
                expect(data[Math.floor(vres / 2)][Math.floor(hres / 2)].r).not.toEqual(0);
                expect(data[0][0].r).toEqual(0);
                expect(data[vres-1][hres-1].r).toEqual(0);
            }
        }

    })
});