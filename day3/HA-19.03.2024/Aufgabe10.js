function filterGeradeZahlen(arr) {
  let geradeZahlen = [];

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      geradeZahlen.push(arr[i]); 
    }
  }
  return geradeZahlen; 
}

console.log(filterGeradeZahlen([1, 2, 3, 4, 5, 6]));