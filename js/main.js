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

for (var i = 0; minePiazzate.length < 16; i++) { // Ciclo FOR fino a raggiungere 16 elementi nell'array minePiazzate
    var minaDaPiazzare = generaRandomMinMax(1, 100); // Generazione mina, numero random tramite funzione
    if (!minePiazzate.includes(minaDaPiazzare)) { // se il random generato non esiste nell'array minePiazzate...
        minePiazzate.push(minaDaPiazzare); // allora inseriscilo nell'array minePiazzate
    }
}

for (var i = 0; bandierinePiazzate.length < 84; i++) { // Ciclo FOR fino a raggiungere le 84 bandierine massime piazzabili (caso improbabilissimo)
    var bandierinaDaPiazzare = parseInt(prompt('Scrivi un numero da 1 a 100 e spera di non esplodere!'));
    if (!isNaN(bandierinaDaPiazzare)) { // se è un numero vai avanti, altrimenti salta alla riga51
        if ((bandierinaDaPiazzare >= 1) && (bandierinaDaPiazzare <= 100)) { // se è compreso tra 1 e 100 vai avanti, altrimenti salta alla riga48
            if (!bandierinePiazzate.includes(bandierinaDaPiazzare)) { // se il numero non fa parte dei numeri già provati vai avanti, altrimenti salta alla riga45
                if (!minePiazzate.includes(bandierinaDaPiazzare)) { // se il numero non fa parte dei numeri dell'array minePiazzate vai avanti, altrimenti salta alla riga36
                    bandierinePiazzate.push(bandierinaDaPiazzare) // inserisci il numero nell'array bandierinePiazzate
                    if (bandierinePiazzate.length === 84){ // se la lunghezza dell'array bandierinePiazzate è il massimo 84 hai vinto il gioco
                        alert('Sei un mostro! Hai piazzato tutte le bandierine! Vai subito a comprare un gratta e vinci :)');
                    } else {
                        alert('FIUUU! Bandierina Piazzata!');
                    }
                } else { // rif. IF riga29
                    if (bandierinePiazzate.length === 1) { // caso in cui la lunghezza dell'array bandierinePiazzate è 1
                        alert('|*|* BOOOM *|*| Game Over! Hai piazzato una sola bandierina');
                    } else {
                        alert('|*|* BOOOM *|*| Game Over! Hai piazzato ' + bandierinePiazzate.length + ' bandierine.');
                    }
                    alert('Ricarica la pagina per una nuova partita');
                    break; // una volta arrivati qui il ciclo va bloccato altrimenti stai barando :P
                }
            } else { // rif. IF riga28
                alert('Hai già piazzato una bandierina qui furbetto');
            }
        } else { // rif. IF riga27
            alert('Devi inserire un numero da 1 a 100');
        }
    } else { // rif. IF riga26
        alert('Perfavore inserisci un numero');
    }
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
