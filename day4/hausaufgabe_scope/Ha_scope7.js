// Deklaration einer globalen Variable mit `var`
var globalVar = "Ich bin eine globale Variable (var)";

// Deklaration einer globalen Variable mit `let`
let globalLet = "Ich bin eine globale Variable (let)";

// Deklaration einer globalen Konstanten mit `const`
const globalConst = "Ich bin eine globale Variable (const)";

// Zugriff auf die Variablen über das `window`-Objekt
console.log(window.globalVar);   // "Ich bin eine globale Variable (var)"
console.log(window.globalLet);   // undefined
console.log(window.globalConst); // undefined