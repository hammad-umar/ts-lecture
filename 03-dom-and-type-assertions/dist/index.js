"use strict";
const inputEl = document.getElementById('input');
const todoFormEl = document.getElementById('todoForm');
const todoListContainerEl = document.getElementById('todoList');
const handleSubmit = (e) => {
    e.preventDefault();
    const todoText = inputEl.value;
    const todoItemEl = document.createElement('li');
    todoItemEl.textContent = todoText;
    const todoItemCheckboxEl = document.createElement('input');
    todoItemCheckboxEl.type = 'checkbox';
    todoListContainerEl.appendChild(todoItemEl);
    todoListContainerEl.appendChild(todoItemCheckboxEl);
    inputEl.value = '';
};
todoFormEl.addEventListener('submit', handleSubmit);
