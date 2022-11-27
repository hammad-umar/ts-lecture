// Annotating Primitive Types
// string, number, boolean, null, undefined

// 1. Strings

let movieTitle: string = 'In Time'
movieTitle = 'Dark Knight'

// It is illegal in TypeScript, but it is totally valid in JavaScript.

// movieTitle = 20

// Accessing the property that does not exists in the string type will throws
// an error.

// movie.upper()

// 2. Numbers and Booleans

// In many programming languages there are more than one type for numbers
// i.e., int, float.
// But in JavaScript as well as in TypeScript numbers are just numbers.

let myAge: number = 23
myAge += 20
myAge = 30

// CAN'T reassign to a different type.

// myAge = '42'

let gameOver: boolean = true
gameOver = false

// CAN'T reassign to a different type.

// gameOver = 'true'

// => Compiling the TypeScript Code into JavaScript using this command
// tsc 01-type-annotations/variables.ts

// Type Inference

// It's a TypeScript compiler ability to infer the types on it's own.
// TypeScript is very intelligent, it remember's the value type even if
// you didn't provide a type annotation.
// Most of the time when we declare a variable we didn't annotate it.

let numOfLives = 20
numOfLives = 18

// ERROR - Type 'string' is not assignable to type 'number'.

// numOfLives = '10'

let isFunny = true
isFunny = false

// ERROR - Type 'string' is not assignable to type 'boolean'.

// isFunny = 'true'

// The "any" Type

// It's an escape hatch!
// It turns OFF type checking for variable so you can do your thing.
// NOTE: It sort of defeats the purpose of TS and TYPES, so use it sparingly!

let isAuthenticated: any = true

// We can reassign it any value

isAuthenticated = null
isAuthenticated = undefined
isAuthenticated = 0
isAuthenticated = 'YES!!!'

// We can also access any property that does not exist.

isAuthenticated.toUpperCase()
