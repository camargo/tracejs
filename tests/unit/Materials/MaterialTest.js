describe("Material class", function() {
    it("should return black", function() {
    	var material = new Tracejs.Material(); 
    	
    	expect(material.shade()).toEqual(new Tracejs.RGBColor(0,0,0));
    	expect(material.area_light_shade()).toEqual(new Tracejs.RGBColor(0,0,0));
    	expect(material.path_shade()).toEqual(new Tracejs.RGBColor(0,0,0));
    });
});