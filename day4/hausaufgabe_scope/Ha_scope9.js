function filterAltersbeschraenkteBenutzer(benutzerListe) {
    return benutzerListe.filter(benutzer => benutzer.alter >= 18);
}

// Testen der Funktion
const benutzerListe = [
    {name: "Max", alter: 22},
    {name: "Anna", alter: 16},
    {name: "Eva", alter: 25}
];

const erlaubteBenutzer = filterAltersbeschraenkteBenutzer(benutzerListe);
console.log("Benutzer, die alt genug sind:", erlaubteBenutzer);
// Ausgabe: [{name: "Max", alter: 22}, {name: "Eva", alter: 25}]