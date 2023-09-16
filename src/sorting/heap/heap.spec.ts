import { heapSort, swap, siftDown, heapify } from './heap';

describe('swap', () => {
  it('should swap two elements in an array', () => {
    const inputArray = [1, 2, 3, 4, 5];
    swap(inputArray, 1, 3);
    expect(inputArray).toEqual([1, 4, 3, 2, 5]);
  });

  it('should do nothing for the same indices', () => {
    const inputArray = [1, 2, 3, 4, 5];
    swap(inputArray, 1, 1);
    expect(inputArray).toEqual([1, 2, 3, 4, 5]);
  });
});

describe('siftDown', () => {
  it('should correctly sift down an element', () => {
    const inputArray = [3, 5, 1, 4, 2];
    siftDown(inputArray, 0, 4);
    expect(inputArray).toEqual([5, 4, 1, 3, 2]);
  });
});

describe('heapify', () => {
  it('should correctly heapify an array', () => {
    const inputArray = [3, 5, 1, 4, 2];
    heapify(inputArray, inputArray.length);
    expect(inputArray).toEqual([5, 4, 1, 3, 2]);
  });
});

describe('heapSort', () => {
  it('should sort an empty array', () => {
    const inputArray: number[] = [];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([]);
  });

  it('should sort an array with one element', () => {
    const inputArray = [42];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([42]);
  });

  it('should handle an array with two elements', () => {
    const twoElementsArray = [2, 1];
    const sortedArray = heapSort(twoElementsArray);
    expect(sortedArray).toEqual([1, 2]);
  });

  it('should sort an array with multiple elements in ascending order', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should sort an array with multiple elements in descending order', () => {
    const inputArray = [9, 7, 5, 3, 1];
    const sortedArray = heapSort(inputArray);
    expect(sortedArray).toEqual([1, 3, 5, 7, 9]);
  });

  it('should not preserve the original array', () => {
    const inputArray = [5, 3, 9, 1, 7];
    const sortedArray = heapSort(inputArray);
    expect(inputArray).toEqual(sortedArray);
  });
});
