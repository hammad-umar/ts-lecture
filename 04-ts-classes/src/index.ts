console.log('TS CLASSES!')

// TypeScript Classes.
// -> Annotating a TypeScript class.

class Player {
  // Read-Only modifier
  // -> It is exclusive to only TypeScript, by using it we can make a field readonly.
  readonly first: string

  // Public modifier.
  // -> It is exclusive to TypeScript only, In TS all the fields are public
  // by default.
  // -> It means we can access the fields outside of a class.
  // -> There is no need to tell the TypeScript that this field or method is
  // public because by default all the methods or properties are public.
  public readonly last: string

  // Class Fields
  // -> We can also rely on type inference in a class when are defining a field
  // -> When a field is not known by a TypeScript then we annotate it.
  // -> We can also define a field like this and hardcode a value to it.
  score: number = 0

  constructor(first: string, last: string) {
    this.first = first
    this.last = last
  }
}

const player = new Player('A', 'B')

// ERROR - Cannot assign to 'first' because it is a read-only property.

// player.first = 'Ali'
