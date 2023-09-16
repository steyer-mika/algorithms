export const merge = <T>(left: T[], right: T[]): T[] => {
  const array = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array.push(left[leftIndex]);
      leftIndex++;
    } else {
      array.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return array.concat(left.slice(leftIndex), right.slice(rightIndex));
};

/**
 * Sorts the given array in ascending order using the Merge Sort algorithm.
 * This function does not mutate the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n log n) - Where 'n' is the number of elements in the array.
 */
export const mergeSort = <T>(array: T[]): T[] => {
  // return new array to preserve old one
  if (array.length === 0) return [];

  // return new array to preserve old one
  if (array.length === 1) return [array[0]];

  if (array.length < 2) {
    if (array[0] < array[1]) return [array[0], array[1]];
    return [array[1], array[0]];
  }

  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
};
