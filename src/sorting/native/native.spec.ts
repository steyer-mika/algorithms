import { nativeSort } from './native';

describe('nativeSort', () => {
  it('should sort an empty array', () => {
    const inputArray: number[] = [];
    const sortedArray = nativeSort(inputArray);
    expect(sortedArray).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const inputArray = [42];
    const sortedArray = nativeSort(inputArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should sort an array with multiple elements in ascending order', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = nativeSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should sort an array with multiple elements in descending order', () => {
    const inputArray = [9, 7, 5, 3, 1];
    const sortedArray = nativeSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should preserve the original array', () => {
    const inputArray = [5, 3, 9, 1, 7];
    nativeSort([...inputArray]);
    // Check that the original array is not modified
    expect(inputArray).toEqual([5, 3, 9, 1, 7]);
  });

  it('should sort an array using a custom comparison function', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const customCompare = (a: number, b: number): number => b - a; // Sort in descending order
    const sortedArray = nativeSort([...inputArray], customCompare);
    expect(sortedArray).toEqual([9, 7, 5, 3, 1]);
  });
});
