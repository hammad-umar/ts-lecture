// Annotating Functions

// 1. Annotating function parameters
// -> Annotating function parameters is same as annotating variables

function print(message: string) {
  console.log(message)
}

print('Hello World!')

// ERROR - Argument of type 'boolean' is not assignable to parameter of type
//'string'.

// print(false)

// ERROR - Argument of type 'number' is not assignable to parameter of type
//'string'.

//print(200.20)

// => We can also annotate more than one parameters of the function.

const greet = (personName: string, personAge: number) => {
  return `Name is: ${personName} and Age is: ${personAge}`
}

greet('John', 22)

// ERROR - Argument of type 'number' is not assignable to parameter of type
//'string'.

// greet(22, 30)

// => Default Parameters

const showMovie = (movieTitle: string = 'Stranger Things') => {
  return `Movie is: ${movieTitle}`
}

showMovie() // Stranger Things
showMovie('In Time') // In Time

// 2. Annotating function return type.
// TypeScript can also infer function return type on it's own.
// NOTE: -> I prefer to annotate it explicitly (Personal Opinion).

const add = (numberOne: number, numberTwo: number): number => {
  return numberOne + numberTwo
}

// string | number -> It's a union type we'll discuss it later.

const randomNumber = (num: number) => {
  if (Math.random() < 0.5) {
    return num.toString()
  }

  return num
}

// 3. Anonymous functions Contextual Typing.
// TypeScript can infer the type of color on it's own, because of how an
// unnamed function is going to be called.

const colors = ['red', 'green', 'blue', 'yellow', 'magenta']

colors.map((color) => {
  return color.toString()
})
