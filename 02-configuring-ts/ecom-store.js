"use strict";
// -> Working with multiple files
// -> When we have more one TS file we use just this command -> tsc or tsc -w
// -> TypeScript compiler automatically compile all the TS files in directory.
const printProductSummary = (product) => {
    console.log(`${product.name} - $${product.price}`);
};
printProductSummary({ name: 'XBOX 360', price: 799 });
