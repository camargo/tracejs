// Trace.js - Utils.ts

module Tracejs {
    export var invPI : number = 0.3183098861837906715;

    export function randomInt(min : number, max : number) : number {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    export function shuffleArray(o) {
        for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
        return o;
    }
}