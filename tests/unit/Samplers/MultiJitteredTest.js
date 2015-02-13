/**
 * Created by mzimmerman on 2/12/15.
 */

describe("MultiJitteredTest", function() {
    it("constructor", function() {
        var samplerDefault = new Tracejs.MultiJittered();
        var samplerCustom = new Tracejs.MultiJittered(16);

        expect(samplerDefault.get_num_samples()).toEqual(1);
        expect(samplerCustom.get_num_samples()).toEqual(16);
    });

    it("generate_samples", function() {
        var sampler = new Tracejs.MultiJittered(10);
        var samples = sampler.generate_samples();

        expect(samples).toHaveLength(sampler.num_samples * sampler.num_sets)
    })
})
