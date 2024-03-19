# JS Homework 3 Arrays, Loops, Conditions

10 Punkte pro Aufgabe

### Aufgabe 1: Finden und Entfernen

**Ziel**: Schreiben Sie eine Funktion, die ein Array und einen Wert akzeptiert. Die Funktion sollte den Wert im Array suchen und entfernen, falls vorhanden. Geben Sie das modifizierte Array zurück.

```jsx
// Beispielcode
function entferneElement(arr, wert) {
  // Verwenden Sie hier eine geeignete Array-Methode
}

// Test
console.log(entferneElement([1, 2, 3, 4, 5], 3)); // Sollte [1, 2, 4, 5] ausgeben

```

### Aufgabe 2: Summe aller Zahlen

**Ziel**: Schreiben Sie eine Funktion, die ein Array von Zahlen akzeptiert und die Summe aller Zahlen im Array zurückgibt. Nutzen Sie die `reduce`-Methode für Ihre Lösung.

```jsx
// Beispielcode
function summeZahlen(arr) {
  // Implementieren Sie Ihre Lösung mit reduce
}

// Test
console.log(summeZahlen([1, 2, 3, 4, 5])); // Sollte 15 ausgeben

```

### Aufgabe 3: Duplikate Filtern

**Ziel**: Schreiben Sie eine Funktion, die ein Array akzeptiert und ein neues Array zurückgibt, in dem alle Duplikate entfernt wurden. Bewahren Sie die Reihenfolge der Elemente gemäß ihrem ersten Auftreten im ursprünglichen Array. Betrachten Sie die Verwendung der Methoden `filter` und `indexOf` oder `includes`.

```jsx
// Beispielcode
function entferneDuplikate(arr) {
  // Verwenden Sie hier geeignete Array-Methoden
}

// Test
console.log(entferneDuplikate([1, 2, 2, 3, 4, 4, 5])); // Sollte [1, 2, 3, 4, 5] ausgeben

```

### Aufgabe 4: Überprüfung der Jahreszeit

**Ziel**: Schreiben Sie eine Funktion, die eine Zahl für den Monat (1 bis 12) akzeptiert und die entsprechende Jahreszeit zurückgibt: Winter, Frühling, Sommer oder Herbst. Nehmen Sie an, dass Winter die Monate 12, 1, 2 umfasst, Frühling 3, 4, 5, Sommer 6, 7, 8 und Herbst 9, 10, 11.

```jsx
// Beispielcode
function bestimmeJahreszeit(monat) {
  // Verwenden Sie Bedingungen, um die Jahreszeit zu bestimmen
}

// Test
console.log(bestimmeJahreszeit(4)); // Sollte "Frühling" ausgeben

```

### Aufgabe 5: Passwort-Validierung

**Ziel**: Schreiben Sie eine Funktion, die ein Passwort (String) akzeptiert und überprüft, ob es den Sicherheitsanforderungen entspricht: mindestens 8 Zeichen lang, enthält mindestens eine Zahl und mindestens einen Großbuchstaben. Die Funktion soll `true` zurückgeben, wenn das Passwort gültig ist, und `false`, wenn es ungültig ist.

```jsx
// Beispielcode
function istPasswortGueltig(passwort) {
  // Implementieren Sie die Passwort-Validierungslogik
}

// Test
console.log(istPasswortGueltig("Test1234")); // Sollte true ausgeben

```

### Aufgabe 6: Einfacher Taschenrechner

**Ziel**: Schreiben Sie eine Funktion, die zwei Zahlen und eine Operation (`"+"`, `"-"`, `"*"`, `"/"`) akzeptiert und das Ergebnis der Operation zurückgibt. Die Funktion soll eine Fehlermeldung ausgeben, wenn eine ungültige Operation übergeben wird.

```jsx
// Beispielcode
function taschenrechner(a, b, operation) {
  // Verwenden Sie Bedingungen, um die entsprechende Operation auszuführen
}

// Test
console.log(taschenrechner(10, 5, "+")); // Sollte 15 ausgeben
console.log(taschenrechner(10, 5, "/")); // Sollte 2 ausgeben
console.log(taschenrechner(10, 5, "x")); // Sollte "Ungültige Operation" ausgeben

```

### Aufgabe 7: Multiplikationstabelle

**Ziel**: Schreiben Sie eine Funktion, die eine Zahl nimmt und eine Multiplikationstabelle für diese Zahl von 1 bis 10 ausgibt. Jede Zeile sollte das Format `n x i = Ergebnis` haben, wobei `n` die gegebene Zahl und `i` der Multiplikator von 1 bis 10 ist.

```jsx
// Beispielcode
function multiplikationstabelle(n) {
  // Verwenden Sie eine for-Schleife, um die Tabelle zu generieren und auszugeben
}

// Test
multiplikationstabelle(5); // Sollte die Multiplikationstabelle für 5 ausgeben

```

### Aufgabe 8: Array-Umkehrung

**Ziel**: Schreiben Sie eine Funktion, die ein Array von Elementen akzeptiert und ein neues Array zurückgibt, in dem die Reihenfolge der Elemente umgekehrt ist. Verwenden Sie eine `for`-Schleife für die Umkehrung und versuchen Sie, ohne die eingebaute `reverse()` Methode auszukommen.

```jsx
// Beispielcode
function umkehrenArray(arr) {
  // Implementieren Sie die Logik, um das Array umzukehren
}

// Test
console.log(umkehrenArray([1, 2, 3, 4, 5])); // Sollte [5, 4, 3, 2, 1] ausgeben

```

### Aufgabe 9: Zählen von Buchstaben

**Ziel**: Schreiben Sie eine Funktion, die einen String und einen Buchstaben akzeptiert. Die Funktion soll die Anzahl der Vorkommen dieses Buchstabens im String zurückgeben. Groß- und Kleinschreibung soll nicht beachtet werden.

```jsx
// Beispielcode
function zaehleBuchstaben(str, buchstabe) {
  // Zählen Sie, wie oft `buchstabe` in `str` vorkommt
}

// Test
console.log(zaehleBuchstaben("Hallo Welt", "l")); // Sollte 3 ausgeben

```

### Aufgabe 10: Finde gerade Zahlen

**Ziel**: Schreiben Sie eine Funktion, die ein Array von Zahlen akzeptiert und ein neues Array zurückgibt, das nur die geraden Zahlen des ursprünglichen Arrays enthält.

```jsx
// Beispielcode
function filterGeradeZahlen(arr) {
  let geradeZahlen = [];
  // Verwenden Sie eine for-Schleife und eine Bedingung, um gerade Zahlen zu filtern
  return geradeZahlen;
}

// Test
console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6])); // Sollte [2, 4, 6] ausgeben

```

### Aufgabe 11: Minimale und maximale Zahl finden

**Ziel**: Schreiben Sie eine Funktion, die ein Array von Zahlen akzeptiert und ein Objekt zurückgibt, das die minimale und maximale Zahl aus diesem Array enthält.

```jsx
// Beispielcode
function findeMinMax(arr) {
  // Initialisieren Sie min und max entsprechend
  // Durchlaufen Sie das Array, um min und max zu aktualisieren
  return { min: /* min Wert */, max: /* max Wert */ };
}

// Test
console.log(findeMinMax([10, 2, 5, 1, 9])); // Sollte { min: 1, max: 10 } ausgeben

```

### Aufgabe 12: Durchschnittsberechnung

**Ziel**: Schreiben Sie eine Funktion, die ein Array von Zahlen akzeptiert und den Durchschnittswert dieser Zahlen berechnet. Geben Sie das Ergebnis zurück.

```jsx
// Beispielcode
function berechneDurchschnitt(arr) {
  let summe = 0;
  // Verwenden Sie eine for-Schleife, um die Summe der Zahlen zu berechnen
  // Teilen Sie die Summe durch die Anzahl der Zahlen, um den Durchschnitt zu erhalten
  return summe / arr.length;
}

// Test
console.log(berechneDurchschnitt([1, 2, 3, 4, 5])); // Sollte 3 ausgeben

```

Diese Aufgaben kombinieren mehrere Kernkonzepte der JavaScript-Programmierung und bieten eine solide Grundlage für die Entwicklung von Problemlösungsfähigkeiten. Die erfolgreiche Bearbeitung dieser Aufgaben verstärkt das Verständnis für den Umgang mit Arrays, das Durchführen von Bedingungsprüfungen und die Steuerung des Programmflusses mit Schleifen.