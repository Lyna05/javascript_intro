function zaehleVerschachtelung(kategorien, tiefe = 0) {
    let maxTiefe = tiefe;
    for (const kategorie in kategorien) {
        if (Object.keys(kategorien[kategorie]).length > 0) {
            const aktuelleTiefe = zaehleVerschachtelung(kategorien[kategorie], tiefe + 1);
            if (aktuelleTiefe > maxTiefe) {
                maxTiefe = aktuelleTiefe;
            }
        }
    }
    return maxTiefe;
}

// Testen der Funktion
const kategorienStruktur = {
    Kleidung: {
        Herren: {
            Hosen: {},
            Hemden: {}
        },
        Damen: {
            Kleider: {},
            Röcke: {}
        }
    }
};

console.log(zaehleVerschachtelung(kategorienStruktur)); // Ausgabe: 3