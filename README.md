# Carosello Mono Array
Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot.
![screenshot](https://github.com/MatteoSanson/js-array-carousel/assets/128544980/a603277d-55e8-42ed-81e9-31bc8b84a84f)

![screenshot-bonus2](https://github.com/MatteoSanson/js-array-carousel/assets/128544980/c263e478-825e-4f18-9a01-9a57ec7ead36)

## MILESTONE 1
Rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.

### Svolgimento
1) Creo un array di immagini.
2) Per ogni elemento immagine voglio inserire nel codice html un elemento `<div>`.
3) Aggiungo la classe "attiva" al `<div>` sull'immagine corrente.

## MILESTONE 2
Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.

### Svolgimento
1) genero la costante lista-nodi dei div presenti nel dom con la classe che mi interessa. 
2) mi creo le variabili per i tasti prev e next.
3) aggiungo evento al click dei tasti.