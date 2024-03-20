let fortsetzten = true;

while (fortsetzten) {
    console.log("\n1: Option 1\n2: Option 2\n3: Beenden");
    let auswahl = prompt("Waehlen Sie eine Option: ");

    switch (auswahl) {
        case "1":
            console.log("Option 1 gewaehlt.");
            break;
        case "2":
            console.log("Option 2 gewaehlt.");
            break;
        case "3":
            console.log("Programm beendet.");
            fortsetzten = false;
            break;
        default:
            console.log("Ungueltige Auswahl.")
    }   
}