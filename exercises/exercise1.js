/**
 * Given 2 arrays, create a function - containsCommonItems -
 * that let's you know (true/false),
 * whether these 2 arrays contain any common items.
 * Example false
 * const arr1 = ['a', 'b', 'c', 'x'];
 * const arr2 = ['z', 'y', 'i'];
 * containsCommonItems(arr1, arr2); // false
 * 
 * Example true
 * const arr1 = ['a', 'b', 'c', 'x'];
 * const arr2 = ['z', 'y', 'x'];
 * containsCommonItems(arr1, arr2); // true
 */

// A naive solution
// O (a * b) => O(n^2)
function containsCommonItemsNaive(arr1, arr2) {
  // loop over arr1 and compare each element
  // of arr1 with elements of arr2
  // in a nested loop over arr2
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

function containsCommonItems(arr1, arr2) {
  // create a Javasript set with elements of arr1
  const set = new Set(arr1);
  // loop over elements of arr2 and lookup each value in the set of arr1
  for (const item of arr2) {
    if (set.has(item)) return true;
  }
  return false;
}

const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'x'];

const result = containsCommonItems(arr1, arr2);
console.log(result);

