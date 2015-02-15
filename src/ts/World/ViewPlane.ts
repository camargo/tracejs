// Trace.js - ViewPlane.ts

/// <reference path="./../Utilities/Point2D.ts" />
/// <reference path="./../Samplers/Sampler.ts" />
/// <reference path="./../Samplers/MultiJittered.ts" />
/// <reference path="./../Samplers/Regular.ts" />

module Tracejs {
    export class ViewPlane {
        hres : number;
        vres : number;
        psize : number;
        sampler : Sampler;
        num_samples : number; // Samples per pixel.

        /**
         * ViewPlane()
         * @param hres
         * @param vres
         * @param psize
         * @constructor
         */
        constructor(hres?:number, vres?:number, psize?:number) {
            if (hres) {
                this.hres = hres;
            }
            else {
                this.hres = 512;
            }
            if (vres) {
                this.vres = vres;
            }
            else {
                this.vres = 512;
            }
            if (psize) {
                this.psize = psize;
            }
            else {
                this.psize = 1;
            }
        }

        /* getters and setters */
        set_sampler(sp : Sampler) : void {
            this.num_samples = sp.get_num_samples();
            this.sampler = sp;
        }

        set_samples(n_samples ?: number) : number {
            if (n_samples && n_samples > 1) {
                this.sampler = new MultiJittered(n_samples)
            }
            else if (n_samples && n_samples === 1) {
                this.sampler = new Regular(n_samples)
            }
            return this.num_samples
        }

        getHres() : number {
            return this.hres
        }

        setHres(hres:number) : ViewPlane {
            this.hres = hres;
            return this
        }

        getVres() : number {
            return this.vres
        }

        setVres(vres:number) : ViewPlane {
            this.vres = vres;
            return this
        }

        getPsize() : number {
            return this.psize
        }

        setPsize(psize:number) : ViewPlane {
            this.psize = psize;
            return this
        }
    }
}