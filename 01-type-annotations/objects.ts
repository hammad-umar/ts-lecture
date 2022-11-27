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
