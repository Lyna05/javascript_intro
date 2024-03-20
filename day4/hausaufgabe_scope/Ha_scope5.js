// Erstellen einer for-Schleife mit `var`
for (var i = 0; i < 3; i++) {
    // Definition einer Funktion innerhalb der Schleife, die auf die Schleifenvariable zugreift
    function printValue() {
        console.log("Innerhalb der Funktion: i =", i);
    }
    
    // Aufruf der Funktion innerhalb der Schleife
    printValue();
}

// Versuch, auf die Schleifenvariable außerhalb der Schleife zuzugreifen
console.log("Außerhalb der Schleife: i =", i); // i behält den Wert der letzten Iteration bei