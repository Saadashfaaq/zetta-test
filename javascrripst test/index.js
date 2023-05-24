const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Step 1: Sort the array in ascending order
  const sortedInput = input.sort((a, b) => a - b);

  // Step 2: Check if the length of the array is odd or even
  const length = sortedInput.length;
  const middleIndex = Math.floor(length / 2);

  if (length % 2 === 1) {
    // Odd length
    return sortedInput[middleIndex];
  } else {
    // Even length
    const middleValuesSum = sortedInput[middleIndex - 1] + sortedInput[middleIndex];
    return middleValuesSum / 2;
  }
}

console.log(result(input)); // Output: 7