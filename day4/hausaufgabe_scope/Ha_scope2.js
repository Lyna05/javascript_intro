// Definieren einer Funktion mit einer mit `var` deklarierten Variable
function testFunction() {
    var localVar = "Ich bin eine lokale Variable.";
    console.log("Innerhalb der Funktion: localVar =", localVar);
}

// Vor dem Aufruf der Funktion auf die Variable zugreifen
console.log("Vor dem Aufruf der Funktion: localVar =", localVar); // ReferenceError: localVar is not defined

// Aufrufen der Funktion
testFunction();

// Nach dem Aufruf der Funktion auf die Variable zugreifen
console.log("Nach dem Aufruf der Funktion: localVar =", localVar); // ReferenceError: localVar is not defined