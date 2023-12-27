function romanToInt(s: string): number {
  const numberExchange: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result: number = 0;

  const arrayOfRomanNumbers = s.split('');

  for (let index = 0; index < arrayOfRomanNumbers.length; index++) {
    const currentNumberValue = numberExchange[arrayOfRomanNumbers[index]];
    const nextNumberValue = numberExchange[arrayOfRomanNumbers[index + 1]];

    if (currentNumberValue < nextNumberValue) {
      result += nextNumberValue - currentNumberValue;

      index++;
      continue;
    }

    result += currentNumberValue;
  }

  return result;
}

console.time('FUNCION 2.0');
console.log('CASE 1: ', romanToInt('III')); // 3
console.log('CASE 2: ', romanToInt('IV')); // 4
console.log('CASE 3: ', romanToInt('LVIII')); // 58
console.log('CASE 4: ', romanToInt('MCMXCIV')); // 1994
console.timeEnd('FUNCION 2.0');
