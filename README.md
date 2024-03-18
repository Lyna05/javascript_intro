# Javascript Intro

### Einführung in `if`, `else if` und `else` Anweisungen

#### Die `if` Anweisung
Eine `if` Anweisung überprüft eine Bedingung. Wenn die Bedingung `true` (wahr) ergibt, wird der Codeblock innerhalb der `if` Anweisung ausgeführt.

**Syntax:**

```javascript
if (Bedingung) {
  // Code, der ausgeführt wird, wenn die Bedingung wahr ist
}
```

### Die `else` Anweisung

**Syntax:**

```javascript
if (Bedingung) {
  // Code, der ausgeführt wird, wenn die Bedingung wahr ist
} else {
  // Code, der ausgeführt wird, wenn die Bedingung falsch ist
}
```

### Die `else if` Anweisung

Für mehrere Bedingungen in Folge können Sie `else if` verwenden, um zusätzliche Überprüfungen durchzuführen, bevor Sie zu `else` gelangen.

**Syntax:**

```javascript
if (Bedingung1) {
  // Code, der ausgeführt wird, wenn Bedingung1 wahr ist
} else if (Bedingung2) {
  // Code, der ausgeführt wird, wenn Bedingung2 wahr ist
} else {
  // Code, der ausgeführt wird, wenn keine der Bedingungen wahr ist
}
```