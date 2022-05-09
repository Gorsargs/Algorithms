const mergeTwoArrays = (arr1, arr2) => {
  //merges two sorted arrays;

  let p1 = 0;
  let p2 = 0;
  let resultArr = [];

  while (resultArr.length !== arr1.length + arr2.length) {
    if (arr2[p2] === undefined || arr1[p1] <= arr2[p2]) {
      resultArr.push(arr1[p1]);
      p1++;
    } else {
      resultArr.push(arr2[p2]);
      p2++;
    }
  }

  return resultArr;
};

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }

  let left = mergeSort(arr.splice(0, arr.length / 2));
  let right = mergeSort(arr);

  return merge(left, right);
};
