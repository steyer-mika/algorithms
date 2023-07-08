export class Node<T> {
  public readonly data: T;
  public readonly leftNode: T | null;
  public readonly rightNode: T | null;

  constructor(data: T, leftNode: T | null = null, rightNode: T | null = null) {
    this.data = data;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}
