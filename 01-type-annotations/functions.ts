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
