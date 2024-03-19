function taschenrechner(a, b, operation) {
    switch (operation) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Ungültige Operation";
    }
}

console.log(taschenrechner(10, 5, "+")); 
console.log(taschenrechner(10, 5, "/")); 
console.log(taschenrechner(10, 5, "x"));  