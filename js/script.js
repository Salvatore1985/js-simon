/**
 * Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */



//*Inserisco 5 numeri casuali inun arrai che possono essere uguali
const numberCpu = [];
let numberPage = generateRandomNumber(numberCpu, 5, 1, 100);
console.log(numberPage);

//*RECUPERO L'ELEMENTO DAL DOM
document.getElementById("message-cpu").innerHTML = `
I numeri della Cpu sono ${numberCpu}`;

//*INSERISCO UN TIMER DI 30" E DOPO DI CHè SOVRASCRIVO IL MESSAGGIO NELLA PAGINA
const myDispayNone = () => document.getElementById("message-cpu").innerHTML = `il tempo e scaduto`;
setTimeout(myDispayNone, 30000);

//*INSERISCO UN TIMER DI 30" E DOPO DI CHè SOVRASCRIVO IL MESSAGGIO NELLA PAGINA
const userNumberTime = () => {

    //! Creo un ciclo while per chiedere 5 volte il numero all'utente
    const numbersUser = [];
    let userNumber = "";
    let i = 0;
    while (i < 5) {
        userNumber = parseInt(prompt("inserisci un numero" + "5/ " + i));
        numbersUser.push(userNumber);
        i++
    };
    console.table(numbersUser);
}
setTimeout(userNumberTime, 30000);


//! DA CONTROLLARE CON RICCARDO
/* 
const numbersUser = [];
let userNumber = parseInt(prompt("inserisci un numero" + "5/ " + i));
let i = 0;

while (i < 5) {
    if (isNaN(userNumber)) {
        console.log("numero sbagliato");
    } else {

        userNumber = parseInt(prompt("inserisci un numero" + "5/ " + i));
       
        numbersUser.push(userNumber);
        i++
    }

};

console.table(numbersUser);

 */

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


    }

    return numsArray;

}; 