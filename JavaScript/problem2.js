// Sorting of given array in descending order

let arr = [4, 8, 20, 45, 2, 9, 13, 32];

// we can use any sorting algorithms to sort array
// Merge Sort

function merge(left, right) {
  let sortedArr = new Array();

  while (left.length && right.length) {
    if (left[0] >= right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

function mergeSort(arr) {
  let n = arr.length;
  let mid = parseInt(n / 2);

  if (n <= 1) {
    return arr;
  }

  let left = arr.splice(0, mid);
  let right = arr;

  return merge(mergeSort(left), mergeSort(right));
}

// by using lambda function we can sort the given array either in Asc or Desc

// arr.sort((a, b) => {
//   return b - a;
// });

console.log(mergeSort(arr));
