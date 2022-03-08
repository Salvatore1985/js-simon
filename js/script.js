/**
 * Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */



//*Inserisco 5 numeri casuali inun arrai che possono essere uguali
const numberCpu = [];
const numberInCommon = [];
const myTimes = 30000;
let numberPage = generateRandomNumber(numberCpu, 5, 1, 100);
console.log(numberPage);

//*RECUPERO L'ELEMENTO DAL DOM
let message = document.getElementById("message-cpu");
message.innerHTML = `
I numeri della Cpu sono ${numberCpu}`;

//*INSERISCO UN TIMER DI 30" E DOPO DI CHè SOVRASCRIVO IL MESSAGGIO NELLA PAGINA
const myDispayNone = () => message.innerHTML = `il tempo e scaduto`;
setTimeout(myDispayNone, myTimes);

//*INSERISCO UN TIMER DI 30" E DOPO DI CHè SOVRASCRIVO IL MESSAGGIO NELLA PAGINA
const userNumberTime = () => {

    //! Creo un ciclo while per chiedere 5 volte il numero all'utente
    const numbersUser = [];
    let userNumber = "";
    let i = 0;
    while (i < 5) {
        userNumber = parseInt(prompt("inserisci un numero tra 1 e 100 " + "5/ " + i));
        if (numberCpu.includes(userNumber)) {
            numberInCommon.push(userNumber);
            console.log(userNumber + "e un numero dellaCPU");
        } else {
            console.log(userNumber + " un è numero dellaCPU");
            numbersUser.push(userNumber);
        }
        i++
    };

    console.table(numbersUser);
    console.log("Numeri in comune", numberInCommon);

    //! controllo se ci sono numeri all'interno della array dei numeri comuni
    if (numberInCommon.length < 1) {
        message.innerHTML = `Non ci sono numeri in comune`;
    } else {

        message.innerHTML = `I numeri in comune sono ${numberInCommon}`;
    }
}
setTimeout(userNumberTime, myTimes);







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