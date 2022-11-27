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
