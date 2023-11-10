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