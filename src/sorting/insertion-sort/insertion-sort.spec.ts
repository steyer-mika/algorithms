import { insertionSort } from './insertion-sort';

describe('insertionSort', () => {
  it('should sort an empty array', () => {
    const inputArray: number[] = [];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const inputArray = [42];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should sort an array with multiple elements', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });
});
