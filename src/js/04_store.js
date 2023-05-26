'use strict'
const inputName = document.querySelector('.input_name');
const inputRef = document.querySelector('.input_ref');
const inputCat = document.querySelector ('.input_cat');
const inputStock = document.querySelector ('.input_stock');
const answerName = document.querySelector ('.dataelement__text--title');
const answerRef = document.querySelector ('.dataelement__text--answerref');
const answerCat = document.querySelector ('.dataelement__text--answercat');
const answerStock = document.querySelector ('.dataelement__text--answerstock');
const submitButtom = document.querySelector ('.articleform__submit');

function newElement (event) => {
    const nameValue = inputName.value;
    const refValue = inputRef.value;
    const catValue = inputCat.value;
    const stockValue = inputStock.value;
    if (nameValue=== '' || refValue==='' || catValue==='' || stockValue===''){
        
    }
}