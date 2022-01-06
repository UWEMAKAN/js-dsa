function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let index = i;
    const temp = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[index]) {
        index = j;
      }
    }
    arr[i] = arr[index];
    arr[index] = temp;
  }
  return arr;
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(selectionSort(arr));