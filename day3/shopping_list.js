var einkaufsliste = ["Milch", "Brot", "Äpfel"];
console.log(einkaufsliste);

einkaufsliste.push("Orangen");
console.log(einkaufsliste);

var brotIndex = einkaufsliste.indexOf("Brot");
console.log(brotIndex);
einkaufsliste.splice(brotIndex,1);
console.log(einkaufsliste);

console.log("einkaufsliste:");
einkaufsliste.forEach(artikel => console.log(artikel));
