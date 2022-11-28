interface Chicken {
  name: string
  breed: string
  eggsPerWeek: number
  age: number
}

const norma: Chicken = {
  name: 'Norma',
  breed: 'Silkie',
  eggsPerWeek: 4,
  age: 0.3,
}

// TypeScript Compiler Option (Watch Mode).
// -> Watch mode listen for changes we make in a file.
// -> COMMAND: tsc --watch <filename>.ts or tsc -w <filename>.ts
