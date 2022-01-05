function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    const val1 = arr1[i];
    const val2 = arr2[j];
    if (val1 < val2) {
      result.push(val1);
      i++;
    } else if (val1 > val2) {
      result.push(val2);
      j++;
    } else {
      result.push(val1, val2);
      i++;
      j++;
    }
  }
  if (i < arr1.length) {
    result.push(...arr1.slice(i));
  }
  if (j < arr2.length) {
    result.push(...arr2.slice(j));
  }
  return result;
}

const arr1 = [0, 3, 4, 5, 31];
const arr2 = [4, 5, 6, 20, 30, 33, 35, 50];
const result = mergeSortedArrays(arr1, arr2);
console.log(result);