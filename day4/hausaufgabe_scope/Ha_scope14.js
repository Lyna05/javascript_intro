function zaehleBesucherImAlterbereich(besucher, min, max) {
    let count = 0;
    for (const alter of besucher) {
        if (alter >= min && alter <= max) {
            count++;
        }
    }
    return count;
}

// Testen der Funktion
const besucher = [22, 34, 15, 17, 18, 45];
const minAlter = 18;
const maxAlter = 35;
console.log(zaehleBesucherImAlterbereich(besucher, minAlter, maxAlter)); // Ausgabe: 3