// Tuples and Enums Types.
// -> Tuples are special type exclusive to TypeScript (Not in JS).
// -> Tuple is a kind of an array but with a fixed length and type order.

let rgbColor: [number, number, number] = [255, 0, 245]
rgbColor = [0, 0, 0]

// ERROR - Type 'string' is not assignable to type 'number'.
// rgbColor = [255, 255, "10"]

type HTTPResponse = [number, string]

const responses: HTTPResponse[] = [
  [200, 'OK!'],
  [404, 'Not Found!'],
  [500, 'Internal Server Error!'],
]

// Enum Types.
// -> Enum type is also exclusive to TypeScript (Not in JS).
// -> Enums allow us to define a set of named constants.
// -> We can give these constants numeric or string values.

// -> If we can't assign values to enums then TypeScript automatically
// give them numeric values

enum OrderStatus {
  PENDING, // 1
  DELIVERED, // 2
  RETURNED, // 3
}

const myOrder = {
  orderNumber: 1263735,
  status: OrderStatus.DELIVERED,
}

// -> We can also give them values.

enum ArrowKeys {
  UP = 'UP',
  DOWN = 'DOWN',
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
}

const move = ArrowKeys.LEFT

if (move === ArrowKeys.LEFT) {
  // do something.
}
