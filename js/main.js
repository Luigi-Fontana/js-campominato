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

// 1. Definisco le variabili che cambieranno in base alla difficoltà selezionata
// 2. Creo la funzione che adatterà le variabili create alla scelta dell'utente
// 3. Genero 16 numeri random diversi con una funzione e li inserisco in un array
// 4. Richiamo questa funziona per creare la variabile in cui saranno piazzate le bombe
// 5. Creo un array vuoto dove saranno piazzate le bandierine
// 6. Inizio il ciclo e chiedo all'utente di inserire un numero
// 7. Inizio i controlli su quell'inserimento
//      - Deve essere un numero
//      - Deve essere compreso tra 1 e il valore determinato dalla difficoltà
// 8. Inizio i controlli per capire cosa fare con questo numero inserimento
//      - Il numero non deve essere già stato scritto
//      - Se il numero non è una bomba lo pusho nell'array
//      - Se il numero è una bomba il ciclo finisce
//      - Stampare messaggio di numero bandierine piazzate

// Riempirò questo codice di commenti :P

var dimensioneCampo = difficolta(); // scelta con funzione in base alla difficoltà
var totaleMine = 16;
var bandierineMax = dimensioneCampo - totaleMine; // bandierine massime piazzabili

var minePiazzate = piazzaLeMine(dimensioneCampo, totaleMine); // array dove verranno piazzate le mine richiamando la funzione di piazzamento randomico
var bandierinePiazzate = []; // array vuoto dove verranno pushate le bandierine, i numeri inseriti dall'utente

var kaboom = false; // variabile sentinella che servirà in caso di arresto manuale del ciclo quando troviamo una bomba
while ((bandierinePiazzate.length < bandierineMax) && (kaboom === false)) { // Ciclo WHILE fino a raggiungere le bandierine massime piazzabili in base alla difficoltà (caso improbabilissimo) o al raggiungimento di una bomba
    var bandierinaDaPiazzare = parseInt(prompt('Scrivi un numero da 1 a ' + dimensioneCampo + ' e spera di non esplodere!'));
    if (!isNaN(bandierinaDaPiazzare)) { // se è un numero vai avanti, altrimenti salta alla riga75
        if ((bandierinaDaPiazzare >= 1) && (bandierinaDaPiazzare <= dimensioneCampo)) { // se è compreso tra 1 e il valore massimo vai avanti, altrimenti salta alla riga72
            if (!bandierinePiazzate.includes(bandierinaDaPiazzare)) { // se il numero non fa parte dei numeri già provati vai avanti, altrimenti salta alla riga69
                if (!minePiazzate.includes(bandierinaDaPiazzare)) { // se il numero non fa parte dei numeri dell'array minePiazzate vai avanti, altrimenti salta alla riga52
                    bandierinePiazzate.push(bandierinaDaPiazzare) // inserisci il numero nell'array bandierinePiazzate
                    if (bandierinePiazzate.length === bandierineMax){ // a questo punto se la lunghezza dell'array bandierinePiazzate è il massimo hai vinto il gioco
                        document.getElementById('cell' + bandierinaDaPiazzare).innerHTML = 'O';
                        document.getElementById('cell' + bandierinaDaPiazzare).setAttribute('class', 'cell green');
                        alert('Sei un mostro! Hai piazzato tutte le bandierine! Vai subito a comprare un gratta e vinci :)'); // qui non c'è bisogno della variabile sentinella perchè al prossimo giro non rispetteremo le condizioni del ciclo
                    } else {
                        document.getElementById('cell' + bandierinaDaPiazzare).innerHTML = 'O';
                        document.getElementById('cell' + bandierinaDaPiazzare).setAttribute('class', 'cell green');
                    }
                } else { // rif. IF riga42
                    if (bandierinePiazzate.length === 0) { // caso in cui la lunghezza dell'array bandierinePiazzate è 0
                        document.getElementById('cell' + bandierinaDaPiazzare).innerHTML = 'X';
                        document.getElementById('cell' + bandierinaDaPiazzare).setAttribute('class', 'cell red');
                        alert('|*|* BOOOM *|*| Game Over! Non hai piazzato nemmeno una bandierina.');
                    } else if (bandierinePiazzate.length === 1) { // caso in cui la lunghezza dell'array bandierinePiazzate è 1
                        document.getElementById('cell' + bandierinaDaPiazzare).innerHTML = 'X';
                        document.getElementById('cell' + bandierinaDaPiazzare).setAttribute('class', 'cell red');
                        alert('|*|* BOOOM *|*| Game Over! Hai piazzato una sola bandierina.');
                    } else {
                        document.getElementById('cell' + bandierinaDaPiazzare).innerHTML = 'X';
                        document.getElementById('cell' + bandierinaDaPiazzare).setAttribute('class', 'cell red');
                        alert('|*|* BOOOM *|*| Game Over! Hai piazzato ' + bandierinePiazzate.length + ' bandierine.');
                    }
                    alert('Ricarica la pagina per una nuova partita');
                    kaboom = true; // abbiamo trovato una bomba, settiamo la variabile sentinella in modo che il ciclo termini
                }
            } else { // rif. IF riga41
                alert('Hai già piazzato una bandierina qui furbetto');
            }
        } else { // rif. IF riga40
            alert('Devi inserire un numero da 1 a ' + dimensioneCampo);
        }
    } else { // rif. IF riga39
        alert('Perfavore inserisci un numero');
    }
}

function difficolta() { // Funzione che imposta la variabile della dimensione del campo in base alla difficoltà scelta
    var scelta = parseInt(prompt('Inserisci la difficoltà tra 1, 2 o 3. Livello di default 1'));
    switch (scelta) {
        case 1:
            var dimCampo = 100;
            break;
        case 2:
            var dimCampo = 80;
            break;
        case 3:
            var dimCampo = 50;
            break;
        default:
            var dimCampo = 100;
    }
    return dimCampo;
}

function piazzaLeMine(dimCampo, totMine) { // Funzione che crea un array con numeri random e lunghezza dati in ingresso
    var mappaMine = [];
    while (mappaMine.length < totMine) {
        var minaDaPiazzare = generaRandomMinMax(1, dimCampo);
        if (!mappaMine.includes(minaDaPiazzare)) {
            mappaMine.push(minaDaPiazzare);
        }
    }
    return mappaMine;
}

function generaRandomMinMax(min, max) { // funzione che genera un numero random tra due valori dati in ingresso MIN e MAX, estremi inclusi
    var numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
