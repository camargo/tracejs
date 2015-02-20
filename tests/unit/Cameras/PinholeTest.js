describe("Pinhole Class", function() {
    it("Constructs a camera class", function() {
        var p = new Tracejs.Pinhole(); 
	expect(p).toBeDefined();
    });
    
    it("ray_direction() works", function() {
        var c = new Tracejs.Pinhole();
	var pp = new Tracejs.Point2D(0,0);
	var v = new Tracejs.Vector3D(0,0,0);
	var k = new Tracejs.Vector3D(0,0,0);

	k = c.ray_direction(pp);

	expect(v).toEqual(k);
    });

    it("render_scene() works", function() {
        var w = new Tracejs.World();
	// need some insight here
    });
});
