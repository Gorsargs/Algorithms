//sorted array ♦♦
let arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

function binarySearch(arr, l, r, num) {
  if (r >= l) {
    let mid = l + Math.floor((r - l) / 2);
    if (arr[mid] === num) {
      return mid;
    }
    if (arr[mid] > num) {
      return binarySearch(arr, l, mid - 1, num);
    }
    return binarySearch(arr, mid + 1, r, num);
  }

  return -1;
}

console.log(binarySearch(arr, 0, arr.length, 8));
