// Erstellen eines Codeblocks mit einer if-Anweisung
if (true) {
    // Definition einer Funktion innerhalb des Codeblocks mit `let`
    let myFunc = function() {
        console.log("Ich bin eine Funktion innerhalb des Blocks.");
    };

    // Aufruf der Funktion innerhalb des Blocks
    myFunc();
}

// Versuch, auf die Funktion außerhalb des Blocks zuzugreifen
myFunc(); // ReferenceError: myFunc is not defined