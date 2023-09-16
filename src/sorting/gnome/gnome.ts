export const swap = <T>(
  array: T[],
  sourceIndex: number,
  destinationIndex: number,
): void => {
  const temp = array[sourceIndex];
  array[sourceIndex] = array[destinationIndex];
  array[destinationIndex] = temp;
};

/**
 * Sorts the given array in ascending order using the Gnome Sort algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n^2) - Where 'n' is the number of elements in the array.
 */
export const gnomeSort = <T>(array: T[]): T[] => {
  let i = 1; // start at 1 because we're comparing i-1 to i
  let j = 2; // start at 2 because we're comparing i-1 to i
  while (i < array.length) {
    if (array[i - 1] <= array[i]) {
      i = j;
      j++;
    } else {
      swap(array, i, i - 1);
      i--;
      if (i === 0) {
        i = j;
        j++;
      }
    }
  }
  return array;
};
