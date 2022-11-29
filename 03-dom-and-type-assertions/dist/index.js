"use strict";
const buttonEl = document.getElementById('btn');
const inputEl = document.getElementById('input');
buttonEl.addEventListener('click', () => {
    alert(inputEl.value);
    inputEl.value = '';
});
