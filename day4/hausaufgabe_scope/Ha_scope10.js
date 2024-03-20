function istPalindrome(username) {
    // Umwandeln des Benutzernamens in Kleinbuchstaben und Entfernen von Leerzeichen
    const usernameLowerCase = username.toLowerCase().replace(/\s/g, '');
    // Umkehren des Benutzernamens
    const reversedUsername = usernameLowerCase.split('').reverse().join('');
    // Überprüfen, ob der umgekehrte Benutzername mit dem ursprünglichen übereinstimmt
    return usernameLowerCase === reversedUsername;
}

// Testen der Funktion
console.log(istPalindrome("Anna")); // true