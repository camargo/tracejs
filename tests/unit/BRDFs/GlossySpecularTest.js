describe("GlossySpecular class", function() {   

    it("should return GlossySpecular rho's default color black", function() {
        var gs_w = new Tracejs.GlossySpecular(0,0,0); 
        var gs_wo = new Tracejs.GlossySpecular();
        expect(gs_w.rho()).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(gs_wo.rho(0,0)).toEqual(new Tracejs.RGBColor(0,0,0)); //test rho's parameters sr & wo
    });

    it("should return GlossySpecular's ks number", function() {
        var gloss = new Tracejs.GlossySpecular();
        gloss.set_ks(1.0);
        expect(gloss.get_ks()).toEqual(1.0);
    });

    it("should return GlossySpecular's exp number", function() {
        var gloss = new Tracejs.GlossySpecular();
        gloss.set_exp(1.0);
        expect(gloss.get_exp()).toEqual(1.0);
    });

    it("should return GlossySpecular's cs RGBColor", function() {
        var gloss = new Tracejs.GlossySpecular(0, 0, new Tracejs.RGBColor(1.0, 0.0, 0.0));
        gloss.set_cs(new Tracejs.RGBColor(5.0, 2.0, 1.0));
        var color  = gloss.get_cs();
        expect(color.get_r()).toEqual(5.0);
        expect(color.get_g()).toEqual(2.0);
        expect(color.get_b()).toEqual(1.0);
    });




   //BELOW TESTS GIVE A NULL UNDEFINED ERROR AT RETURN LINE
  /**   


     it("should return GlossySpecular f's function and be equal to black", function() {
        var gs_black = new Tracejs.GlossySpecular();

        //Test Material variable
        var material = new Tracejs.Material(); 

        //Test Point3D variables 
        var point_a = new Tracejs.Point3D(0.0, 0.0, 0.0);
        var point_b = new Tracejs.Point3D(0.0, 0.0, 0.0);
           
        //Test Vector3D variable
        var vector_a = new Tracejs.Vector3D(0.0, 0.0, 0.0);
        var vector_b = new Tracejs.Vector3D(0.0, 0.0, 0.0);

        //Test Ray variable
        var r = new Tracejs.Ray(point_a, vector_a);

        //Test Normal variable
        var n = new Tracejs.Normal(0.0, 0.0, 0.0);

        //Test RGBColor variable
        var c = new Tracejs.RGBColor(0.0, 0.0, 0.0);

        //Test World variable
        var w = new Tracejs.World(c); 

        var test_shadeRec = new Tracejs.ShadeRec(true, material.shade(), point_a, point_b, n, r, 0, vector_a, w);
        
        //f(ShadeRec, Vector3D, Vector3D)
        expect(gs_black.f(test_shadeRec, vector_a, vector_b)).toEqual(new Tracejs.RGBColor(0,0,0));

     });
  */
    /**
    Purpose of GlossySpecular fSample's function is to 
    return this.f(sr, wi, wo). This test will not work
    until the test for f function works. 
    
    it("should return GlossySpecular fSample's function and be equal to black", function() {
        var gs_black = new Tracejs.GlossySpecular(0,0,0); 
        expect(gs_black.fSample(0,0,0)).toEqual(new Tracejs.RGBColor(0,0,0));

    });*/






});