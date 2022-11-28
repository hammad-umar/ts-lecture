// Union Types
// -> Union types allow us to give a value a few different possible types.
// -> We can create a union type by using a single pipe character "|" to
// separate the types we want to include.

let age: number | string = 20
age = '30'

// ERROR - Type 'boolean' is not assignable to type 'string | number'.

// age = true

// -> We can also use union of custom types.

type Loc = {
  lat: number
  long: number
}

type Point = {
  x: number
  y: number
}

let distance: Loc | Point = {
  x: 10,
  y: 20,
}

distance = { lat: 200, long: -200 }

// -> We can also use union types with parameters of a function.

const showPerson = (person: string | boolean) => {
  return person
}

showPerson('Ali')

// ERROR - Argument of type '20' is not assignable to parameter of type 'string |
// boolean'.

// showPerson(20)

// -> Type Narrowing with Union Types.
// Narrowing the type is simply doing a type check before working with a value.

// price -> 200 or "$200"

function calculateTax(price: number | string, tax: number) {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''))
  }

  return price * tax
}

calculateTax(200, 2)
calculateTax('$200', 2)

// -> Array of union types.

const coords: (Loc | Point)[] = []

coords.push({ x: 10, y: 10 })
coords.push({ lat: 200, long: -200 })

const ages: (string | number)[] = [20, 22, 35, '42', '45', '20']

ages.push('37')
ages.push(21)

// -> Literal Types.
// Literal types are not just types, but values themselves too.

let hi: 'hi' = 'hi'
let zero: 0 = 0

// ERROR - Type '"bye!"' is not assignable to type '"hi"'.

// hi = 'bye!'

// ERROR - Type '10' is not assignable to type '0'.

// zero = 10

// -> We can combine union and a literal type.

let mood: 'Happy' | 'Sad' = 'Happy'
mood = 'Sad'

// ERROR - Type '"Angry"' is not assignable to type '"Happy" | "Sad"'.

// mood = 'Angry'

const giveAnswer = (answer: 'Yes' | 'No' | 'Maybe'): void => {
  console.log(`Your answer is: ${answer}`)
}

giveAnswer('Yes')
giveAnswer('No')
giveAnswer('Maybe')

type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday'

let today: DayOfWeek = 'Thursday'
today = 'Monday'

// ERROR - Type '"weds"' is not assignable to type 'DayOfWeek'.

// today = 'weds'
