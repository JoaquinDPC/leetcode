function isPalindrome(x: number): boolean {
  // If negative or ends in 0 then is not a palindrome
  if (x < 0 || x % 10 === 0) {
    return false;
  }

  let inverted: number = null!;
  let pointer = 0;

  // If number is not divisible by pointer then we finish the iteration
  while (Math.floor(x / 10 ** pointer) > 0) {
    // Get last number
    const lastDigit = Math.floor(x / 10 ** pointer) % 10;

    // Move pointer one step
    pointer++;

    // Accumulate the inverted number using maths
    inverted = inverted ? inverted * 10 + lastDigit : lastDigit;
  }

  return x === inverted;
}

function isPalindrome2(x: number): boolean {
  // If negative or ends in 0 then is not a palindrome
  if (x < 0 || x % 10 === 0) {
    return false;
  }

  let inverted: number = null!;
  let pointer = 0;

  // If number is not divisible by pointer then we finish the iteration
  while (Math.floor(x / 10 ** pointer) > 0) {
    // Get last number
    const lastDigit = Math.floor(x / 10 ** pointer) % 10;

    // Move pointer one step
    pointer++;

    // Accumulate the inverted number using maths
    inverted = inverted ? inverted * 10 + lastDigit : lastDigit;
  }

  return x === inverted;
}

console.time('FUNCION 1.0');
console.log('CASE 1: ', isPalindrome(121)); // true
console.log('CASE 2: ', isPalindrome(-121)); // false
console.log('CASE 3: ', isPalindrome(101)); // true
console.log('CASE 4: ', isPalindrome(9999)); // true
console.log('CASE 5: ', isPalindrome(190022)); // false
console.log('CASE 6: ', isPalindrome(10001)); // true
console.log('CASE 7: ', isPalindrome(7887)); // true
console.log('CASE 8: ', isPalindrome(7880)); // true
console.timeEnd('FUNCION 1.0');


