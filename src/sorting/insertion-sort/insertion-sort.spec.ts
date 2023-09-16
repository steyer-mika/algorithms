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

  it('should handle an array with two elements', () => {
    const twoElementsArray = [2, 1];
    const sortedArray = insertionSort(twoElementsArray);
    expect(sortedArray).toEqual([1, 2]);
  });

  it('should sort an array with multiple elements', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = insertionSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should not preserve the original array', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = insertionSort(inputArray);
    expect(inputArray).toEqual(sortedArray);
  });
});
