interface Todo {
  id: number
  text: string
  isCompleted: boolean
}

const inputEl = document.getElementById('input')! as HTMLInputElement
const todoFormEl = document.getElementById('todoForm')! as HTMLFormElement
const todoListContainerEl = document.getElementById(
  'todoList'
) as HTMLUListElement

const todos: Todo[] = readTodos()
todos.forEach(createTodo)

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem('todos')
  if (todosJSON === null) return []
  return JSON.parse(todosJSON)
}

function saveTodos(): void {
  localStorage.setItem('todos', JSON.stringify(todos))
}

function createTodo(todo: Todo): void {
  const todoItemEl = document.createElement('li')
  todoItemEl.textContent = todo.text

  const todoItemCheckboxEl = document.createElement('input')
  todoItemCheckboxEl.type = 'checkbox'
  todoItemCheckboxEl.checked = todo.isCompleted

  todoItemCheckboxEl.addEventListener('change', () => {
    todo.isCompleted = todoItemCheckboxEl.checked
    saveTodos()
  })

  todoListContainerEl.appendChild(todoItemEl)
  todoListContainerEl.appendChild(todoItemCheckboxEl)
}

function handleSubmit(e: SubmitEvent): void {
  e.preventDefault()

  const newTodo: Todo = {
    id: new Date().getTime(),
    text: inputEl.value,
    isCompleted: false,
  }

  todos.push(newTodo)
  createTodo(newTodo)

  saveTodos()
  inputEl.value = ''
}

todoFormEl.addEventListener('submit', handleSubmit)
