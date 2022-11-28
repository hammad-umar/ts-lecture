// -> Working with multiple files
// -> When we have more one TS file we use just this command -> tsc or tsc -w
// -> TypeScript compiler automatically compile all the TS files in directory.

interface Product {
  name: string
  description?: string
  price: number
  tags?: string[]
}

const printProductSummary = (product: Product): void => {
  console.log(`${product.name} - $${product.price}`)
}

printProductSummary({ name: 'XBOX 360', price: 799 })
