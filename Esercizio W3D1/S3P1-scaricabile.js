/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(a, b) {
    if (a === b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}

console.log(crazySum(2, 2)); 
console.log(crazySum(2, 3)); 


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

function boundary(num) {
    if ((num >= 20 && num <= 100) || num === 400) {
        return true;
    } else {
        return false;
    }
}

console.log(boundary(50));  
console.log(boundary(20));  
console.log(boundary(100)); 
console.log(boundary(400)); 
console.log(boundary(10));  
console.log(boundary(200)); 

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString("EPICODE")); // Output: "EDOCIPE"
console.log(reverseString("JavaScript")); // Output: "tpircSavaJ"


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(upperFirst("epicode is awesome")); // Output: "Epicode Is Awesome"
console.log(upperFirst("hello world")); // Output: "Hello World"


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

function giveMeRandom(n) {
    const randomNumbers = [];
    for (let i = 0; i < n; i++) {
        randomNumbers.push(Math.floor(Math.random() * 11)); 
    }
    return randomNumbers;
}

console.log(giveMeRandom(5)); // Output: [es. 3, 7, 2, 9, 1]
console.log(giveMeRandom(10)); // Output: [es. 0, 5, 8, 4, 7, 2, 1, 3, 6, 9]


/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2;
}

console.log(area(5, 10)); 
console.log(area(7, 3));  


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff(num) {
    const diff = Math.abs(num - 19); // Calcola la differenza assoluta
    if (diff > 19) {
        return diff * 3; 
    } else {
        return diff;
    }
}

console.log(crazyDiff(38)); // Output: 57
console.log(crazyDiff(10)); // Output: 9
console.log(crazyDiff(0));  // Output: 19
console.log(crazyDiff(25)); // Output: 18


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str) {
    if (str.startsWith("code")) {
        return str;
    } else {
        return "code" + str;
    }
}

console.log(codify("learning")); 
console.log(codify("codeacademy")); 
console.log(codify("test")); 
console.log(codify("codewars")); 


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7(num) {
    if (num > 0 && (num % 3 === 0 || num % 7 === 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(check3and7(21)); 
console.log(check3and7(9));  
console.log(check3and7(14)); 
console.log(check3and7(10)); 
console.log(check3and7(1));  


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

function cutString(str) {
    return str.slice(1, -1);
}

console.log(cutString("EPICODE"));  // Output: "PICOD"
console.log(cutString("JavaScript")); // Output: "avaScrip"
console.log(cutString("Hello"));    // Output: "ell"
console.log(cutString("A"));        // Output: "" (stringa vuota)

/* SCRIVI QUI LA TUA RISPOSTA */
