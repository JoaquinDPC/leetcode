function twoSum(nums: number[], target: number): number[] {
  return nums.reduce(
    (acc, element, index) => {
      for (let i = index + 1; i < nums.length; i++) {
        const matchSum = element + nums[i] === target;

        if (matchSum) {
          acc = [index, i];
          nums.splice(1);
        }
      }

      return acc;
    },
    [0, 0]
  );
}

const twoSum2 = (nums: number[], target: number) => {
  // Set to save partial search
  const partialMatches: { [x: string]: number } = {};

  // Iterate the array
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];

    // Check if the current number already has their pair
    if (partialMatches[element] !== undefined) {
      return [partialMatches[element], index];
    }

    // If not calculate delta and set the partial match
    const partial = target - element;
    partialMatches[partial] = index;
  }
};

console.time('FUNCION 1.0');
console.log('CASE 1: ', twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log('CASE 2: ', twoSum([3, 2, 4], 6)); // [1, 2]
console.log('CASE 3: ', twoSum([3, 3], 6)); // [0, 1]
console.timeEnd('FUNCION 1.0');

console.time('FUNCION 2.0');
console.log('CASE 1: ', twoSum2([2, 7, 11, 15], 9)); // [0, 1]
console.log('CASE 2: ', twoSum2([3, 2, 4], 6)); // [1, 2]
console.log('CASE 3: ', twoSum2([3, 3], 6)); // [0, 1]
console.timeEnd('FUNCION 2.0');
