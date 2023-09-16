import { gnomeSort, swap } from './gnome';

describe('swap function', () => {
  it('should swap elements in the array correctly', () => {
    const array = [1, 2, 3, 4, 5];
    swap(array, 1, 3);
    expect(array).toEqual([1, 4, 3, 2, 5]);
  });
});

describe('gnomeSort', () => {
  it('should sort an empty array', () => {
    const inputArray: number[] = [];
    const sortedArray = gnomeSort(inputArray);
    expect(sortedArray).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const inputArray = [42];
    const sortedArray = gnomeSort(inputArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should handle an array with two elements', () => {
    const twoElementsArray = [2, 1];
    const sortedArray = gnomeSort(twoElementsArray);
    expect(sortedArray).toEqual([1, 2]);
  });

  it('should sort an array with multiple elements in ascending order', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = gnomeSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should sort an array with multiple elements in descending order', () => {
    const inputArray = [9, 7, 5, 3, 1];
    const sortedArray = gnomeSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should not preserve the original array', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = gnomeSort(inputArray);
    expect(inputArray).toEqual(sortedArray);
  });
});
