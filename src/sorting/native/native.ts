/**
 * Sorts the given array in ascending order using the native JavaScript Array.sort() method.
 * This function may mutate the original array, depending on the behavior of the sort method.
 *
 * @param {T[]} array - The array to be sorted.
 * @param {((a: T, b: T) => number) | undefined} [compareFn] - Optional comparison function.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(n log n) - The time complexity depends on the implementation of the native sort function.
 */
export const nativeSort = <T>(
  array: T[],
  compareFn?: ((a: T, b: T) => number) | undefined,
): T[] => {
  return array.sort(compareFn);
};
