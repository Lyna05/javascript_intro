function filterEinmaligeProdukte(produkte) {
    const haeufigkeiten = {};
    produkte.forEach(produkt => {
        haeufigkeiten[produkt] = (haeufigkeiten[produkt] || 0) + 1;
    });
    
    return produkte.filter(produkt => haeufigkeiten[produkt] === 1);
}

// Testen der Funktion
const produkte = ["T-Shirt", "Hose", "T-Shirt", "Mütze"];
console.log(filterEinmaligeProdukte(produkte)); // Ausgabe: ["Hose", "Mütze"]