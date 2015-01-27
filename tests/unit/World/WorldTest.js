/*
    Shahar Zimmerman 1/27/15
 */

describe("World class", function() {
    it("constructor", function() {

        var defaultWorld = new Tracejs.World();
        var customWorld = new Tracejs.World(new Tracejs.RGBColor(50,100,50));

        expect(defaultWorld).toBeDefined();
        expect(customWorld).toBeDefined();
        expect(defaultWorld.background_color).toEqual(new Tracejs.RGBColor(0,0,0));
        expect(customWorld.background_color).toEqual(new Tracejs.RGBColor(50,100,50));
    })
});