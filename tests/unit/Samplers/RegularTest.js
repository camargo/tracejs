describe("Regular class", function() {
    it("should construct a regular sampler and generate samples", function() {
        var regular_sampler = new Tracejs.Regular();

        expect(regular_sampler.samples.length > 0).toBeTruthy();
    });
});