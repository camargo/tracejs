/*
    Steven Esser 1/30/15
*/

desctribe("SingleSphere class", function() {
    it("will run trace", function() {
       var sphere = new Tracejs.Sphere(new Tracejs.Point3D(0.0,0.0,0.0), 1.0); 

       var origin = new Tracejs.Point3D(0.0,0.0,100.0);
       var dir = new Tracejs.Vector3D(0.0,0.0,-1.0);

       var ray = new Tracejs.Ray(origin, dir);
       
       var ss = new Tracejs.SingleSphere();
    });
});
