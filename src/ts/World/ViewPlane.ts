// Trace.js - ViewPlane.ts

module Tracejs {
    export class ViewPlane {
        hres : number;
        vres : number;
        psize : number;

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