"use strict";
console.log('TS CLASSES!');
// TypeScript Classes.
// -> Annotating a TypeScript class.
class Player {
    constructor(first, last) {
        // Private modifier.
        // -> It is exclusive to TypeScript only.
        // -> Private fields / methods are only accessible with in a class.
        this.secret = 'Some Secret!';
        // Class Fields
        // -> We can also rely on type inference in a class when are defining a field
        // -> When a field is not known by a TypeScript then we annotate it.
        // -> We can also define a field like this and hardcode a value to it.
        this.score = 0;
        this.first = first;
        this.last = last;
        this.printSecret();
    }
    // Private methods.
    printSecret() {
        console.log('SECRET IS: ', this.secret);
    }
}
const player = new Player('A', 'B');
// ERROR - Cannot assign to 'first' because it is a read-only property.
// player.first = 'Ali'
// We can not access private fields / methods outside of a class.
// player.secret
// player.printSecret()
// Alternative Syntax Parameters Properties Shorthand.
class Person {
    constructor(firstName, lastName, age = 10) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    printAge() {
        console.log(`Age is: ${this.age}`);
    }
}
const personOne = new Person('John', 'Doe');
personOne.printAge();
// -> If we try to access private field we can get an error.
// personOne.age
