// Trace.js - MiltiJittered.ts

/// <reference path="Sampler.ts" />
/// <reference path="./../Utilities/Utils.ts" />

module Tracejs {
    export class MultiJittered extends Sampler {
        constructor(n_samples ?: number) {
            if (n_samples) {
                super(n_samples)
            }
            else {
                super(1)
            }

            this.samples = [];

            this.generate_samples();
        }

        generate_samples() : void {
            var n = Math.floor(Math.sqrt(this.num_samples));
            var subcellLength = 1.0 / this.num_samples; // sets up subgrid of size num_samples squared

            for (var p=0; p < this.num_sets; p++) {
                for (var i=0; i < n; i++) {
                    for (var j=0; j < n; j++) {
                        // create new Point2D so can access x & y
                        this.samples[i * n + j + p * this.num_samples] = new Point2D();
                        this.samples[i * n + j + p * this.num_samples].x = (i * n + j) * subcellLength + Math.random() * subcellLength;
                        this.samples[i * n + j + p * this.num_samples].y = (j * n + i) * subcellLength + Math.random() * subcellLength;
                    }
                }
            }

            // shuffle x coordinates
            for (var p=0; p < this.num_sets; p++) {
                for (var i=0; i < n; i++) {
                    for (var j=0; j < n; j++) {
                        var k : number = randomInt(j, n-j);
                        var temp = this.samples[i * n + j + p * this.num_samples].x;
                        this.samples[i * n + j + p * this.num_samples].x = this.samples[i * n + k + p * this.num_samples].x;
                        this.samples[i * n + k + p * this.num_samples].x = temp;
                    }
                }
            }

            // shuffle y coordinates
            for (var p=0; p < this.num_sets; p++) {
                for (var i=0; i < n; i++) {
                    for (var j=0; j < n; j++) {
                        var k = randomInt(j, n-j);
                        var temp = this.samples[j * n + i + p * this.num_samples].y;
                        this.samples[j * n + i + p * this.num_samples].y = this.samples[k * n + i + p * this.num_samples].y;
                        this.samples[k * n + i + p * this.num_samples].y = temp;
                    }
                }
            }
        }
    }
}
