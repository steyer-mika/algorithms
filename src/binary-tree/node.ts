export class Node<T> {
  public readonly data: T;
  public readonly leftNode: Node<T> | null;
  public readonly rightNode: Node<T> | null;

  constructor(
    data: T,
    leftNode: Node<T> | null = null,
    rightNode: Node<T> | null = null
  ) {
    this.data = data;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}
