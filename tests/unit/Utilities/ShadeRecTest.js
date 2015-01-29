describe("ShadeRec class", function() {
    it("should return no errors", function() {

           //Test Point3D variables 
           var point_a = new Tracejs.Point3D(0.0, 0.0, 0.0);
           var point_b = new Tracejs.Point3D(1.0, 0.0, 1.0);
           
           //Test Vector3D variable
           var vector = new Tracejs.Vector3D(5.5, 1.0, 2.0);

           //Test Ray variable
           var r = new Tracejs.Ray(point_a, vector);

           //Test Normal variable
           var n = new Tracejs.Normal(2.0, 2.0, 2.0);

           //Test RGBColor variable
           var c = new Tracejs.RGBColor(5.0, 5.0, 5.0);

           //Test World variable
           var w = new Tracejs.World(c);

           
           //test ShadeRec variable
           var a = new Tracejs.ShadeRec(true, point_a, point_b, n, r, 1.0, vector, w);
           

           /**
           The point of the below tests are to check that variables are being correctly
           passed through the ShadeRec constructor with the correct initial input. 
           */

           //Test boolean in ShadeRec
           expect(a.get_hit() == true); //works

           //Test Point3D in ShadeRec (hit_point())
           expect(a.get_hit_point()).toEqual(point_a); //works

           //Test Point3D in ShadeRec (local_hit_point())
           expect(a.get_local_hit_point()).toEqual(point_b); //works

           //Test Ray in ShadeRec
           expect(a.get_ray()).toEqual(r);

           //Test depth in ShadeRec
	         expect(a.get_depth()).toEqual(1.0); //works
           
           //Test Vector 3D in ShadeRec
           expect(a.get_vector()).toEqual(vector); //works

           //Test Normal in ShadeRec
           expect(a.get_normal()).toEqual(n);

           //Test World in ShadeRec
           expect(a.get_world()).toEqual(w);

     });
});