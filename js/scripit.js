// Visualizzare in pagina 5 numeri casuali poi fateli sparire.
// Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


function getRndInteger(min, max) {
    

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
let randomNumber = [];
const numberShow = document.getElementById('numberShow')
console.log(numberShow);
let number = getRndInteger(1, 5);
numberShow.innerHTML = `<h1> i tuoi numeri sono: ${number}. </h1>`
const clock = setTimeout(myFunction, 3000);
function myFunction(){
    clearInterval(clock)
    numberShow.innerHTML = "";
    let askNumberArray = [];
    setTimeout (myFunction, 200)
    function myFunction() {
        setTimeout(function(){
            for (let i = 0; i < 5; i++) {
                let askNumber = parseInt(prompt("inserisci 5 numberi"));
                console.log(askNumber)
                askNumberArray.push(askNumber);
            }
            
            if (randomNumber == askNumberArray) {
                console.log("sono uguali")
                
            }else{
                console.log("sono diversi");
            }
        
            console.log(askNumberArray, number);
            console.log(randomNumber == askNumberArray);
        },200);   
    }
}


console.log(clock);
