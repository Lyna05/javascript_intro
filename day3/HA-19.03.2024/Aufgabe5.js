function istPasswortGueltig(passwort) {

  return passwort.length >= 8 && /\d/.test(passwort) && /[A-Z]/.test(passwort);
}

console.log(istPasswortGueltig("Test1234"));

