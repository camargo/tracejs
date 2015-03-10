describe("Torus Class", function() {
    it("should construct plane correctly", function() {
        var torus = new Tracejs.Torus();

        expect(torus).toBeDefined();

        var a = 20.4; var b = 3;
        var t2 = new Tracejs.Torus(new Tracejs.Material(), new Tracejs.RGBColor(), a, b);
        expect(a).toEqual(t2.get_a());
        expect(b).toEqual(t2.get_b());
    });

    it("should compute_normal", function() {
        var t = new Tracejs.Torus(new Tracejs.Material(), new Tracejs.RGBColor(),1,2);
        var t_test = new Tracejs.Torus(new Tracejs.Material(), new Tracejs.RGBColor(), 1,2);

        var p = new Tracejs.Point3D(2,3,4);
        var p_test = new Tracejs.Point3D(2,3,4);
        
        var ans = new Tracejs.Normal();
        var check = new Tracejs.Normal();

        ans = t.compute_normal(p);

        var p_s = t_test.a * t_test.a + t_test.b * t_test.b;         
        var ck_s = t.a * t.a + t.b * t.b;
        expect(p_s).toEqual(ck_s);
  
        var xx = p_test.x;
        expect(xx).toEqual(p.x);
        var yy = p_test.y;
        expect(yy).toEqual(p.y);
        var zz = p_test.z;
        expect(zz).toEqual(p.z);

        var s_s = xx * xx + yy * yy + zz * zz;
        var ck_ss = p.x * p.x + p.y * p.y + p.z * p.z;
        expect(s_s).toEqual(ck_ss);
  
        check.x = 4.0 * xx * (s_s - p_s);
        check.y = 4.0 * yy * (s_s - p_s + 2.0 * t_test.a * t_test.a);
        check.z = 4.0 * zz * (s_s - p_s);
        check.normalize();
        expect(check).toEqual(ans);
    });

});
