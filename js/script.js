/**
 * Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
 */



//*Inserisco 5 numeri casuali inun arrai che possono essere uguali
const numberCpu = [];
const numberInCommon = [];
const myTimes = 3000;
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
    const numberCycle = 5;
    ElementIncluseArrayCommon(numberCycle, 100, 1, numberCpu, numbersUser, numberInCommon)

    /*  while (i < numberCycle) {
         userNumber = parseInt(prompt(`Inserisci un numero tra 1 e 100 ( ${i} / ${numberCycle})`));
         while (isNaN(userNumber) || parseInt(userNumber) > 100 || parseInt(userNumber) < 1) {
             userNumber = parseInt(prompt(`Inserisci un numero tra 1 e 100 ( ${i} / ${numberCycle})`));
         }
 
         if (numberCpu.includes(userNumber)) {
             numberInCommon.push(userNumber);
             console.log(userNumber + "e un numero dellaCPU");
         } else {
             console.log(userNumber + " un è numero dellaCPU");
             numbersUser.push(userNumber);
         }
         i++
     };
  */
    console.table(numbersUser);
    console.log("Numeri in comune", numberInCommon);

    //! controllo se ci sono numeri all'interno della array dei numeri comuni
    if (numberInCommon.length < 1) {
        message.innerHTML = `Non ci sono numeri in comune`;
    } else if (numberInCommon.length == numberCpu.length) {
        message.innerHTML = `Ottima memoria hai ricordato tutti i numeri ${numberInCommon}`;
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

/**
 * Chiedere per N volte all'utente di inserire un numero con covalida
 * @param {*} numberCycle inserire il numero di volte che deve ripetere il prompt
 */
function userNumber(numberCycle, max, min) {
    i = 0;
    while (i < numberCycle) {
        userNumberPrompt = parseInt(prompt(`Inserisci un numero tra ${min} e ${max} ( ${i} / ${numberCycle})`));
        while (isNaN(userNumberPrompt) || parseInt(userNumberPrompt) > max || parseInt(userNumberPrompt) < min) {
            userNumberPrompt = parseInt(prompt(`Inserisci un numero tra ${min} e ${max} ( ${i} / ${numberCycle})`));
        }
        i++;
    }
    return userNumberPrompt;
};

/**
 * Chiedere per N volte all'utente di inserire un numero con covalida confronta due array 
 * inserendo i gli elementi comuni in una terza array
 * @param {*} numberCycle numero di cicli che vuoi fare
 * @param {*} max numero massimo che vuoi da inserire
 * @param {*} min numero minimo che vuoi da inserire
 * @param {*} arrayOne prima array
 * @param {*} Arraytwo seconda array
 * @param {*} ArrayElementCommon array comune
 * @returns 
 */
function ElementIncluseArrayCommon(numberCycle, max, min, arrayOne, Arraytwo, ArrayElementCommon) {
    i = 0;
    while (i < numberCycle) {
        userNumberPrompt = parseInt(prompt(`Inserisci un numero tra ${min} e ${max} ( ${i} / ${numberCycle})`));
        while (isNaN(userNumberPrompt) || parseInt(userNumberPrompt) > max || parseInt(userNumberPrompt) < min) {
            userNumberPrompt = parseInt(prompt(`Inserisci un numero tra ${min} e ${max} ( ${i} / ${numberCycle})`));
        }
        if (arrayOne.includes(userNumberPrompt)) {
            ArrayElementCommon.push(userNumberPrompt);
            console.log(userNumberPrompt + "e un numero dellaCPU");
        } else {
            console.log(userNumberPrompt + " un è numero dellaCPU");
            Arraytwo.push(userNumberPrompt);
        }
        i++;
    }
    return ArrayElementCommon;
};