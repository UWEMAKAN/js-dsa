const arr1 = [1, 2, 3, 9], sum1 = 8;
const arr2 = [1, 2, 4, 4], sum2 = 8;

function hasPairNaive(arr, sum) {
  // a naive solution would be to use a nested loop
  // to check whether a given element has a complement
  // in the rest of the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }
  return false;
}

function hasPairSorted(arr, sum) {
  // since the value are sorted,
  // we can pick pairs at the beginning and the end
  // and work our way up from the smallest number
  // while working our way down from the largest number
  // and add the pairs and compare against the given sum
  let low = 0;
  let high = arr.length - 1;

  while(low < high) {
    const value = arr[low] + arr[high];
    if (value === sum) return true;
    if (value < sum) low++;
    else high--;
  }
  return false;
}

function hasPairUnsorted(arr, sum) {
  // if the input is not sorted
  // we can a hashset of complements for the values we have seen
  // and lookup the complement of subsequent values in the hashset

  const compSet = new Set(); // complements
  for (let value of arr) {
    // if we find the current value in the complementSet,
    // then it means we have found a pair,
    // because the complementSet contains the complements of
    // previously seen values
    if (compSet.has(value)) return true;
    // if we don't find the value in the complementSet
    // we simply add the complement to the complementSet
    else compSet.add(sum - value);
  }
  return false;
}

const result1 = hasPairUnsorted(arr1, sum1);
console.log(`Answer 1: ${result1}`);

const result2 = hasPairUnsorted(arr2, sum2);
console.log(`Answer 2: ${result2}`);