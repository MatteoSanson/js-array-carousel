/* <div class="container">
      <div class="items">
        <div class="item active">
          <img src="./img/01.jpg" alt="" />
        </div>

        <div class="prev"></div>
        <div class="next"></div>
      </div>
    </div>  */

'use strict'
// 1) Creo un array di immagini. 
const images = [`01.jpg`,`02.jpg`,`03.jpg`,`04.jpg`,`05.jpg`];
// 2) Per ogni elemento immagine voglio inserirlo nel codice html. 
const items = document.querySelector(`.items`);
// variabile immagine che vedo in questo momento 
let immagineCorrente = 0;

// mlst2 2) mi creo le variabili per i tasti prev e next.
const prev = document.querySelector(`.prev`);
const next = document.querySelector(`.next`);

// 2) Per ogni elemento immagine voglio inserirlo nel codice html.
for (let i = 0; i < images.length; i++){
    // creo il mio item div con classe item
    const item = document.createElement(`div`);
    item.classList.add(`item`);

    // 3) Aggiungo la classe "attiva" al `<div>` sull'immagine corrente. 
    if (i === immagineCorrente){
        item.classList.add(`active`);
    }
    //creo la mia immagine
    const img = document.createElement(`img`);
    img.src = `img/${images[i]}`;

    item.append(img);
    items.append(item);
}

// 1) genero la costante listanodi dei div presenti nel dom con la classe che mi interessa   
const domItem = document.querySelectorAll(`.item`);
console.log(domItem);

// mlst2 3) aggiungo evento al click dei tasti. 
// prev.addEventListener (`click`, function(){
//     console.log(`ho cliccato sopra`);
//     if (immagineCorrente > 0) {
//         domItem[immagineCorrente].classList.remove(`active`);
//         immagineCorrente--;
//         domItem[immagineCorrente].classList.add(`active`);
//     }
// });

// next.addEventListener (`click`, function(){
//     console.log(`ho cliccato sotto`);
//     if (immagineCorrente < domItem.length - 1) {
//         domItem[immagineCorrente].classList.remove(`active`);
//         immagineCorrente++;
//         domItem[immagineCorrente].classList.add(`active`);
//     }
// });

// bonus 1 
prev.addEventListener('click', function () {
    console.log(`ho cliccato sopra`);
    domItem[immagineCorrente].classList.remove(`active`);
    immagineCorrente = (immagineCorrente - 1 + domItem.length) % domItem.length;
    domItem[immagineCorrente].classList.add(`active`);
});

next.addEventListener('click', function () {
    console.log(`ho cliccato sotto`);
    domItem[immagineCorrente].classList.remove(`active`);
    immagineCorrente = (immagineCorrente + 1) % domItem.length;
    domItem[immagineCorrente].classList.add(`active`);
});