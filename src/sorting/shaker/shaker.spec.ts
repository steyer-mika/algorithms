import { shakerSort } from './shaker';

describe('shakerSort', () => {
  it('should sort an empty array', () => {
    const inputArray: number[] = [];
    const sortedArray = shakerSort(inputArray);
    expect(sortedArray).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const inputArray = [42];
    const sortedArray = shakerSort(inputArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should sort an array with multiple elements in ascending order', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = shakerSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should sort an array with multiple elements in descending order', () => {
    const inputArray = [9, 7, 5, 3, 1];
    const sortedArray = shakerSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should not preserve the original array', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = shakerSort(inputArray);
    expect(inputArray).toEqual(sortedArray);
  });
});
