/**
 * Created by mzimmerman on 2/13/15.
 */

module Tracejs {
    export function randomInt(min : number, max : number) : number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    export function shuffleArray(o) { // Need to put this somewhere else. Works for now.
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    };
}
