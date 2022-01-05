function reverseStringRecursive(str) {
  if (str.length < 2) return str;
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

console.log(reverseStringRecursive('Total Recall'));