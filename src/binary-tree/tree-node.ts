export class TreeNode<T> {
  public value: T;
  public leftNode: TreeNode<T> | null;
  public rightNode: TreeNode<T> | null;

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
