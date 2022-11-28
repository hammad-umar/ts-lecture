"use strict";
const norma = {
    name: 'Norma',
    breed: 'Silkie',
    eggsPerWeek: 4,
    age: 0.3,
};
// TypeScript Compiler Option (Watch Mode).
// -> Watch mode listen for changes we make in a file.
// -> COMMAND: tsc --watch <filename>.ts or tsc -w <filename>.ts
// "files" option in tsconfig.json
// -> We use it to tell the compiler that we only want to compile these files.
// -> If provided file in the list does not exist then compiler throws an error.
// "include" and "exclude" option in tsconfig.json
// -> In "include" we specify array of files or patterns we want to compile.
// -> In "excluide" we specify array of files or patterns we don't want to compile.
// "outDir" option in tsconfig.json
// -> We use it to specify where want to spit out the compiled JS Code.
