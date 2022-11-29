"use strict";
const btn = document.getElementById('btn');
console.log(btn);
// non-null assertion operator.
btn.addEventListener('click', () => {
    alert('CLICKED');
});
