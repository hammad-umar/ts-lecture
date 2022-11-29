const buttonEl = document.getElementById('btn')! as HTMLButtonElement
const inputEl = document.getElementById('input')! as HTMLInputElement

buttonEl.addEventListener('click', () => {
  alert(inputEl.value)
  inputEl.value = ''
})
