// Trace.js - Sampler.ts

/// <reference path="./../Utilities/Point2D.ts" />

module Tracejs {
    export class Sampler {
        num_samples : number; // Number of sample points in a pattern.
        num_sets : number; // Number of sample sets (patterns) stored.
        samples : Array<Point2D>; // Sample points on a unit square.
        shuffled_indices : Array<number>; // Shuffled samples array indices.
        count : number; // Current number of sample points used.
        jump : number; // Random index jump.

        constructor(n_samples ?: number, n_sets ?: number) {
            if (n_samples) {
                this.num_samples = n_samples;
            }
            else {
                this.num_samples = 1;
            }

            if (n_sets) {
                this.num_sets = n_sets;
            }
            else {
                this.num_sets = 83;
            }

            this.count = 0;
            this.jump = 0;

            this.shuffled_indices = new Array();

            this.setup_shuffled_indices();
        }

        generate_samples() : void {} // "Virtual".

        sample_unit_square() : Point2D {
            if (this.count % this.num_samples == 0) {
                // Jump.
            }
            return (this.samples[this.jump + this.shuffled_indices[this.jump + this.count++ % this.num_samples]]); 
        }

        setup_shuffled_indices() : void {
            var shuffle = function (o) { // Need to put this somewhere else. Works for now.
                for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
                return o;
            };

            // Setup shuffled indices.
            var indices : Array<number> = [];
            for (var i = 0; i < this.num_samples; ++i) {
                indices.push(i);
            }

            for (var i = 0; i < this.num_sets; ++i) {
                shuffle(indices);

                for (var j = 0; j < this.num_samples; ++j) {
                    this.shuffled_indices.push(indices[j]);
                }
            }
        }

        get_num_samples() : number {
            return this.num_samples;
        }
    }
}