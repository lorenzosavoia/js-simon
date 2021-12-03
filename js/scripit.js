// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


function getRndInteger(min, max) {
    let randomNumber = [];

    for (let i = 0; i < 5; i++) {

        min = Math.ceil(min);
        max = Math.floor(max);

        let element = randomNumber[i];
        element = Math.floor(Math.random() * (max - min + 1)) + min;

        while (randomNumber.includes(element)) {
            element = Math.floor(Math.random() * (max - min + 1)) + min;

        }
        randomNumber.push(element)
    }
    return randomNumber
}

let number = getRndInteger(1,100);

const numberShow = document.getElementById('numberShow')

console.log(numberShow);

numberShow.innerHTML = `<h1> i tuoi numeri sono: ${number}. </h1>`

const clock = setTimeout(myFunction, 3000);

function myFunction(){
    let askNumberArray = [];
    numberShow.innerHTML = "";
    setTimeout (myFunction, 200)
    function myFunction() {
        for (let i = 0; i < 5; i++) {
            let askNumber = parseInt(prompt("inserisci 5 numberi"));
            console.log(askNumber)
            askNumberArray.push(askNumber);
        }
        
    }
        
    console.log(askNumberArray, number);

}

console.log(clock);