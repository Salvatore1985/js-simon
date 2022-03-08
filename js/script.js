/**
 * Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */

const numberCpu = [];
let numberPage = generateRandomNumber(numberCpu, 5, 1, 100);
console.log(numberPage);

//  function che crea un numero random tra min e max e lo inserisci in un'array
/**
 *  function che crea un numero random tra min e max  e lo inserisci in un'array
 * @param {*} numsArray è l'array dove vengono inseriti i numeri randomizati
 * @param {number} min è il numero con il valore minimo
 * @param {number} max è il numero con il valore massimo
 */
function generateRandomNumber(numsArray, number, min, max) {

    for (let i = 0; i < number; i++) {
        let randomInteger = Math.floor(Math.random() * ((max + 1) - min) + min);
        numsArray.push(randomInteger);
        console.log(numsArray);

    }

    return numsArray;

}; 