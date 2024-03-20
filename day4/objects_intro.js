let person = {
    name: "Max Mustermann",
    alter: 30,
    beruf: "Webentwickler"
};

console.log(person);

//Auf einzelne Objekt-Eigenschaften zugreifen: 
// Punkt-Notation
console.log(person.name);
// Klammer-Notation
console.log(person["alter"]);

// Eigenschaften Modifizieren
person.beruf = "Softwareentwickler";
console.log(person);

// Eigenschaften Hinzufügen
person.hobbys = ["Lesen", "Wandern"];
console.log(person);

//Objekt-Methoden definieren
person.vorstellen = function() {
    console.log(`Hallo, ich bin ${this.name} und ich bin ${this.beruf}.`);
};

person.vorstellen();