import { swap, partition, quickSort } from './quick-sort';

describe('swap function', () => {
  it('should swap elements in the array correctly', () => {
    const array = [1, 2, 3, 4, 5];
    swap(array, 1, 3);
    expect(array).toEqual([1, 4, 3, 2, 5]);
  });
});

describe('partition function', () => {
  it('should partition the array correctly', () => {
    const array = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
    const pivotIndex = partition(array, 0, array.length - 1);

    // Elements to the left of pivotIndex should be less than the pivot
    const leftPartition = array.slice(0, pivotIndex);
    const pivotValue = array[pivotIndex]; // Get the pivot value
    expect(leftPartition.every((value) => value < pivotValue)).toBe(true);

    // Elements to the right of pivotIndex should be greater than or equal to the pivot
    const rightPartition = array.slice(pivotIndex + 1);
    expect(rightPartition.every((value) => value >= pivotValue)).toBe(true);
  });
});

describe('quickSort function', () => {
  it('should sort an array in ascending order', () => {
    const unsortedArray = [6, 1, 3, 2, 5, 4];
    quickSort(unsortedArray);
    expect(unsortedArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an empty array', () => {
    const emptyArray: number[] = [];
    quickSort(emptyArray);
    expect(emptyArray).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const singleElementArray = [42];
    quickSort(singleElementArray);
    expect(singleElementArray).toEqual([42]);
  });

  it('should handle an array with two elements', () => {
    const twoElementsArray = [2, 1];
    quickSort(twoElementsArray);
    expect(twoElementsArray).toEqual([1, 2]);
  });

  it('should handle already sorted arrays', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6];
    quickSort(sortedArray);
    expect(sortedArray).toEqual(sortedArray);
  });

  it('should handle arrays with duplicate elements', () => {
    const unsortedArray = [6, 1, 3, 2, 5, 4, 1, 6];
    quickSort(unsortedArray);
    expect(unsortedArray).toEqual([1, 1, 2, 3, 4, 5, 6, 6]);
  });

  it('should not preserve the original array', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = quickSort(inputArray);
    expect(inputArray).toEqual(sortedArray);
  });
});
