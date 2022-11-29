"use strict";
const inputEl = document.getElementById('input');
const todoFormEl = document.getElementById('todoForm');
const todoListContainerEl = document.getElementById('todoList');
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem('todos');
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function createTodo(todo) {
    const todoItemEl = document.createElement('li');
    todoItemEl.textContent = todo.text;
    const todoItemCheckboxEl = document.createElement('input');
    todoItemCheckboxEl.type = 'checkbox';
    todoListContainerEl.appendChild(todoItemEl);
    todoListContainerEl.appendChild(todoItemCheckboxEl);
}
function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
        id: new Date().getTime(),
        text: inputEl.value,
        isCompleted: false,
    };
    todos.push(newTodo);
    createTodo(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos));
    inputEl.value = '';
}
todoFormEl.addEventListener('submit', handleSubmit);
