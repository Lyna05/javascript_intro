//Den Wert der Konstanten kann man nicht veraendern.
const numConst = 5;
//Diese Zuweisung fuehrt zu einem Fehler:
//numConst = 10;

//Arrays werden als Konstanten deklariert
const numArray = [1, 2, 3];
console.log(numArray);
//Man kann die Array-Inhalten mit Array-Methoden veraendern.
numArray.pop();
console.log(numArray);
//Man kann aber andere Datentypen der Konstante nicht zuweisen,
//Diese Zuweisung fuehrt zu einem Fehler:
//numArray = "string";