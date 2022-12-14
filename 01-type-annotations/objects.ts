// Annotating Objects

// 1. Annotating an object.

const coordinates: { x: number; y: number } = {
  x: 10,
  y: 20,
}

coordinates.x
coordinates.y

// Error - Property 'width' does not exist on type '{ x: number; y: number; }'.

// coordinates.width

// 2. Annotating function parameter object.

const printRandomCoords = (coords: { x: number; y: number }): void => {
  console.log(`x:${coords.x}, x:${coords.y}`)
}

// 3. Annotating object as a function return type.

const giveCoordinates = (): { width: number; height: number } => {
  return {
    width: Math.random(),
    height: Math.random(),
  }
}

// 4. Excess Properties.
// -> TypeScript will only look on those types we highlight, all the
// other values are ignored by TypeScript.

const coords = { x: 254.2, y: 300.67, width: 150, height: 300 }
printRandomCoords(coords)

// 5. Type Aliases.
// We can create a resuable types with "Type Aliases" and use it where we want.

type Point = {
  x: number
  y: number
}

function doublePoint(point: Point): Point {
  return {
    x: point.x * point.x,
    y: point.y * point.y,
  }
}

// 6. Annotations for Nested Objects.
// -> Nested object means object within an object.
// -> In real world most of the time we deal with nested objects.

type Song = {
  title: string
  price: number
  numOfStreams: number
  credits: {
    singer: string
    songWriter: string
  }
}

const calculatePayout = (song: Song): number => {
  return song.price * song.numOfStreams
}

const printSong = (song: Song): void => {
  console.log(`${song.title} - ${song.credits.singer}`)
}

// 7. Optional fields in Type Aliases.
// -> We can mark fields optional in Type Aliases using "?".

type Person = {
  name: string
  age: number
  address?: string
}

const firstPerson: Person = { name: 'John', age: 42 }
const secondPerson: Person = { name: 'Ali', age: 30, address: 'XYZ...' }

// 8. The "readonly" modifier.

type User = {
  readonly id: number
  username: string
}

const user: User = {
  id: 1,
  username: 'Tony',
}

console.log(user.id)

// ERROR - Cannot assign to 'id' because it is a read-only property.

// user.id = 123

// 9. Intersection Types.
// -> We can combine more than one type into one type using "&".

type Cat = {
  numLives: number
}

type Dog = {
  bread: string
}

type CatDog = Cat & Dog

const myCatDog: CatDog = {
  numLives: 10,
  bread: 'Husky',
}

// -> We can also extend a intersection type by adding a new property.

type Color = {
  code: string
}

type Circle = {
  radius: number
}

type ColorfulCircle = Color &
  Circle & {
    length: number
  }

const myColorfulCircle: ColorfulCircle = {
  code: '#333',
  radius: 250,
  length: 200,
}
