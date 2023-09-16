/**
 * Sorts the given array in ascending order using the Bubble Sort algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n^2) - Where 'n' is the number of elements in the array.
 */
export const bubbleSort = <T>(array: T[]): T[] => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
};
