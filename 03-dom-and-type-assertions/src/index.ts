const inputEl = document.getElementById('input')! as HTMLInputElement
const todoFormEl = document.getElementById('todoForm')! as HTMLFormElement
const todoListContainerEl = document.getElementById(
  'todoList'
) as HTMLUListElement

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault()

  const todoText = inputEl.value

  const todoItemEl = document.createElement('li')
  todoItemEl.textContent = todoText

  const todoItemCheckboxEl = document.createElement('input')
  todoItemCheckboxEl.type = 'checkbox'

  todoListContainerEl.appendChild(todoItemEl)
  todoListContainerEl.appendChild(todoItemCheckboxEl)

  inputEl.value = ''
}

todoFormEl.addEventListener('submit', handleSubmit)
