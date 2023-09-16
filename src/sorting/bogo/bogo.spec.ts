import { sorted, shuffle, bogoSort } from './bogo';

describe('sorted function', () => {
  it('should return true for a sorted array', () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(sorted(sortedArray)).toBe(true);
  });

  it('should return false for an unsorted array', () => {
    const unsortedArray = [5, 2, 1, 4, 3];
    expect(sorted(unsortedArray)).toBe(false);
  });

  it('should return true for an empty array', () => {
    const emptyArray: number[] = [];
    expect(sorted(emptyArray)).toBe(true);
  });

  it('should return true for an array with a single element', () => {
    const singleElementArray = [42];
    expect(sorted(singleElementArray)).toBe(true);
  });
});

describe('shuffle function', () => {
  it('should shuffle the array', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle([...originalArray]);
    // Verify that the shuffled array is not the same as the original
    expect(shuffledArray).not.toEqual(originalArray);
    // Verify that both arrays contain the same elements
    expect(shuffledArray.sort()).toEqual(originalArray.sort());
  });

  it('should handle an empty array', () => {
    const emptyArray: number[] = [];
    const shuffledArray = shuffle(emptyArray);
    expect(shuffledArray).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const singleElementArray = [42];
    const shuffledArray = shuffle(singleElementArray);
    expect(shuffledArray).toEqual(singleElementArray);
  });
});

describe('bogoSort function', () => {
  it('should sort an array in ascending order', () => {
    const unsortedArray = [6, 1, 3, 2, 5, 4];
    const sortedArray = bogoSort([...unsortedArray]);
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should handle an empty array', () => {
    const emptyArray: number[] = [];
    const sortedArray = bogoSort(emptyArray);
    expect(sortedArray).toEqual([]);
  });

  it('should handle an array with a single element', () => {
    const singleElementArray = [42];
    const sortedArray = bogoSort(singleElementArray);
    expect(sortedArray).toEqual(singleElementArray);
  });

  it('should handle an array with two elements', () => {
    const twoElementsArray = [2, 1];
    const sortedArray = bogoSort(twoElementsArray);
    expect(sortedArray).toEqual([1, 2]);
  });

  it('should handle already sorted arrays', () => {
    const sortedArray = [1, 2, 3, 4, 5, 6];
    const resultArray = bogoSort([...sortedArray]);
    expect(resultArray).toEqual(sortedArray);
  });
});
