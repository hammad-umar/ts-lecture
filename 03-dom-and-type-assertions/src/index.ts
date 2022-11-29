interface Todo {
  id: number
  text: string
  isCompleted: boolean
}

const todos: Todo[] = []

const inputEl = document.getElementById('input')! as HTMLInputElement
const todoFormEl = document.getElementById('todoForm')! as HTMLFormElement
const todoListContainerEl = document.getElementById(
  'todoList'
) as HTMLUListElement

const createTodo = (todo: Todo): void => {
  const todoItemEl = document.createElement('li')
  todoItemEl.textContent = todo.text

  const todoItemCheckboxEl = document.createElement('input')
  todoItemCheckboxEl.type = 'checkbox'

  todoListContainerEl.appendChild(todoItemEl)
  todoListContainerEl.appendChild(todoItemCheckboxEl)
}

const handleSubmit = (e: SubmitEvent) => {
  e.preventDefault()

  const newTodo: Todo = {
    id: new Date().getTime(),
    text: inputEl.value,
    isCompleted: false,
  }

  createTodo(newTodo)

  inputEl.value = ''
}

todoFormEl.addEventListener('submit', handleSubmit)
