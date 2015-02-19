describe("GlossySpecular class", function() {   
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
        expect(gs_black.f(0, 0, 0)).toEqual(new Tracejs.RGBColor(0,0,0));

     });
    */
    /**
    Purpose of GlossySpecular fSample's function is to 
    return this.f(sr, wi, wo).
    
    it("should return GlossySpecular fSample's function and be equal to black", function() {
        var gs_black = new Tracejs.GlossySpecular(0,0,0); 
        expect(gs_black.fSample(0,0,0)).toEqual(new Tracejs.RGBColor(0,0,0));

    });*/



    it("should return GlossySpecular rho's default color black", function() {
        var gs_w = new Tracejs.GlossySpecular(0,0,0); 
        var gs_wo = new Tracejs.GlossySpecular();
        expect(gs_w.rho()).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(gs_wo.rho(0,0)).toEqual(new Tracejs.RGBColor(0,0,0)); //test rho's parameters sr & wo
    });


});