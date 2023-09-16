export const swap = <T>(
  array: T[],
  sourceIndex: number,
  destinationIndex: number,
): void => {
  const temp = array[sourceIndex];
  array[sourceIndex] = array[destinationIndex];
  array[destinationIndex] = temp;
};

export const partition = <T>(
  array: T[],
  left: number,
  right: number,
): number => {
  const pivotValue = array[right];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex++);
    }
  }

  swap(array, right, partitionIndex);
  return partitionIndex;
};

/**
 * Sorts the given array in ascending order using the Quick Sort algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @param {number} [left=0] - The left index of the subarray to be sorted.
 * @param {number} [right=array.length-1] - The right index of the subarray to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n log n) - Where 'n' is the number of elements in the array.
 */
export const quickSort = <T>(
  array: T[],
  left = 0,
  right = array.length - 1,
): T[] => {
  if (left >= right) return array;

  const pivotIndex = partition(array, left, right);
  quickSort(array, left, pivotIndex - 1);
  quickSort(array, pivotIndex + 1, right);

  return array;
};
