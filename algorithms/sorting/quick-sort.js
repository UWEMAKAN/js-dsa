function quickSort(arr, startIndex, endIndex) {
  if (startIndex < endIndex) {
    const pivot = endIndex;
    const partitionIndex = partition(arr, pivot, startIndex, endIndex);
    quickSort(arr, startIndex, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, endIndex);
  }
  return arr;
}

function partition(arr, pivot, startIndex, endIndex) {
  const pivotValue = arr[pivot];
  let partitionIndex = startIndex;
  for (let i = startIndex; i < endIndex; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, partitionIndex, pivot);
  return partitionIndex;
}

function swap(arr, firstIndex, secondIndex) {
  const temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

const arr = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
quickSort(arr, 0, arr.length - 1);