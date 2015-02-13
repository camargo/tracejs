describe("Camera Class", function() {
    it("Constructs a camera class", function() {
        var cam1 = new Tracejs.Camera();

	// checking the constructor defaults
	expect(cam1.eye).toEqual(new Tracejs.Point3D(0,0,0));
	expect(cam1.lookat).toEqual(new Tracejs.Point3D(0,0,0));
	expect(cam1.up).toEqual(new Tracejs.Vector3D(0,0,0));
	expect(cam1.u).toEqual(new Tracejs.Vector3D(0,0,0));
	expect(cam1.v).toEqual(new Tracejs.Vector3D(0,0,0));
	expect(cam1.w).toEqual(new Tracejs.Vector3D(0,0,0));
    });

    it("function compute_uvw works", function() {
        var cam1 = new Tracejs.Camera();

	cam1.eye = new Tracejs.Point3D(10.0, 9.0, 12.0);
	cam1.lookat = new Tracejs.Point3D(6.0, 3.0, 10.0);
	cam1.up = new Tracejs.Vector3D(1.0, 2.0, 3.0);
	cam1.compute_uvw();

	// checking w value
	var v1 = new Tracejs.Vector3D(4.0, 6.0, 2.0);
	v1.normalize();
	expect(cam1.w).toEqual(v1);

	// checking u value
	var v2 = new Tracejs.Vector3D(0,0,0);
	v2 = cam1.up.exp(cam1.w);
	v2.normalize();
	expect(cam1.u).toEqual(v2);

	// checking v value
	var v3 = new Tracejs.Vector3D(0,0,0);
	v3 = cam1.w.exp(cam1.u);
	expect(cam1.v).toEqual(v3);
    });
});
