const btn = document.getElementById('btn')!
console.log(btn)

// non-null assertion operator.

btn.addEventListener('click', () => {
  alert('CLICKED')
})

// Type Assertions.
// -> Sometimes we know more than TypeScript about a value type.
// -> And we make sure TypeScript knows it too.
// -> We can assert a value's type using "as" keyword.

const mystery: unknown = 'SOME MYSTRY!'

const strLength = (mystery as string).length
