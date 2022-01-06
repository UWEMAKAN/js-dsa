function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        const temp = arr.slice(j, i);
        arr[j] = arr[i];
        arr.splice(j + 1, temp.length, ...temp);
        break;
      }
    }
  }
  return arr;
}

const arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(insertionSort(arr));