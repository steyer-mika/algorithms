export const sorted = <T>(array: T[]): boolean => {
  let sorted = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] < array[i]) {
      sorted = false;
    }
  }

  return sorted;
};

export const shuffle = <T>(array: T[]): T[] => {
  let m = array.length;
  let t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
};

/**
 * Sorts the given array in ascending order using the Bogo Sort algorithm.
 * This function mutates the original array.
 *
 * @param {T[]} array - The array to be sorted.
 * @returns {T[]} - The sorted array.
 *
 * @template T
 * @complexity O(∞) - Random Complexity
 */
export const bogoSort = <T>(array: T[]): T[] => {
  while (!sorted(array)) {
    array = shuffle(array);
  }

  return array;
};
