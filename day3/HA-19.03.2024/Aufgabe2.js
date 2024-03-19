function summeZahlen(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

console.log(summeZahlen([1, 2, 3, 4, 5])); 