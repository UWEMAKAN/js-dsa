function findFactorialRecursive(number) {
  if (number === 0 || number === 1) {
    return 1;
  }
  return number * findFactorialRecursive(number - 1);
}

function findFactorialIterative(number) {
  let answer = 1;
  while (number >= 2) {
    answer *= number--;
  }
  return answer;
}

console.log(findFactorialRecursive(3));
console.log(findFactorialIterative(3));