import { merge, mergeSort } from './merge-sort';

describe('merge function', () => {
  it('should merge two sorted arrays correctly', () => {
    const left = [1, 3, 5];
    const right = [2, 4, 6];
    const merged = merge(left, right);
    expect(merged).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should merge arrays with different lengths', () => {
    const left = [1, 3, 5];
    const right = [2, 4];
    const merged = merge(left, right);
    expect(merged).toEqual([1, 2, 3, 4, 5]);
  });

  it('should merge empty arrays', () => {
    const left: number[] = [];
    const right: number[] = [];
    const merged = merge(left, right);
    expect(merged).toEqual([]);
  });

  it('should merge when one array is empty', () => {
    const left = [1, 3, 5];
    const right: number[] = [];
    const merged = merge(left, right);
    expect(merged).toEqual([1, 3, 5]);
  });
});

describe('mergeSort function', () => {
  it('should sort an array in ascending order', () => {
    const unsortedArray = [6, 1, 3, 2, 5, 4];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an empty array', () => {
    const emptyArray: number[] = [];
    const sortedArray = mergeSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const singleElementArray = [42];
    const sortedArray = mergeSort(singleElementArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should handle an array with two elements', () => {
    const twoElementsArray = [2, 1];
    const sortedArray = mergeSort(twoElementsArray);
    expect(sortedArray).toEqual([1, 2]);
  });

  it('should handle already sorted arrays', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6];
    const resultArray = mergeSort(sortedArray);
    expect(resultArray).toEqual(sortedArray);
  });

  it('should handle arrays with duplicate elements', () => {
    const unsortedArray = [6, 1, 3, 2, 5, 4, 1, 6];
    const sortedArray = mergeSort(unsortedArray);
    expect(sortedArray).toEqual([1, 1, 2, 3, 4, 5, 6, 6]);
  });
});
