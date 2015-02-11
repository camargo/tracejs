describe("Sampler class", function() {
    it("should construct a Sampler and set up shuffled indices", function() {
        var sampler = new Tracejs.Sampler(5, 2);

        expect(sampler.num_samples).toEqual(5);
        expect(sampler.num_sets).toEqual(2);

        expect(sampler.shuffled_indices.length).toEqual(5*2);

        expect(sampler.shuffled_indices).not.toEqual([0, 1, 2, 3, 4, 0, 1, 2, 3, 4]);
    });
});