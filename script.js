/* Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma */

//chiedere all'utente di inserire una parola palindroma
let userWord = prompt('inserisci una parola palindroma');
console.log(userWord);

let wordPalindroma = getWordSplit(userWord);

//creo la funzione
function getWordSplit(word){
    //divido tutte le lettere
    let wordSplit = word.split('');
    console.log (wordSplit);

    //controllo che le lettere siano uguali all'incontrario
    let wordReverse = wordSplit.reverse();
    console.log (wordReverse);
    


    return wordSplit;
}






/*
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/



//funzione numeri random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}