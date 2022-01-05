const str = 'Hi my name is Uwem';

function reverse(str) {
  let s = '';
  if (typeof str !== 'string') return s;
  for (let i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}

const result = reverse(str);
console.log(result);

const reverse2 = str => str.split('').reverse().join('');