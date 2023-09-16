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