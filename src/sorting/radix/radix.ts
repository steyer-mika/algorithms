/**
 * Sorts the given array in ascending order using the Radix Sort algorithm.
 * This function mutates the original array.
 *
 * @param {number[]} array - The array of non-negative integers to be sorted.
 * @returns {number[]} - The sorted array.
 *
 * @complexity O(n * k) - Where 'n' is the number of elements in the array and 'k' is the number of digits in the maximum number.
 */
export const radixSort = (array: number[]): number[] => {
  // Find the maximum number to determine the number of digits
  const max = Math.max(...array);
  const maxDigits = Math.floor(Math.log10(max)) + 1;

  // Perform counting sort for each digit position
  for (let digitPlace = 1; digitPlace <= maxDigits; digitPlace++) {
    const countingArray = new Array<number>(10).fill(0);

    // Count occurrences of each digit
    for (let i = 0; i < array.length; i++) {
      const digit = Math.floor((array[i] / Math.pow(10, digitPlace - 1)) % 10);
      countingArray[digit]++;
    }

    // Calculate cumulative counts
    for (let i = 1; i < countingArray.length; i++) {
      countingArray[i] += countingArray[i - 1];
    }

    // Build the sorted array
    const sortedArray = new Array<number>(array.length);
    for (let i = array.length - 1; i >= 0; i--) {
      const digit = Math.floor((array[i] / Math.pow(10, digitPlace - 1)) % 10);
      const index = countingArray[digit] - 1;
      sortedArray[index] = array[i];
      countingArray[digit]--;
    }

    // Copy the sorted array back to the original array
    for (let i = 0; i < array.length; i++) {
      array[i] = sortedArray[i];
    }
  }

  return array;
};
