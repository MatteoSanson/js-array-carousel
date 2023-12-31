'use strict'
// 1) Creo un array di immagini. 
const images = [`01.jpg`,`02.jpg`,`03.jpg`,`04.jpg`,`05.jpg`];
// 2) Per ogni elemento immagine voglio inserirlo nel codice html. 
const items = document.querySelector(`.items`);
// variabile immagine che vedo in questo momento 
let immagineCorrente = 0;


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


const container = document.querySelector(`.container`);

const thumbNails = document.createElement('div');
thumbNails.classList.add('thumbNails');
container.append(thumbNails);


for (let i = 0; i < images.length; i++) {
  const thuItem = document.createElement('div');
  thuItem.classList.add('thuItem');

  if (i === immagineCorrente){
    thuItem.classList.add(`attuale`);
  }

  const thuImg = document.createElement('img');
  thuImg.src = `img/${images[i]}`;

  thuItem.append(thuImg);
  thumbNails.append(thuItem);
}


// bottoni prev e next 
const prev = document.createElement(`div`);
prev.classList.add(`prev`);
thumbNails.append(prev);

const next = document.createElement(`div`);
next.classList.add(`next`);
thumbNails.append(next);

// 1) genero la costante listanodi dei div presenti nel dom con la classe che mi interessa   
const domItem = document.querySelectorAll(`.item`);
console.log(domItem);

const domThuItem = document.querySelectorAll(`.thuItem`);
console.log(domThuItem);

prev.addEventListener('click', function () {
    console.log(`ho cliccato sopra`);
    domItem[immagineCorrente].classList.remove(`active`);
    domThuItem[immagineCorrente].classList.remove(`attuale`);
    immagineCorrente = (immagineCorrente - 1 + domItem.length) % domItem.length;
    domItem[immagineCorrente].classList.add(`active`);
    domThuItem[immagineCorrente].classList.add(`attuale`);
});

next.addEventListener('click', function () {
    console.log(`ho cliccato sotto`);
    domItem[immagineCorrente].classList.remove(`active`);
    domThuItem[immagineCorrente].classList.remove(`attuale`);
    immagineCorrente = (immagineCorrente + 1) % domItem.length;
    domItem[immagineCorrente].classList.add(`active`);
    domThuItem[immagineCorrente].classList.add(`attuale`);
});