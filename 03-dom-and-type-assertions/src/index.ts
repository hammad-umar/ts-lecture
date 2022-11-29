const buttonEl = document.getElementById('btn')! as HTMLButtonElement
const inputEl = document.getElementById('input')! as HTMLInputElement
const todoForm = document.getElementById('todoForm')! as HTMLFormElement

todoForm.addEventListener('submit', (e) => {
  e.preventDefault()
  console.log('SUBMITTED!')
})

// buttonEl.addEventListener('click', () => {
//   alert(inputEl.value)
//   inputEl.value = ''
// })
