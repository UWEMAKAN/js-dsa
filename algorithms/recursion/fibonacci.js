function fibonacciIterative(n) {
  let nMinus2 = 0;
  let nMinus1 = 1;
  if (n === 0) return nMinus2;
  if (n === 1) return nMinus1;
  for (let i = 2; i < n; i++) {
    const sum = nMinus1 + nMinus2;
    nMinus2 = nMinus1;
    nMinus1 = sum;
  }
  return nMinus1 + nMinus2;
}

function fibonacciRecursive(n) {
  if (n < 2) return n;
  n--;
  return fibonacciRecursive(n) + fibonacciRecursive(n - 1);
}

console.log(fibonacciIterative(8));
console.log(fibonacciRecursive(8));