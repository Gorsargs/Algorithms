const arr = [1, 4, 1, 2, 7, 7, 8, 5, 2];

function countSort(arr) {
  //simple count sort example : works only on positive numbers;

  const max = Math.max(...arr);
  const countArray = Array.from({ length: max }, (_) => 0);
  const output = Array.from({ length: arr.length }, (_) => 0);

  for (let i = 0; i < arr.length; i++) {
    countArray[arr[i]] += 1;
  }

  for (let i = 1; i < countArray.length; i++) {
    countArray[i] += countArray[i - 1];
  }

  countArray.pop();
  countArray.unshift(0);

  for (let i = 0; i < arr.length; i++) {
    output[countArray[arr[i]]] = arr[i];
    ++countArray[arr[i]];
  }
  
  return output;
}

countSort(arr);
