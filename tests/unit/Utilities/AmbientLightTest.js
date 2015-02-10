describe("AmbientLight class", function() {
    
    it("should construct an AmbientLight", function() {
        var amblight = new Tracejs.AmbientLight(true, 1.0, 
                                           new Tracejs.RGBColor(1.0, 0.0, 0.0));
        var color  = amblight.get_color();
        expect(amblight.get_shadows()).toEqual(true);
        expect(amblight.get_ls()).toEqual(1.0);
        expect(color.get_r()).toEqual(1.0);
        expect(color.get_g()).toEqual(0.0);
        expect(color.get_b()).toEqual(0.0);
    });

    it("should mainpulate all of the PointLight fields", function() {
        var amblight = new Tracejs.AmbientLight(true, 1.0, 
                                           new Tracejs.RGBColor(1.0, 0.0, 0.0));
        amblight.set_color(new Tracejs.RGBColor(0.0, 0.0, 1.0));
        amblight.set_shadows(false);
        amblight.set_ls(-15.0);
        var color  = amblight.get_color();
        expect(amblight.get_shadows()).toEqual(false);
        expect(amblight.get_ls()).toEqual(-15.0);
        expect(color.get_r()).toEqual(0.0);
        expect(color.get_g()).toEqual(0.0);
        expect(color.get_b()).toEqual(1.0);
    });
    
    it("should return the direction", function() {
        var amblight = new Tracejs.AmbientLight(true, 2, 
                                           new Tracejs.RGBColor(1, 3, 5)); 
        var direction = amblight.get_direction();
        expect(direction.get_x()).toEqual(0.0);
        expect(direction.get_y()).toEqual(0.0);
        expect(direction.get_z()).toEqual(0.0);
    });
        
    it("should return the incident radiance", function() {
        var amblight = new Tracejs.AmbientLight(true, 2, 
                                           new Tracejs.RGBColor(1, 3, 5));
        var color = amblight.incident_radiance();
        expect(color.get_r()).toEqual(2);
        expect(color.get_g()).toEqual(6);
        expect(color.get_b()).toEqual(10);
    })

});
