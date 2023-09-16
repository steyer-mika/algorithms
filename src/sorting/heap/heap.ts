export const swap = <T>(
  array: T[],
  sourceIndex: number,
  destinationIndex: number,
): void => {
  const temp = array[sourceIndex];
  array[sourceIndex] = array[destinationIndex];
  array[destinationIndex] = temp;
};

export const siftDown = <T>(array: T[], start: number, end: number): void => {
  let child, toSwap;

  while (start * 2 + 1 <= end) {
    child = start * 2 + 1;
    toSwap = start;
    if (array[toSwap] < array[child]) {
      toSwap = child;
    }
    if (child + 1 <= end && array[toSwap] < array[child + 1]) {
      toSwap = child + 1;
    }
    if (toSwap === start) {
      return;
    } else {
      swap(array, start, toSwap);
      start = toSwap;
    }
  }
};

export const heapify = <T>(array: T[], len: number): void => {
  let mid = Math.floor((len - 2) / 2);
  while (mid >= 0) {
    siftDown(array, mid--, len - 1);
  }
};

/**
 * Sorts the given array in ascending order using the Heap Sort algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n log n) - Where 'n' is the number of elements in the array.
 */
export const heapSort = <T>(array: T[]): T[] => {
  const len = array.length;
  let end = len - 1;
  heapify(array, len);
  while (end > 0) {
    swap(array, end--, 0);
    siftDown(array, 0, end);
  }
  return array;
};
