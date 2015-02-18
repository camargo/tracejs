describe("Light class", function() {
    
    it("should construct a light with shadows", function() {
        var light = new Tracejs.Light(true);
        expect(light.get_shadows()).toEqual(true);
    });
    
    it("should assign a light with no shadows", function() {
        var light = new Tracejs.Light(true);
        light.set_shadows(false);
        expect(light.get_shadows()).toEqual(false);
    });
    
    it("should return the zero color", function() {
        var light = new Tracejs.Light(true);

        // Should be called with a ShadeRec argument
        /*
        var color = light.L();
        expect(color.get_r()).toEqual(0.0);
        expect(color.get_g()).toEqual(0.0);
        expect(color.get_b()).toEqual(0.0);
        */
    });

    it("should return the zero color", function() {
        var light = new Tracejs.Light(true);
        var dir = light.get_direction();
        expect(dir.get_x()).toEqual(0.0);
        expect(dir.get_y()).toEqual(0.0);
        expect(dir.get_z()).toEqual(0.0);
    })
});
