/**
 * Sorts the given array in ascending order using the Selection Sort algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n^2) - Where 'n' is the number of elements in the array.
 */
export const selectionSort = <T>(array: T[]): T[] => {
  for (let i = 0; i < array.length; i++) {
    let min = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
};
