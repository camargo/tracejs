describe("DirectionalLight class", function() {
    
    it("should construct a DirectionalLight", function() {
        var dlight = new Tracejs.DirectionalLight(true, 1.0, 
                                           new Tracejs.RGBColor(1.0, 0.0, 0.0),
                                           new Tracejs.Vector3D(4.0, 1.0, 3.0));
        var color  = dlight.get_color();
        var direction = dlight.get_direction();
        expect(dlight.get_shadows()).toEqual(true);
        expect(dlight.get_ls()).toEqual(1.0);
        expect(color.get_r()).toEqual(1.0);
        expect(color.get_g()).toEqual(0.0);
        expect(color.get_b()).toEqual(0.0);
        expect(direction.get_x()).toEqual(4.0/Math.sqrt(26.0));
        expect(direction.get_y()).toEqual(1.0/Math.sqrt(26.0));
        expect(direction.get_z()).toEqual(3.0/Math.sqrt(26.0));
    });

    it("should mainpulate all of the DirectionalLight fields", function() {
        var dlight = new Tracejs.DirectionalLight(true, 1.0, 
                                           new Tracejs.RGBColor(1.0, 0.0, 0.0),
                                           new Tracejs.Vector3D(4.0, 1.0, 3.0));
        dlight.set_color(new Tracejs.RGBColor(0.0, 0.0, 1.0));
        dlight.set_shadows(false);
        dlight.set_ls(2.0);
        dlight.set_direction(new Tracejs.Vector3D(2.0, 2.0, 2.0));
        var color  = dlight.get_color();
        var direction = dlight.get_direction();
        expect(dlight.get_shadows()).toEqual(false);
        expect(dlight.get_ls()).toEqual(2.0);
        expect(color.get_r()).toEqual(0.0);
        expect(color.get_g()).toEqual(0.0);
        expect(color.get_b()).toEqual(1.0);
        expect(direction.get_x()).toEqual(2.0/Math.sqrt(12.0));
        expect(direction.get_y()).toEqual(2.0/Math.sqrt(12.0));
        expect(direction.get_z()).toEqual(2.0/Math.sqrt(12.0));
    });
    
    it("should return the direction", function() {
        var dlight = new Tracejs.DirectionalLight(true, 2, 
                                           new Tracejs.RGBColor(1, 3, 5),
                                           new Tracejs.Vector3D(1.0, 3.0, 5.0)); 
        var direction = dlight.get_direction();
        expect(direction.get_x()).toEqual(1.0/Math.sqrt(35.0));
        expect(direction.get_y()).toEqual(3.0/Math.sqrt(35.0));
        expect(direction.get_z()).toEqual(5.0/Math.sqrt(35.0));
    });
        
    it("should return the incident radiance", function() {
        var dlight = new Tracejs.DirectionalLight(true, 2, 
                                           new Tracejs.RGBColor(1, 3, 5),
                                           new Tracejs.Vector3D(1.0, 3.0, 5.0));
        var color = dlight.incident_radiance();
        expect(color.get_r()).toEqual(2);
        expect(color.get_g()).toEqual(6);
        expect(color.get_b()).toEqual(10);
    })

});
