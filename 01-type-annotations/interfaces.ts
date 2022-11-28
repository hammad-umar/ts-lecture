// Interfaces.
// -> Interfaces serves almost the same purpose as Type Aliases.
// -> We can use them to create reuseable, modular types that describes
// the shape of the object.

interface Book {
  title: string
  description: string
  price: number
  author: string
}

const book: Book = {
  title: 'ABC',
  description: 'Some Description!',
  price: 20,
  author: 'XYZ',
}

const printBook = (book: Book): void => {
  console.log(`${book.title} - ${book.description}`)
}

printBook(book)

// -> Readonly and Optional fields in interfaces.
// -> We can make fields readonly by using "readonly" keyword.
// -> We can make fields optional by using "?" operator.

interface Person {
  readonly id: number
  firstName: string
  lastName: string
  nickName?: string
}

const person: Person = {
  id: 1,
  firstName: 'John',
  lastName: 'Doe',
}

// ERROR - Cannot assign to 'id' because it is a read-only property.

// person.id = 2

// -> Interface methods
// -> We can also define methods in interfaces

interface Product {
  title: string
  price: number
  // applyDiscount: (discount: number) => number
  applyDiscount(discount: number): number
}

const productOne: Product = {
  title: 'Nike Shoes',
  price: 100,
  applyDiscount(amount) {
    const newPrice = this.price * (1 - amount)
    this.price = newPrice
    return newPrice
  },
}

// -> We can also re-open the interfaces if we want to add more props or methods.

interface Dog {
  name: string
  age: number
}

interface Dog {
  bread: string
  bark(): string
}

const myDog: Dog = {
  name: 'Elton',
  age: 0.5,
  bread: 'Husky',
  bark() {
    return 'Woof Woof!!!'
  },
}

// -> Extending the interfaces.
// We can also extends the interfaces just like classes.

interface ServiceDog extends Dog {
  job: 'DRUG SNIFFER' | 'BOMB DOG' | 'GUIDE DOG'
}

const myServiceDog: ServiceDog = {
  name: 'Elton',
  age: 1.5,
  bark() {
    return 'Woof Woof!!!'
  },
  bread: 'Lab',
  job: 'DRUG SNIFFER',
}

// -> We can also extends from multiple interfaces. (Multiple Inheritance)

interface Human {
  name: string
}

interface Employee {
  readonly id: string
  email: string
  address?: string
}

interface Engineer extends Human, Employee {
  level: 'JUNIOR' | 'SENIOR' | 'EXPERT'
  skills: string[]
}

const ali: Engineer = {
  name: 'Ali',
  id: 'sk92i9i2i-209i2i-2908092i',
  email: 'ali@test.com',
  level: 'JUNIOR',
  skills: ['HTML', 'CSS', 'TS', 'REACT'],
}
