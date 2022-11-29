console.log('TS CLASSES!')

// TypeScript Classes.
// -> Annotating a TypeScript class.

class Player {
  first: string
  last: string

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }
}

const player = new Player('A', 'B')
