/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

let userNumber = parseInt(prompt('inserisci un numero da 1 a 5'));
console.log( 'il tuo numero è: ' + userNumber);
let message;
//applico una condizione di verifica 
if (userNumber > 5 || isNaN (userNumber)) {
    message = 'valore non disponibile';
    console.log (message)
}
let pcNumber = getNumberRandom();
console.log('il numero del pc è: ' + pcNumber);
//creo una funzione di numeri randomici per il computer
function getNumberRandom (number){
    let numberRandom = getRndInteger(1,5);
    return numberRandom
}

//sommo i numeri
let sum = userNumber + pcNumber;










//funzione numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}