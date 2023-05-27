'use strict'
const inputDate = document.querySelector ('.form__date--input');
const inputNote = document.querySelector ('.form__note--input');
const noteDate = document.querySelector ('.noteslist__element--date');
const noteText = document.querySelector ('.noteslist__element--text');
const errormessage = document.querySelector ('.errormessage');
const noteslist = document.querySelector ('.noteslist');
const newNoteButtom = document.querySelector ('.form__submit');
function newNote (event){
    const dateValue = inputDate.value;
    const noteValue = inputNote.value;
    event.preventDefault();
    if (inputDate ==='' || inputNote === ''){
        errormessage.innerHTML = 'Uy, parece que has olvidado algo';
    } else{
        noteslist.innerHTML += 
        `<li class="noteslist__element">
        <p class="noteslist__element--date">${dateValue}</p>
        <p class="noteslist__element--text">${noteValue}</p>
        </li>`
    }
}
newNoteButtom.addEventListener ('click', newNote);