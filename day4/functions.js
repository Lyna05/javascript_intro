// Einfache Funktion ohne Parameter
function greeting() {
    console.log("Hallo!");
}

greeting();

// Funktion mit Parametern
function addiere(num1, num2) {
    return num1 + num2;
}

console.log(addiere(1,2));

// Anonyme Funktion
const addingConst = function(num1, num2) {
    return num1 + num2;
}

console.log(addingConst(2,5));

// Arrow-Funktion (Pfeilfunktion)
const addingArrow = (num1, num2) => num1 + num2;

console.log(addingArrow(5,10));