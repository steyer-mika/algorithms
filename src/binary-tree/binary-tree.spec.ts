import { BinaryTree } from './binary-tree';

describe('BinaryTree', () => {
  let tree: BinaryTree<number>;

  beforeEach(() => {
    tree = new BinaryTree<number>();
  });

  it('should insert a value as the root', () => {
    tree.insert(5);

    expect(tree.root?.value).toEqual(5);
  });

  it('should insert a value as the left node', () => {
    tree.insert(5);
    tree.insert(2);

    expect(tree.root?.leftNode?.value).toEqual(2);
  });

  it('should insert a value as the right node', () => {
    tree.insert(5);
    tree.insert(7);

    expect(tree.root?.rightNode?.value).toEqual(7);
  });

  it('should get the minimum value', () => {
    tree.insert(5);
    tree.insert(2);
    tree.insert(8);
    tree.insert(6);
    tree.insert(2);
    tree.insert(9);
    tree.insert(4);

    expect(tree.getMin()).toEqual(2);
  });

  it('should get the maximum value', () => {
    tree.insert(5);
    tree.insert(2);
    tree.insert(8);
    tree.insert(6);
    tree.insert(2);
    tree.insert(9);
    tree.insert(4);

    expect(tree.getMax()).toEqual(9);
  });

  it('should check if a value exists in the tree', () => {
    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    expect(tree.has(3)).toEqual(true);
    expect(tree.has(6)).toEqual(false);
  });

  it('should remove the root node', () => {
    tree.insert(5);
    tree.insert(4);
    tree.insert(3);
    tree.insert(2);
    tree.remove(5);

    expect(tree.has(5)).toEqual(false);
  });

  it('should remove the root node and set a new root', () => {
    tree.insert(2);
    tree.remove(2);

    expect(tree.root).toEqual(null);
  });

  it('should remove the root and set the next node as the new root', () => {
    tree.insert(5);
    tree.insert(2);
    tree.insert(7);
    tree.insert(8);
    tree.remove(5);

    expect(tree.root?.value).toEqual(7);
  });

  it('should remove a node and replace it with the next node in the inorder traversal', () => {
    tree.insert(8);
    tree.insert(3);
    tree.insert(14);
    tree.insert(6);
    tree.insert(1);
    tree.insert(4);
    tree.insert(7);
    tree.remove(3);

    expect(tree.root?.leftNode?.value).toEqual(4);
  });
});
