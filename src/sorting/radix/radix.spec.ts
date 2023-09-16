import { radixSort } from './radix';

describe('radixSort', () => {
  it('should sort an empty array', () => {
    const inputArray: number[] = [];
    const sortedArray = radixSort(inputArray);
    expect(sortedArray).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const inputArray = [42];
    const sortedArray = radixSort(inputArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should sort an array with multiple elements in ascending order', () => {
    const inputArray = [53, 20, 8, 321, 100];
    const sortedArray = radixSort(inputArray);
    expect(sortedArray).toEqual([8, 20, 53, 100, 321]);
  });

  it('should sort an array with multiple elements containing duplicate values', () => {
    const inputArray = [53, 20, 8, 321, 100, 8, 100];
    const sortedArray = radixSort(inputArray);
    expect(sortedArray).toEqual([8, 8, 20, 53, 100, 100, 321]);
  });

  it('should sort an array with multiple elements in descending order', () => {
    const inputArray = [321, 100, 53, 20, 8];
    const sortedArray = radixSort(inputArray);
    expect(sortedArray).toEqual([8, 20, 53, 100, 321]);
  });

  it('should not preserve the original array', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = radixSort(inputArray);
    expect(inputArray).toEqual(sortedArray);
  });
});
