const inputName = document.querySelector('.input_name');
const inputRef = document.querySelector('.input_ref');
const inputCat = document.querySelector ('.input_cat');
const inputStock = document.querySelector ('.input_stock');
const answerName = document.querySelector ('.dataelement__text--title');
const answerRef = document.querySelector ('.dataelement__text--answerref');
const answerCat = document.querySelector ('.dataelement__text--answercat');
const answerStock = document.querySelector ('.dataelement__text--answerstock');
const submitButtom = document.querySelector ('.articleform__submit');
const message =document.querySelector ('.articleform__message');
const list =document.querySelector ('.data__containerlist');
const dataListStore = [];
function renderElement(newElement){
    list.innerHTML+= `
    <li class="data__containerlist--element">
        <article class="dataelement">
            <div class="dataelement__img">
                <img class="dataelement__img--src" src="./assets/images/obj.jpeg"/>
            </div>
            <div class="dataelement__text">
                <p class="dataelement__text--title">${newElement.name}</p>
                <div class="dataelement__text--ref">
                    <p class="dataelement__text--questionref">Ref:</p>
                    <p class="dataelement__text--answerref">${newElement.ref}</p>
                </div>
                <div class="dataelement__text--cat">
                    <p class="dataelement__text--questioncat">Categoría:</p>
                    <p class="dataelement__text--answercat">${newElement.categorie}</p>
                </div>
                <div class="dataelement__text--stock">
                    <p class="dataelement__text--questionstock">Stock:</p>
                    <p class="dataelement__text--answerstock">${newElement.stock}</p>
                </div>
            </div>
        </article>
    </li>`
}
function handleNewElement(event){
    event.preventDefault();
    const newElement={
        name:'',
        ref:'',
        categorie:'',
        stock:''
    }
    newElement.name= inputName.value;
    newElement.ref = inputRef.value;
    newElement.categorie= inputCat.value;
    newElement.stock= inputStock.value;
    if (newElement.name === '' || newElement.ref === '' || newElement.categorie === '' || newElement.stock === ''){
        message.innerHTML = 'Uy, parece que has olvidado algo';
    } else{
        message.classList.add ('collapsed')
        renderElement(newElement);
    }
}
if( submitButtom !== null ) {
    submitButtom.addEventListener('click', handleNewElement);
}
function initialListStore() {
    if (kittenListStored) {
        for (let i = 0; i < kittenListStored.length; i++) {
            renderKitten(kittenListStored[i]);
        }
    } else {
        fetch(`${SERVER_URL}`)
        .then((response) => response.json())
        .then((data) => {
            kittenDataList = data.results;
            for (let i = 0; i < kittenDataList.length; i++) {
                renderKitten(kittenDataList[i]);
            }
            localStorage.setItem('cats', JSON.stringify(kittenDataList));
        });
    }
}
initialListKitten()
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
if( newNoteButtom !== null ) {
    newNoteButtom.addEventListener ('click', newNote);
  }
'use strict';
//# sourceMappingURL=main.js.map
