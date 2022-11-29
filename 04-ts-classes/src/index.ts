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

  // Private modifier.
  // -> It is exclusive to TypeScript only.
  // -> Private fields / methods are only accessible with in a class.
  private secret: string = 'Some Secret!'

  // Class Fields
  // -> We can also rely on type inference in a class when are defining a field
  // -> When a field is not known by a TypeScript then we annotate it.
  // -> We can also define a field like this and hardcode a value to it.
  private _score: number = 0

  constructor(first: string, last: string) {
    this.first = first
    this.last = last

    this.printSecret()
  }

  // We can also use getters and setters in TS classes just like JS classes.
  get fullName(): string {
    return `${this.first} ${this.last}`
  }

  get score(): number {
    return this._score
  }

  set score(updatedScore: number) {
    if (updatedScore < 0) {
      throw new Error('Score must be positive!')
    }
    this._score = updatedScore
  }

  // Private methods.
  private printSecret() {
    console.log('SECRET IS: ', this.secret)
  }
}

const player = new Player('A', 'B')

// ERROR - Cannot assign to 'first' because it is a read-only property.

// player.first = 'Ali'

// We can not access private fields / methods outside of a class.

// player.secret
// player.printSecret()

// Alternative Syntax Parameters Properties Shorthand.

// -> We can access setters and getters.
player.fullName
player.score
player.score = 10

console.log(player.score)

class Person {
  // Protected Modifier.
  // -> When we define a property / method with a protected modifier it
  // means we can have access to it in this class and in a child class
  // but not everywhere.
  protected secret: string = '******'

  constructor(
    public firstName: string,
    public lastName: string,
    private age: number = 10
  ) {}

  printAge(): void {
    console.log(`Age is: ${this.age}`)
  }
}

class SuperPerson extends Person {
  isSuperPerson: boolean = true

  changeSecret(): void {
    this.secret = '&&&&&********%%%%%'
  }
}

const personOne = new Person('John', 'Doe')

personOne.printAge()

// -> If we try to access private field we can get an error.
// personOne.age

const superPerson = new SuperPerson('Super', 'Person', 24)

superPerson.changeSecret()
