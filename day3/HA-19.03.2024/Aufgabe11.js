function findeMinMax(arr) {
 
  let min = arr[0];
  let max = arr[0];

  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } else if (arr[i] > max) {
      max = arr[i];
    }
  }

  
  return { min: min, max: max };
}


console.log(findeMinMax([10, 2, 5, 1, 9]));