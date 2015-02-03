describe("Tracer class", function() {
    it("Contructor", function() {
        
	   var t1 = new Tracejs.Tracer();
	   var t2 = new Tracejs.Tracer(new Tracejs.World(new Tracejs.RGBColor(1,1,1)));

	   expect(t1).toBeDefined();
	   expect(t2).toBeDefined();
    });
});