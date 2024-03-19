function zaehleBuchstaben(str, buchstabe) {
    str = str.toLowerCase();
    buchstabe = buchstabe.toLowerCase();
    
    let count = 0; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] === buchstabe) {
            count++;
        }
    }
    return count; // Gib die Anzahl der Vorkommen des Buchstabens zurück
}

console.log(zaehleBuchstaben("Hallo Welt", "l"));