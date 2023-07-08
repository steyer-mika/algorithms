export class Node<T> {
  public readonly value: T;
  public readonly leftNode: Node<T> | null;
  public readonly rightNode: Node<T> | null;

  constructor(
    value: T,
    leftNode: Node<T> | null = null,
    rightNode: Node<T> | null = null
  ) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}
