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

    //controllo le lettere all'incontrario
    let wordReverse = wordSplit.reverse();
    console.log (wordReverse);
    
    //controllo che le lettere siano uguali all'incontrario
    let reverse = wordReverse.join('');

    if(reverse === word){
        console.log('le parole sono uguali');
    } else {
        console.log('non è una parola palindroma')
    }
}
