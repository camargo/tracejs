describe("Vector3D class", function() {
    /*it("should return Vector3D", function() {
        var vec = new Tracejs.Vector3D(-1.0, 0.0, 10.0);
        expect(vec.type()).toEqual("Vector3D");
    });*/
   
    it("should create vector with set coordinates (x,y,z)", function() {
        var vec = new Tracejs.Vector3D(-1.0, 0.0, 20.0);
        expect(vec.get_x()).toEqual(-1.0);
        expect(vec.get_y()).toEqual(0.0);
        expect(vec.get_z()).toEqual(20.0);
    });
 
    /*it("should add the vectors (x,y,z) coordinates", function() {
        var vec_a = new Tracejs.Vector3D(-1.0, 0.0, 10.0);
        var vec_b = new Tracejs.Vector3D(1.0, 3.0, 17.0);
    
        var vec_sum = vec_a.add(vec_b);

        expect(vec_sum.get_x()).toEqual(0.0);
        expect(vec_sum.get_y()).toEqual(3.0);
        expect(vec_sum.get_z()).toEqual(27.0);
    });

    it("should subtract the vectors (x,y,z) coordinates", function() {
        var vec_a = new Tracejs.Vector3D(4.0, -2.0, 5.0);
        var vec_b = new Tracejs.Vector3D(3.0, 3.0, 17.0);
    
        var vec_diff = vec_a.sub(vec_b);

        expect(vec_diff.get_x()).toEqual(1.0);
        expect(vec_diff.get_y()).toEqual(-5.0);
        expect(vec_diff.get_z()).toEqual(-12.0);
    });

    
    it("should scale the vector (x,y,z) coordiantes by a scalar constant", function() {
        var vec_a = new Tracejs.Vector3D(-1.0, 2.0, 25.0);
        var scale = 2.0; 

        var vec_scaled = vec_a.multiply(scale);
        expect(vec_scaled.get_x()).toEqual(-2.0);
        expect(vec_scaled.get_y()).toEqual(4.0);
        expect(vec_scaled.get_z()).toEqual(50.0);
    });


    it("should return the length of the vector", function() {
        var vec_a = new Tracejs.Vector3D(0.0, 0.0, 2.0);
        var len = vec_a.length();
        expect(len).toEqual(2.0);
    });
    
    // 2 decimal places of accuracy for float comparison
    it("should return the length squared of the vector", function() {
        var vec_a = new Tracejs.Vector3D(1.0, 1.0, 1.0);
        var len = (Math.round(vec_a.length_squared() * 100)/100);
        expect(len).toEqual(3.0);
    });


    it("should return the dot product of two vectors", function() {
        var vec_a = new Tracejs.Vector3D(3.0, 6.0, -2.0);
        var vec_b = new Tracejs.Vector3D(-2.0, 3.0, 5.0);
        var dot_p = vec_a.dot(vec_b);
        expect(dot_p).toEqual(2.0);
    });
    
    // note a cross b does not necessarily equal b cross a.
    it("should return the cross product of two vectors", function() {
        var vec_a = new Tracejs.Vector3D(2.0, 1.0, -1.0);
        var vec_b = new Tracejs.Vector3D(-3.0, 4.0, 1.0);
        
        var vec_cross = vec_a.cross(vec_b);
        expect(vec_cross.get_x()).toEqual(5.0);
        expect(vec_cross.get_y()).toEqual(1.0);
        expect(vec_cross.get_z()).toEqual(11.0);
    });

    it("should return a unit vector in the same direction", function() {
        var vec_a = new Tracejs.Vector3D(1.0, 0.0, 1.0);
        vec_a.normalize();
        var len = (Math.round(vec_a.length() * 100)/100);
        expect(len).toEqual(1.0);
    });

    it("should return the distance between two vectors", function() {
        var vec_a = new Tracejs.Vector3D(3.0, 1.0, -1.0);
        var vec_b = new Tracejs.Vector3D(1.0, -2.0, 0.0);
        var distance = (Math.round(vec_a.distance_from(vec_b) * 100)/100); 
        var correct  = (Math.round(Math.sqrt(14.0) * 100)/100);
        expect(distance).toEqual(correct);
    });
    
    it("should return the angle between two vectors", function() {
        var vec_a = new Tracejs.Vector3D(3.0, -4.0, -1.0);
        var vec_b = new Tracejs.Vector3D(0.0, 5.0, 2.0);
        
        var angle   = (Math.round(vec_a.angle_between(vec_b)*100)/100);
        var correct = 143.24;
        expect(angle).toEqual(correct);
    });*/
});
