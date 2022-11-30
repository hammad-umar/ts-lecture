// Generics.
// -> Generics allow us to define reuseable functions and classes that can
// work with multiple types rather than a single type.
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Built-In Generic Examples.
var userAges = [22, 24, 28, 34];
var countries = ['Pakistan', 'Argentina', 'America'];
var bools = [false, true, false, true, true];
function identity(item) {
    return item;
}
identity('Hello World!');
identity(20);
identity(false);
identity({ name: 'Elton', breed: 'Husky' });
identity({ first: 'John', last: 'Doe' });
// Writing another Generic Function.
function getRandomElement(list) {
    return list[Math.floor(Math.random() * list.length)];
}
console.log(getRandomElement(['a', 'b', 'c', 'd', 'e']));
console.log(getRandomElement([true, false, false, true]));
console.log(getRandomElement([1, 2, 3, 4, 5, 6]));
console.log(getRandomElement([
    {
        name: 'Elton',
        breed: 'Husky'
    },
    {
        name: 'Rusty',
        breed: 'Silkie'
    },
    {
        name: 'Pinky',
        breed: 'Lab'
    },
    {
        name: 'Price',
        breed: 'Doberman'
    },
]));
// Inferred Generic Type Parameters.
// -> Some time TypeScript inferred the generic types on its own.
getRandomElement(['A', 'B', 'C', 'D', 'E']);
// Generics, Arrow Functions Syntax.
var printListItems = function (list) {
    list.forEach(function (item) {
        console.log(item);
    });
};
printListItems(['A', 'B', 'C']);
// Generic with Multiple Types.
var mergeObjects = function (firstObj, secondObj) {
    return __assign(__assign({}, firstObj), secondObj);
};
var mergedObjs = mergeObjects({ name: 'Ali' }, { pets: ['Elton', 'Rusty'] });
// Generic Type Constraints.
var concatStrs = function (strOne, strTwo) {
    return strOne + ' ' + strTwo;
};
var concatenatedStrs = concatStrs('A', 'B');
var doubleCoords = function (coords) {
    return {
        latitude: coords.latitude * 2,
        longitude: coords.longitude * 2
    };
};
doubleCoords({ latitude: 100, longitude: 100 });
// Default Type Parameters.
var doSomething = function (thing) {
    return thing;
};
doSomething('Something!');
doSomething(100);
function makeEmptyArray() {
    return [];
}
var arrOfStrings = makeEmptyArray();
var arrOfBooleans = makeEmptyArray();
var arrOfNumbers = makeEmptyArray();
var arrOfDogs = makeEmptyArray();
arrOfDogs.push({ name: 'Elton', breed: 'Husky' });
arrOfStrings.push('Hammad');
var Playlist = /** @class */ (function () {
    function Playlist() {
        this.queue = [];
    }
    Playlist.prototype.addToPlaylist = function (song) {
        this.queue.push(song);
    };
    return Playlist;
}());
var audioSong = new Playlist();
audioSong.addToPlaylist({ title: 'XYZ', creator: 'ABC' });
var videoSong = new Playlist();
videoSong.addToPlaylist({ title: 'A', artist: 'X', resolutions: ['HD', '4k'] });
