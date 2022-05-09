//sorted array ♦♦
const arr = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610];

function jumpSearch(arr, num, steps = 4) {
  let i = 0;
  while (arr[i] < num && i < arr.length) {
    if (arr[i] == num) {
      return i;
    }
    i += steps;
  }
  const end = i;
  i = i - steps;

  while (i < end) {
    if (arr[i] === num) {
      return i;
    }
    i++;
  }
  return null;
}
