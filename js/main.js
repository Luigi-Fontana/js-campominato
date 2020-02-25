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

// Riempirò questo codice di commenti :P

var minePiazzate = [] // array vuoto dove verranno pushate le mine, i numeri estratti random dal pc
var bandierinePiazzate = []; // array vuoto dove verranno pushate le bandierine, i numeri inseriti dall'utente

var sceltaDifficolta = prompt('Scegli la difficoltà tra facile, normale o difficile');

switch (sceltaDifficolta.toLowerCase()) { // inizio switch per settare i paramentri di difficoltà in seguito
    case 'facile': // nel caso facile hai a disposizione i numeri da 1 a 100 e quindi 84 bandierine massime piazzabili
        var rangeMax = 100;
        var bandierineMax = 84;
        break;
    case 'normale': // nel caso normale hai a disposizione i numeri da 1 a 80 e quindi 64 bandierine massime piazzabili
        var rangeMax = 80;
        var bandierineMax = 64;
        break;
    case 'difficile': // nel caso difficile hai a disposizione i numeri da 1 a 50 e quindi 34 bandierine massime piazzabili
        var rangeMax = 50;
        var bandierineMax = 34;
        break;
}

for (var i = 0; minePiazzate.length < 16; i++) { // Ciclo FOR fino a raggiungere 16 elementi nell'array minePiazzate
    var minaDaPiazzare = generaRandomMinMax(1, rangeMax); // Generazione mina, numero random tramite funzione in base alla difficoltà selezionata
    if (!minePiazzate.includes(minaDaPiazzare)) { // se il random generato non esiste nell'array minePiazzate...
        minePiazzate.push(minaDaPiazzare); // allora inseriscilo nell'array minePiazzate
    }
}

if ((sceltaDifficolta.toLowerCase() === 'facile') || (sceltaDifficolta.toLowerCase() === 'normale') || (sceltaDifficolta.toLowerCase() === 'difficile')) { // se il valore della difficoltà inserita dall'utente è uno dei tre vai avanti, altrimenti salta alla riga73
    for (var i = 0; bandierinePiazzate.length < bandierineMax; i++) { // Ciclo FOR fino a raggiungere le bandierine massime piazzabili in base alla difficoltà (caso improbabilissimo)
        var bandierinaDaPiazzare = parseInt(prompt('Scrivi un numero da 1 a ' + rangeMax + ' e spera di non esplodere!'));
        if (!isNaN(bandierinaDaPiazzare)) { // se è un numero vai avanti, altrimenti salta alla riga69
            if ((bandierinaDaPiazzare >= 1) && (bandierinaDaPiazzare <= rangeMax)) { // se è compreso tra 1 e il valore massimo vai avanti, altrimenti salta alla riga66
                if (!bandierinePiazzate.includes(bandierinaDaPiazzare)) { // se il numero non fa parte dei numeri già provati vai avanti, altrimenti salta alla riga63
                    if (!minePiazzate.includes(bandierinaDaPiazzare)) { // se il numero non fa parte dei numeri dell'array minePiazzate vai avanti, altrimenti salta alla riga54
                        bandierinePiazzate.push(bandierinaDaPiazzare) // inserisci il numero nell'array bandierinePiazzate
                        if (bandierinePiazzate.length === rangeMax){ // a questo punto se la lunghezza dell'array bandierinePiazzate è il massimo hai vinto il gioco
                            alert('Sei un mostro! Hai piazzato tutte le bandierine! Vai subito a comprare un gratta e vinci :)'); // nel caso sei qui non c'è bisogno di break perchè dal prossimo giro non rispetterai la condizione del ciclo FOR
                        } else {
                            alert('FIUUU! Bandierina Piazzata!');
                        }
                    } else { // rif. IF riga48
                        if (bandierinePiazzate.length === 1) { // caso in cui la lunghezza dell'array bandierinePiazzate è 1
                            alert('|*|* BOOOM *|*| Game Over! Hai piazzato una sola bandierina');
                        } else {
                            alert('|*|* BOOOM *|*| Game Over! Hai piazzato ' + bandierinePiazzate.length + ' bandierine.');
                        }
                        alert('Ricarica la pagina per una nuova partita');
                        break; // una volta arrivati qui il ciclo va bloccato altrimenti stai barando :P
                    }
                } else { // rif. IF riga46
                    alert('Hai già piazzato una bandierina qui furbetto');
                }
            } else { // rif. IF riga45
                alert('Devi inserire un numero da 1 a ' + rangeMax);
            }
        } else { // rif. IF riga44
            alert('Perfavore inserisci un numero');
        }
    }
} else { // rif. IF riga41
    alert('Non hai inserito la difficolà in lettere, ricarica la pagina se vuoi provare ancora!!');
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
