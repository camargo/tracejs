module Tracejs {
    export class ViewPlane {
        hres : number;
        vres : number;
        psize : number;

        constructor(hres : number, vres : number, psize : number) {
            this.hres = hres;
            this.vres = vres;
            this.psize = psize;
        }

        get_hres() : number {
            return this.hres;
        }

        set_hres(hres : number) {
            this.hres = hres;
        }

        get_vres() : number {
            return this.vres;
        }

        set_vres(vres : number) {
            this.vres = vres;
        }

        get_psize() : number {
            return this.psize;
        }

        set_psize(psize : number) {
            this.psize = psize;
        }
    }
}