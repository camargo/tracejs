describe("World class", function() {
    var world = {};
    beforeEach(function() {
        world = new Tracejs.World();
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

    it("object API", function() {
        var newObjectArray = [
            {
                type : 'sphere',
                center: {
                    x: 0,
                    y: 0,
                    z: 0
                },
                radius: 200,
                colorHex : "#48F342",
                color : {
                    r : 72,
                    g : 243,
                    b : 66
                }
            },
            {
                type : 'sphere',
                center : {
                    x : 50,
                    y : 50,
                    z : 0
                },
                radius : 100,
                colorHex : "#D52828",
                color : {
                    r : 213,
                    g : 40,
                    b : 40
                }
            },
            {
                type : 'sphere',
                center : {
                    x : 100,
                    y : 100,
                    z : 50
                },
                radius : 250,
                colorHex : "#888888",
                color : {
                    r : 254,
                    g : 254,
                    b : 254
                }
            }
        ];

        var result = world.object(newObjectArray);

        for (var i = 0; i < 3; i++) {
            expect(result[i]).toBeDefined();
        }

        expect(result[0].get_center()).toEqual(new Tracejs.Point3D(0,0,0));
        expect(result[0].get_radius()).toEqual(200);

        expect(result[1].get_center()).toEqual(new Tracejs.Point3D(50,50,0));
        expect(result[1].get_radius()).toEqual(100);

        expect(result[2].get_center()).toEqual(new Tracejs.Point3D(100,100,50));
        expect(result[2].get_radius()).toEqual(250);
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
            if (world[i].objects[0].get_center().get_x() === 0 && world[i].objects[0].get_center().get_y() === 0 && world[i].objects[0].get_center().get_z() === 0) {
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