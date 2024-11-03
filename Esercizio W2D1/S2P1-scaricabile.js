//ESERCIZI SUGLI IF: 

/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const numero1 = 10;  // Puoi cambiare questi valori per testarli
const numero2 = 20; // Puoi cambiare questi valori per testarli

const max = (numero1 > numero2) ? numero1 : numero2;

console.log(`Il numero più grande è ${max}`);


/* SCRIVI QUI LA TUA RISPOSTA */

/*
ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

const num = 12; 

if (num < 5) {
    console.log("Tiny");
} else if (num < 10) {
    console.log("Small");
} else if (num < 15) {
    console.log("Medium");
} else if (num < 20) {
    console.log("Large");
} else {
    console.log("Huge");
}

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI SUI CICLI: 

/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let i = 0; i <= 10; i++) {
  if (i === 3 || i === 8) {
      continue;
  }
  console.log(i);
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
      console.log(i + " è pari");
  } else {
      console.log(i + " è dispari");
  }
}

/* SCRIVI QUI LA TUA RISPOSTA */

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function verificaNumeri(a, b) {
  if (a === 8 || b === 8 || a + b === 8 || Math.abs(a - b) === 8) {
      return true;
  } else {
      return false;
  }
}

// Esempi di test
console.log(verificaNumeri(8, 5)); // true
console.log(verificaNumeri(3, 5)); // true
console.log(verificaNumeri(12, 4)); // true
console.log(verificaNumeri(2, 3)); // false

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 60; // Puoi cambiare questo valore per testare diversi scenari
const costoSpedizione = 10;
let totaleDaAddebitare;

if (totalShoppingCart > 50) {
    totaleDaAddebitare = totalShoppingCart;
    console.log("Spedizione gratuita");
} else {
    totaleDaAddebitare = totalShoppingCart + costoSpedizione;
    console.log("Costo spedizione applicato");
}

console.log(`L'ammontare totale da addebitare è: €${totaleDaAddebitare}`);

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

const totalShoppingCard = 60; // Puoi cambiare questo valore per testare diversi scenari
const costoInvio = 10;
const sconto = 0.20; // 20% di sconto
let totaleDaAggiungere;

const totaleScontato = totalShoppingCard * (1 - sconto);

if (totaleScontato > 50) {
    totaleDaAggiungere = totaleScontato;
    console.log("Spedizione gratuita");
} else {
    totaleDaAggiungere = totaleScontato + costoSpedizione;
    console.log("Costo spedizione applicato");
}

console.log(`L'ammontare totale da aggiungere è: €${totaleDaAggiungere.toFixed(2)}`);


/* SCRIVI QUI LA TUA RISPOSTA */

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/