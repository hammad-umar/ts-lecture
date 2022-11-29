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
        this._score = 0;
        this.first = first;
        this.last = last;
        this.printSecret();
    }
    // We can also use getters and setters in TS classes just like JS classes.
    get fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(updatedScore) {
        if (updatedScore < 0) {
            throw new Error('Score must be positive!');
        }
        this._score = updatedScore;
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
// -> We can access setters and getters.
player.fullName;
player.score;
player.score = 10;
console.log(player.score);
class Person {
    constructor(firstName, lastName, age = 10) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // Protected Modifier.
        // -> When we define a property / method with a protected modifier it
        // means we can have access to it in this class and in a child class
        // but not everywhere.
        this.secret = '******';
    }
    printAge() {
        console.log(`Age is: ${this.age}`);
    }
}
class SuperPerson extends Person {
    constructor() {
        super(...arguments);
        this.isSuperPerson = true;
    }
    changeSecret() {
        this.secret = '&&&&&********%%%%%';
    }
}
const personOne = new Person('John', 'Doe');
personOne.printAge();
// -> If we try to access private field we can get an error.
// personOne.age
const superPerson = new SuperPerson('Super', 'Person', 24);
superPerson.changeSecret();
class Product {
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }
}
class Jacket {
    // We can also add additional properties and methods
    constructor(brand, title, description) {
        this.brand = brand;
        this.title = title;
        this.description = description;
    }
    print() {
        console.log(`${this.brand} - ${this.title}`);
    }
}
const jacketOne = new Jacket('Prada', 'Men Jacket', '...');
jacketOne.print();
// Abstract Class in TS.
// -> Abstract classes are only exclusive to TypeScript.
// -> We can mark a class with "abstract" keyword to make it abstract class.
// -> We can not instantiate an abstract class.
// -> The main purpose of the abstract class is to make fields / methods
// required for child classes and we can also add extra functionality.
class Employee {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    printFullName() {
        console.log(`Full Name Is: ${this.firstName} ${this.lastName}`);
    }
}
class PartTimeEmployee extends Employee {
    constructor(firstName, lastName, salary) {
        super(firstName, lastName);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class FullTimeEmployee extends Employee {
    constructor(firstName, lastName, hourlyRate, hoursWorked) {
        super(firstName, lastName);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const fullTimeEmployee = new FullTimeEmployee('John', 'Doe', 100, 7);
fullTimeEmployee.printFullName();
console.log(fullTimeEmployee.getPay());
