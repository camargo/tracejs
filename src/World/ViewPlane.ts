/**
 * Created by mzimmerman on 1/23/15.
 */

module Tracejs {
    export class ViewPlane {
        // class properties
        hres:number;
        vres:number;
        psize:number;

        /**
         * ViewPlane()
         * @param hres
         * @param vres
         * @param psize
         * @constructor
         */
        constructor(hres:number, vres:number, psize:number) {
            this.hres = hres;
            this.vres = vres;
            this.psize = psize;
        }

        // class methods
        /* getters and setters */
        getHres() {
            return this.hres
        }
        setHres(hres:number) {
            this.hres = hres;
            return this
        }
        getVres() {
            return this.vres
        }
        setVres(vres:number) {
            this.vres = vres;
            return this
        }
        getPsize() {
            return this.psize
        }
        setPsize(psize:number) {
            this.psize = psize;
            return this
        }
    }
}
