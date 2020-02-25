/*
    SCOPO DEL GIOCO:
    Il computer deve generare 16 numeri casuali tra 1 e 100.
    In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100.
    Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
    La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
    Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
    BONUS: all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali.
    Con difficoltà 0=> tra 1 e 100, con difficoltà 1 =>  tra 1 e 80, con difficoltà 2=> tra 1 e 50
*/
var minePiazzate = [] // array vuoto dove verranno pushate le mine, i numeri estratti random dal pc

for (var i = 0; minePiazzate.length < 16; i++) { // Ciclo FOR fino a raggiungere 16 elementi nell'array minePiazzate
    var minaDaPiazzare = generaRandomMinMax(1, 100); // Generazione mina, numero random tramite funzione
    if (!minePiazzate.includes(minaDaPiazzare)) { // se il random generato non esiste nell'array minePiazzate...
        minePiazzate.push(minaDaPiazzare); // allora inseriscilo nell'array minePiazzate
    }
}

console.log(minePiazzate);



function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
