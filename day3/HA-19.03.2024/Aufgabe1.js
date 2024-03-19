function entferneElement(arr, wert) {
  // Finde den Index des Werts im Array
  var index = arr.indexOf(wert);
 
  // Überprüfe, ob der Wert im Array vorhanden ist
  if (index !== -1) {
    // Entferne das Element aus dem Array
    arr.splice(index, 1);
  }
 
  // Gib das modifizierte Array zurück
  return arr;
}

console.log(entferneElement([1, 2, 3, 4, 5], 3)); // Sollte [1, 2, 4, 5] ausgeben