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
const message =document.querySelector ('.articleform__message');
const list =document.querySelector ('.data__containerlist')

function newElement(event){
    const nameValue = inputName.value;
    const refValue = inputRef.value;
    const catValue = inputCat.value;
    const stockValue = inputStock.value;
    event.preventDefault();
    if (nameValue === '' || refValue === '' || catValue === '' || stockValue === ''){
        message.innerHTML = 'Uy, parece que has olvidado algo';
    } else{
        message.classList.add ('collapsed')
        list.innerHTML += 
        `<li class="data__containerlist--element">
            <article class="dataelement">
                <div class="dataelement__img">
                    <img class="dataelement__img--src" src="./assets/images/obj.jpeg"/>
                </div>
                <div class="dataelement__text">
                    <p class="dataelement__text--title">${nameValue}</p>
                    <div class="dataelement__text--ref">
                        <p class="dataelement__text--questionref">Ref:</p>
                        <p class="dataelement__text--answerref">${refValue}</p>
                    </div>
                    <div class="dataelement__text--cat">
                        <p class="dataelement__text--questioncat">Categoría:</p>
                        <p class="dataelement__text--answercat">${catValue}</p>
                    </div>
                    <div class="dataelement__text--stock">
                        <p class="dataelement__text--questionstock">Stock:</p>
                        <p class="dataelement__text--answerstock">${stockValue}</p>
                    </div>
                </div>
            </article>
        </li>`
    }
}
submitButtom.addEventListener('click', newElement);
'use strict';

console.log('>> Ready :)');

//# sourceMappingURL=main.js.map
