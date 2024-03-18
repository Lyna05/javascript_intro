let uhrzeit = 23;

// if - else Beispiel
if (uhrzeit < 18) {
    console.log("Guten Tag");
} else {
    console.log("Gute Nacht");
}

// mehrere Bedingungen Beispiel
if (uhrzeit < 12) {
    console.log("Guten Morgen");
} else if (uhrzeit < 18) {
    console.log("Guten Tag");
} else if (uhrzeit < 22) {
    console.log("Guten Abend");
} else {
    console.log("Gute Nacht");
}