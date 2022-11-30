// Generics.
// -> Generics allow us to define reuseable functions and classes that can
// work with multiple types rather than a single type.

// Built-In Generic Examples.
const userAges: Array<number> = [22, 24, 28, 34]
const countries: Array<string> = ['Pakistan', 'Argentina', 'America']
const bools: Array<boolean> = [false, true, false, true, true]

// Writing our first Generic Function.

interface Dog {
  name: string
  breed: string
}

interface Human {
  first: string
  last: string
}

function identity<T>(item: T): T {
  return item
}

identity<string>('Hello World!')
identity<number>(20)
identity<boolean>(false)

identity<Dog>({ name: 'Elton', breed: 'Husky' })
identity<Human>({ first: 'John', last: 'Doe' })

// Writing another Generic Function.

function getRandomElement<T>(list: T[]): T {
  return list[Math.floor(Math.random() * list.length)]
}

console.log(getRandomElement<string>(['a', 'b', 'c', 'd', 'e']))

console.log(getRandomElement<boolean>([true, false, false, true]))

console.log(getRandomElement<number>([1, 2, 3, 4, 5, 6]))

console.log(
  getRandomElement<Dog>([
    {
      name: 'Elton',
      breed: 'Husky',
    },
    {
      name: 'Rusty',
      breed: 'Silkie',
    },
    {
      name: 'Pinky',
      breed: 'Lab',
    },
    {
      name: 'Price',
      breed: 'Doberman',
    },
  ])
)

// Inferred Generic Type Parameters.
// -> Some time TypeScript inferred the generic types on its own.

getRandomElement(['A', 'B', 'C', 'D', 'E'])

// Generics, Arrow Functions Syntax.

const printListItems = <T>(list: T[]): void => {
  list.forEach((item) => {
    console.log(item)
  })
}

printListItems<string>(['A', 'B', 'C'])

// Generic with Multiple Types.

const mergeObjects = <T, U>(firstObj: T, secondObj: U) => {
  return {
    ...firstObj,
    ...secondObj,
  }
}

const mergedObjs = mergeObjects({ name: 'Ali' }, { pets: ['Elton', 'Rusty'] })

// Generic Type Constraints.

const concatStrs = <T extends string, U extends string>(
  strOne: T,
  strTwo: U
) => {
  return strOne + ' ' + strTwo
}

const concatenatedStrs = concatStrs('A', 'B')

interface Coords {
  longitude: number
  latitude: number
}

const doubleCoords = <T extends Coords>(coords: T): Coords => {
  return {
    latitude: coords.latitude * 2,
    longitude: coords.longitude * 2,
  }
}

doubleCoords<Coords>({ latitude: 100, longitude: 100 })

// Default Type Parameters.

const doSomething = <T = number>(thing: T): T => {
  return thing
}

doSomething('Something!')
doSomething(100)

function makeEmptyArray<T = string>(): T[] {
  return []
}

const arrOfStrings = makeEmptyArray()
const arrOfBooleans = makeEmptyArray<boolean>()
const arrOfNumbers = makeEmptyArray<number>()
const arrOfDogs = makeEmptyArray<Dog>()

arrOfDogs.push({ name: 'Elton', breed: 'Husky' })
arrOfStrings.push('Hammad')

// Generics with Classes.

interface VideoSong {
  title: string
  artist: string
  resolutions: string[]
}

interface AudioSong {
  title: string
  creator: string
}

class Playlist<T> {
  public queue: T[] = []

  addToPlaylist(song: T): void {
    this.queue.push(song)
  }
}

const audioSong = new Playlist<AudioSong>()
audioSong.addToPlaylist({ title: 'XYZ', creator: 'ABC' })

const videoSong = new Playlist<VideoSong>()
videoSong.addToPlaylist({ title: 'A', artist: 'X', resolutions: ['HD', '4k'] })
