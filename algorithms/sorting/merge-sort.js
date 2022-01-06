function mergeSort(arr) {
  const length = arr.length;
  if (arr.length <= 1) return arr;
  const middle = Math.floor(length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  const arr = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      arr.push(left[i]);
      i++;
    } else if (left[i] > right[j]) {
      arr.push(right[j]);
      j++;
    } else {
      arr.push(arr[i], arr[j]);
      i++;
      j++;
    }
  }
  if (i < left.length) {
    arr.push(...left.slice(i));
  }
  if (j < right.length) {
    arr.push(...right.slice(j));
  }
  return arr;
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(mergeSort(arr));

// const arr1 = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// console.log(mergeSort(arr1));
