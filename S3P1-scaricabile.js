/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = parseInt(prompt("Inserisci il primo numero"))
let num2 = parseInt(prompt("Inserisci il secondo numero"))
let somma  = num1 + num2
let moltiplicazione = num1 * num2

crazySum(num1, num2)
function crazySum(addendo1, addendo2) {
    if (addendo1 === addendo2) {
        alert(moltiplicazione)
    } else {
        alert(somma)
    }
    
    return somma, moltiplicazione
    
}

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num = parseInt(prompt("Inserisci un numero intero"))

boundary(num)
function boundary(numInt) {
    if ((numInt === 400) || ((numInt > 20) && (numInt < 100))) {
        alert("Vero!")
    } else {
        alert("Falso!")
    }
}

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let ogString = "Hello World"
let newString = ""

reverseString(ogString)
console.log(newString)

function reverseString(string) {
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i]
        console.log(newString)
    }
    return string
}


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let testo = "to camel case"
let camelCase = upperFirst(testo)
console.log(camelCase)

function upperFirst(str) {
    const words = str.split(" ")
    const upperWords = []
    for (let i of words) {
       let wordUpper = i.charAt(0).toUpperCase() + i.slice(1)
       upperWords.push(wordUpper)
    }
    return upperWords.join(" ")
    
}


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let n = parseInt(prompt("Inserisci un numero fra 0 e 10"))
const arr = []

const giveMeRandom = function (n) {
    const arr = []
    for (let i = 0; i < n; i++) {
      arr.push(Math.floor(Math.random() * 10))
    }
    return arr
  }
  alert(giveMeRandom(n))


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function(l1, l2) {
    return l1 * l2
}

let areaRett = area(4, 4)
console.log("L'area del rettangolo è di " + areaRett + "cmq")

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function(num) {
    let diff 
    if (num > 19) {
        diff = Math.abs(num - 19) * 3
    } else {
        diff = Math.abs(num - 19)
    }
    return diff 
}

console.log(crazyDiff(20))

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa1 = "code "
let stringa2 = codify(prompt("Inserisci una scritta"))
function codify(str) {
    
    if (str.startsWith("code")) {
        return str
    } else {
        return stringa1 + str
    }
}
alert(codify(stringa2))

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(Int) {
    if ((Int % 3 === 0) || (Int % 7 === 0)) {
        return true
    } else {
        return false
    }
}
console.log(check3and7(14))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
    return str.slice(1, str.length -1)
}
console.log(cutString("tagliato"))
//arrow version

const cutString = str => str.slice(1, str.length -1)
console.log(cutString("tagliato"))