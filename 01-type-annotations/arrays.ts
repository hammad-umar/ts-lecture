// Typed Arrays
// -> Typed arrays can store data of only one type.

const colors: string[] = ['red', 'green', 'blue', 'yellow', 'magenta']

colors.push('pink')

// ERROR - Argument of type 'boolean' is not assignable to parameter of type
// 'string'.

// colors.push(false)

// -> Alternative syntax

const bools: Array<boolean> = [true, false, true, false]

bools.push(true)

// -> We can also work with array of custom types "AKA" Array of Objects.

type User = {
  username: string
  age: number
  location: {
    latitude: number
    longitude: number
  }
}

const users: User[] = []

users.push({
  username: 'Ali',
  age: 24,
  location: {
    latitude: 2382.2,
    longitude: -20292.22,
  },
})

// -> Multidimentional Arrays.

const board: string[][] = [
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
  ['X', 'O', 'X'],
]
