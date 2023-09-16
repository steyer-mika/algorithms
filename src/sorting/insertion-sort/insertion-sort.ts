/**
 * Sorts the given array in ascending order using the Insertion Sort algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n^2) - Where 'n' is the number of elements in the array.
 */
export const insertionSort = <T>(array: T[]): T[] => {
  for (let i = 1; i < array.length; i++) {
    const current = array[i];

    let j = i - 1;

    while (j > -1 && current < array[j]) {
      array[j + 1] = array[j];
      j--;
    }

    array[j + 1] = current;
  }

  return array;
};
