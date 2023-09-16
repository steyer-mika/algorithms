/**
 * Sorts the given array in ascending order using the Shell Sort algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n^2) (worst-case), O(n log^2 n) (best-case) - Where 'n' is the number of elements in the array.
 */
export const shellSort = <T>(array: T[]): T[] => {
  const len = array.length;
  let gap = Math.floor(len / 2);

  while (gap > 0) {
    for (let i = gap; i < len; i++) {
      let j = i;
      const current = array[i];
      while (j - gap >= 0 && current < array[j - gap]) {
        array[j] = array[j - gap];
        j = j - gap;
      }
      array[j] = current;
    }
    gap = Math.floor(gap / 2);
  }
  return array;
};
