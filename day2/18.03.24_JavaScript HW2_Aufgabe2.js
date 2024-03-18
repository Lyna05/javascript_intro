function bestimmeFahrpreis(alter) {
    if (alter < 6) {
        console.log("Die Fahrt ist kostenlos.");
    } else if (alter >= 6 && alter <= 17) {
        console.log("Die Fahrt kostet den Kinderpreis.");
    } else if (alter >= 18 && alter <= 66) {
        console.log("Die Fahrt kostet den Vollpreis.");
    } else {
        console.log("Die Fahrt kostet den Seniorenpreis.");
    }
}
