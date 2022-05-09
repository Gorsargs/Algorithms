function quickSort(start, end, arr) {
  if (start < end) {
    let pIndex = partition(start, end, arr);
    quickSort(start, pIndex - 1, arr);
    quickSort(pIndex + 1, end, arr);
  }
}

function partition(start, end, arr) {
  //this function replaces all the elements smaller than the pivot to the left of it.
  let pivot = arr[end];
  let i = start - 1;

  for (let j = start; j < end; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }

  swap(arr, i + 1, end);
  return i + 1;
}

function swap(arr, left, right) {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
}

const arr = [-10, 10, 10, 100, -34, 1, 2, 3];

quickSort(0, arr.length - 1, arr);

console.log(arr);
