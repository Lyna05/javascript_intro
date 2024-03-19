function berechneDurchschnitt(arr) {
  let summe = 0;

  for (let i = 0; i < arr.length; i++) {
    summe += arr[i]; 
  }

  return summe / arr.length;
}

console.log(berechneDurchschnitt([1, 2, 3, 4, 5]));