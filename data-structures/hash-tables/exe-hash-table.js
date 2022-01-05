// Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// it should return 2

// Given an array = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// it should return 1

// Given an array = [2, 3, 4, 5];
// it should return null

function firstRecurringNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    const prevSet = new Set();
    const firstOccurrence = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const secondOccurrence = arr[j];
      if (firstOccurrence !== secondOccurrence) {
        if (prevSet.has(secondOccurrence)) {
          break;
        }
        prevSet.add(secondOccurrence);
      } else {
        return firstOccurrence;
      }
    }
  }
  return null;
}

// function firstRecurringNumber(arr) {
//   const prevSet = new Set();
//   for (const item of arr) {
//     if (prevSet.has(item)) return item;
//     prevSet.add(item);
//   }
//   return null;
// }

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
const arr3 = [2, 3, 4, 5];

const result1 = firstRecurringNumber(arr1);
const result2 = firstRecurringNumber(arr2);
const result3 = firstRecurringNumber(arr3);

console.log('result1', result1);
console.log('result2', result2);
console.log('result3', result3);