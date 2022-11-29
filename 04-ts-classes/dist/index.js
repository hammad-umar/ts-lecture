"use strict";
console.log('TS CLASSES!');
// TypeScript Classes.
// -> Annotating a TypeScript class.
class Player {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
const player = new Player('A', 'B');
