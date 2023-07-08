export class TreeNode<T> {
  public readonly value: T;
  public readonly leftNode: TreeNode<T> | null;
  public readonly rightNode: TreeNode<T> | null;

  constructor(
    value: T,
    leftNode: TreeNode<T> | null = null,
    rightNode: TreeNode<T> | null = null
  ) {
    this.value = value;
    this.leftNode = leftNode;
    this.rightNode = rightNode;
  }
}
