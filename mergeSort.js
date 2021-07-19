//Separate and dominate , but nothing about feminism .

let MergeTwoArrays = (left, right) => {

    //This function merges two sorted arrays

    let i = 0;
    let j = 0;

    const mergedArr = new Array();

    while (i < left.length && j < right.length) {

        if (left[i] < right[j]) {
            mergedArr.push(left[i])
            i++;
        } else {
            mergedArr.push(right[j])
            j++;
        };
    };
    //if one array is bigger than another.
    while (j < right.length || i < left.length) {
        if (j < right.length) {
            mergedArr.push(right[j]);
            j++;
        } else {
            mergedArr.push(left[i]);
            i++;
        };
    };
    return mergedArr;
};

let MergeSort = (arr) => {

    //seperates arr to left and right sorted halves
    if (arr.length == 1) {
        return arr;
    };

    let middle = Math.round(arr.length / 2);
    let lefthalf = [];
    let righthalf = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < middle) {
            lefthalf.push(arr[i]);
        } else {
            righthalf.push(arr[i]);
        };
    };

    let left = MergeSort(lefthalf);
    let right = MergeSort(righthalf);

    return MergeTwoArrays(left, right);
}

const arr = [100, -199, 5, 6, 3, 2, 1, -200, 5, 5, 3, 10];

const result = MergeSort(arr);

