"use strict";
const todos = [];
const inputEl = document.getElementById('input');
const todoFormEl = document.getElementById('todoForm');
const todoListContainerEl = document.getElementById('todoList');
const createTodo = (todo) => {
    const todoItemEl = document.createElement('li');
    todoItemEl.textContent = todo.text;
    const todoItemCheckboxEl = document.createElement('input');
    todoItemCheckboxEl.type = 'checkbox';
    todoListContainerEl.appendChild(todoItemEl);
    todoListContainerEl.appendChild(todoItemCheckboxEl);
};
const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
        id: new Date().getTime(),
        text: inputEl.value,
        isCompleted: false,
    };
    createTodo(newTodo);
    inputEl.value = '';
};
todoFormEl.addEventListener('submit', handleSubmit);
