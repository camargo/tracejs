// Trace.js - Point2D.ts

module Tracejs {
    export class Point2D {
        x : number;
        y : number;

        constructor(x ?: number, y ?: number) {
            if (x) {
                this.x = x;
            }
            else {
                this.x = 0.0;
            }
            if (y) {
                this.y = y;
            }
            else {
                this.y = 0.0;
            }
        }

        get_x() : number {
            return this.x;
        }

        get_y() : number {
            return this.y;
        }

        set_point(p : Point2D) : Point2D {
            this.x = p.x;
            this.y = p.y;

            return this;
        }
    }
}