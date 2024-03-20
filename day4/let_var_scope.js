// Var-Variablen sind ausserhalb des Blocks sichtbar

for (var i = 0; i < 3; i++) {
    console.log("Innerhalb der Schleife: " + i);
}

console.log("Ausserhalb der Schleife: " + i);



// Let-Variablen sind ausserhalb des Blocks nicht sichtbar
for (let j = 0; j < 3; j++) {
    console.log("Innerhalb der Schleife: " + j);
}

console.log("Ausserhalb der Schleife: " + j);