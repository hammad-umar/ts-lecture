"use strict";
const buttonEl = document.getElementById('btn');
const inputEl = document.getElementById('input');
const todoForm = document.getElementById('todoForm');
todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('SUBMITTED!');
});
// buttonEl.addEventListener('click', () => {
//   alert(inputEl.value)
//   inputEl.value = ''
// })
