/**
 * Sorts the given array in ascending order using the Shaker Sort (Cocktail Sort) algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n^2) - Where 'n' is the number of elements in the array.
 */
export const shakerSort = <T>(array: T[]): T[] => {
  let isSorted = true;

  while (isSorted) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;

    isSorted = false;

    for (let j = array.length - 1; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
        isSorted = true;
      }
    }
  }

  return array;
};
