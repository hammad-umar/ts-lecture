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
