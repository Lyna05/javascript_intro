function filterEinkaufsliste(preise) {
    return preise.filter(preis => preis < 10 && preis % 2 === 0);
}

// Testen der Funktion
const einkaufsliste = [5, 12, 7, 9, 20, 25];
const gefilterteListe = filterEinkaufsliste(einkaufsliste);
console.log("Gefilterte Einkaufsliste:", gefilterteListe); // Ausgabe: [20]