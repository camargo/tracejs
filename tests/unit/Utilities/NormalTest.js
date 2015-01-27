describe("Normal class", function() {
    it("should construct a normal at the origin", function() {

        var normal = new Tracejs.Normal();

        expect(normal.get_x()).toEqual(0.0);
        expect(normal.get_y()).toEqual(0.0);
        expect(normal.get_z()).toEqual(0.0);
    });

    it("should construct a normal at 1.0, 1.0, 1.0", function() {

        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);

        expect(normal.get_x()).toEqual(1.0);
        expect(normal.get_y()).toEqual(1.0);
        expect(normal.get_z()).toEqual(1.0);
    });

    it("should negate a normal", function() {

        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);

        normal.negate();

        expect(normal.get_x()).toEqual(-1.0);
        expect(normal.get_y()).toEqual(-1.0);
        expect(normal.get_z()).toEqual(-1.0);
    });

    it("should add a normal to a normal and return a new normal", function() {
        var normal1 = new Tracejs.Normal(1.0, 1.0, 1.0);
        var normal2 = new Tracejs.Normal(1.0, 1.0, 1.0);

        var normal3 = normal1.add_norm(normal2);

        expect(normal3.get_x()).toEqual(2.0);
        expect(normal3.get_y()).toEqual(2.0);
        expect(normal3.get_z()).toEqual(2.0);
    });

    it("should add a normal to this normal and return this normal modified", function() {
        var normal1 = new Tracejs.Normal(1.0, 1.0, 1.0);
        var normal2 = new Tracejs.Normal(1.0, 1.0, 1.0);

        var normal3 = normal1.add_norm_this(normal2);

        expect(normal1.get_x()).toEqual(2.0);
        expect(normal1.get_y()).toEqual(2.0);
        expect(normal1.get_z()).toEqual(2.0);

        expect(normal1).toEqual(normal3);
    });

    it("should compute dot product between a normal and a vector", function() {
        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);
        var vector = new Tracejs.Vector3D(1.0, 1.0, 1.0);

        var s = normal.dot_vec(vector);

        expect(s).toEqual(3.0);
    });

    it("should multiply a normal by a scalar on the right and return a new normal", function() {
        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);

        var new_normal = normal.mult_right(100.0);

        var compare_normal = new Tracejs.Normal(100.0, 100.0, 100.0);

        expect(new_normal).toEqual(compare_normal);
    });

    it("should assign a normal to a normal and return the changed normal", function() {
        var normal1 = new Tracejs.Normal();
        var normal2 = new Tracejs.Normal();

        var new_normal = normal1.assign_norm(normal2);

        expect(normal1).toEqual(new_normal);

        var normal2 = new Tracejs.Normal(500.0, 500.0, 500.0);

        var new_normal = normal1.assign_norm(normal2);

        expect(normal1).toEqual(normal2);

        expect(new_normal).toEqual(normal1);
        expect(new_normal).toEqual(normal2);
    });

    it("should assign a vector to a normal and return the changed normal", function() {
        var normal = new Tracejs.Normal();
        var vector = new Tracejs.Vector3D(20.0, 20.0, 20.0);

        var new_normal = normal.assign_vec(vector);

        expect(normal).toEqual(new_normal);
    });

    it("should assign a point to a normal and return the changed normal", function() {
        var normal = new Tracejs.Normal();
        var point = new Tracejs.Point3D(20.0, 20.0, 20.0);

        var new_normal = normal.assign_point(point);

        expect(normal).toEqual(new_normal);
    });

    it("should normalize a normal", function() {
        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);
        var compare_normal = new Tracejs.Normal(0.5773502691896258, 0.5773502691896258, 0.5773502691896258);

        normal.normalize();

        expect(normal).toEqual(compare_normal);
    });

    it("should multiply a normal by a scalar on the left and return a new normal", function() {
        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);
        var scalar = 100.0;

        var new_normal = Tracejs.Normal.mult_left(scalar, normal);

        expect(normal).toEqual(new Tracejs.Normal(1.0, 1.0, 1.0));
        expect(new_normal).toEqual(new Tracejs.Normal(100.0, 100.0, 100.0))
    });

    it("should add a vector and a normal and return a new vector", function() {
        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);
        var vector = new Tracejs.Vector3D(-1.0, -1.0, -1.0);

        var new_vector = Tracejs.Normal.add_vec_norm(vector, normal);

        expect(new_vector).toEqual(new Tracejs.Vector3D(0.0, 0.0, 0.0));
    });

    it("should subtract a normal from a vector and return a new vector", function() {
        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);
        var vector = new Tracejs.Vector3D(-1.0, -1.0, -1.0);

        var new_vector = Tracejs.Normal.sub_vec_norm(vector, normal);

        expect(new_vector).toEqual(new Tracejs.Vector3D(-2.0, -2.0, -2.0));
    });

    it("should compute the dot product between a vector and a normal", function() {
        var normal = new Tracejs.Normal(1.0, 1.0, 1.0);
        var vector = new Tracejs.Vector3D(1.0, 1.0, 1.0);

        var scalar = Tracejs.Normal.dot_vec_norm(vector, normal);

        expect(scalar).toEqual(3.0);
    });
});