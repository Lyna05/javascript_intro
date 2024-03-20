function berechneGesamtpunktzahl(punkte) {
    // Summieren aller Punkte in der Array
    const summe = punkte.reduce((gesamt, punkt) => gesamt + punkt, 0);
    return summe;
}

// Testen der Funktion
const punkte = [10, 20, 30];
console.log(berechneGesamtpunktzahl(punkte)); // Ausgabe: 60