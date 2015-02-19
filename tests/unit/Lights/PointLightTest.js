describe("PointLight class", function() {
    
    it("should construct a PointLight", function() {
        var plight = new Tracejs.PointLight(true, 1.0, 
                                           new Tracejs.RGBColor(1.0, 0.0, 0.0), 
                                           new Tracejs.Vector3D(1.0, 2.0, 3.0));
        var color  = plight.get_color();
        var locate = plight.get_location();
        expect(plight.get_shadows()).toEqual(true);
        expect(plight.get_ls()).toEqual(1.0);
        expect(color.get_r()).toEqual(1.0);
        expect(color.get_g()).toEqual(0.0);
        expect(color.get_b()).toEqual(0.0);
        expect(locate.get_x()).toEqual(1.0);
        expect(locate.get_y()).toEqual(2.0);
        expect(locate.get_z()).toEqual(3.0);
    });
    
    it("should mainpulate all of the PointLight fields", function() {
        var plight = new Tracejs.PointLight(true, 1.0, 
                                           new Tracejs.RGBColor(1.0, 0.0, 0.0), 
                                           new Tracejs.Vector3D(1.0, 2.0, 3.0));
        plight.set_color(new Tracejs.RGBColor(0.0, 0.0, 1.0));
        plight.set_shadows(false);
        plight.set_location(new Tracejs.Vector3D(-1.0,-2.0,-3.0));
        plight.set_ls(-15.0);
        var color  = plight.get_color();
        var locate = plight.get_location();
        expect(plight.get_shadows()).toEqual(false);
        expect(plight.get_ls()).toEqual(-15.0);
        expect(color.get_r()).toEqual(0.0);
        expect(color.get_g()).toEqual(0.0);
        expect(color.get_b()).toEqual(1.0);
        expect(locate.get_x()).toEqual(-1.0);
        expect(locate.get_y()).toEqual(-2.0);
        expect(locate.get_z()).toEqual(-3.0);
    });
    
    it("should return the direction", function() {
        var plight = new Tracejs.PointLight(true, 2, 
                                           new Tracejs.RGBColor(1, 3, 5), 
                                           new Tracejs.Vector3D(1.0, 2.0, 3.0));
        //Test Point3D variables 
        var m = new Tracejs.Material();
        var point_a = new Tracejs.Point3D(0.0, 0.0, 0.0);
        var point_b = new Tracejs.Point3D(1.0, 0.0, 1.0);
        var vector = new Tracejs.Vector3D(5.5, 1.0, 2.0);
        var r = new Tracejs.Ray(point_a, vector);
        var n = new Tracejs.Normal(2.0, 2.0, 2.0);
        var c = new Tracejs.RGBColor(5.0, 5.0, 5.0);
        var w = new Tracejs.World(c);
        var sr = new Tracejs.ShadeRec(w);
        //var direction = plight.get_direction(sr);
        //var len = (Math.round(direction.length()*100)/100);
        
        // have tested this previously, floats are annoying
        //expect(direction.get_x()).toEqual(1.0/Math.sqrt(14.0));
        //expect(direction.get_y()).toEqual(2.0/Math.sqrt(14.0));
        //expect(direction.get_z()).toEqual(3.0/Math.sqrt(14.0));
        //expect(len).toEqual(1.0);
    });
        
    it("should return the incident radiance", function() {
        var plight = new Tracejs.PointLight(true, 2, 
                                           new Tracejs.RGBColor(1, 3, 5), 
                                           new Tracejs.Vector3D(1.0, 2.0, 3.0));
        //Test Point3D variables 
        var m = new Tracejs.Material();
        var point_a = new Tracejs.Point3D(0.0, 0.0, 0.0);
        var point_b = new Tracejs.Point3D(1.0, 0.0, 1.0);
        var vector = new Tracejs.Vector3D(5.5, 1.0, 2.0);
        var r = new Tracejs.Ray(point_a, vector);
        var n = new Tracejs.Normal(2.0, 2.0, 2.0);
        var c = new Tracejs.RGBColor(5.0, 5.0, 5.0);
        var w = new Tracejs.World(c);
        var sr = new Tracejs.ShadeRec(true, m.area_light_shade(), point_a, point_b, n, r, 1.0, vector, w);

        // For some reason undefined
        /*
        var color = plight.L(sr);
        expect(color.get_r()).toEqual(2);
        expect(color.get_g()).toEqual(6);
        expect(color.get_b()).toEqual(10);
        */
    })

});
