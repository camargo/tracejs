// Trace.js - Regular.ts

/// <reference path="Sampler.ts" />

module Tracejs {
    export class Regular extends Sampler {
        constructor(n_samples ?: number) {
            if (n_samples) {
                super(n_samples);
            }
            else {
                super(1); // Default to 1 sample per pixel.
            }

            this.generate_samples();
        }

        generate_samples() : void {
            var n = Math.floor(Math.sqrt(this.num_samples));

            for (var j = 0; j < this.num_sets; ++j) {
                for (var p = 0; p < n; ++p) {
                    for (var q = 0; q < n; ++q) {
                        this.samples.push(new Point2D((q + 0.5) / n, (p + 0.5) / n));
                    }
                }
            }
        }
    }
}