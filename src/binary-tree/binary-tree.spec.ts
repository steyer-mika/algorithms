import { BinaryTree } from "./binary-tree";

describe("Binary Tree", () => {
  it("should insert value", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);

    expect(tree.root?.value).toEqual(5);
  });

  it("should insert value left node", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);
    tree.insert(2);

    expect(tree.root?.leftNode?.value).toEqual(2);
  });

  it("should insert value right node", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);
    tree.insert(7);

    expect(tree.root?.rightNode?.value).toEqual(7);
  });

  it("should get min value", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);
    tree.insert(2);
    tree.insert(8);
    tree.insert(6);
    tree.insert(2);
    tree.insert(9);
    tree.insert(4);

    expect(tree.getMin()).toEqual(2);
  });

  it("should get max value", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);
    tree.insert(2);
    tree.insert(8);
    tree.insert(6);
    tree.insert(2);
    tree.insert(9);
    tree.insert(4);

    expect(tree.getMax()).toEqual(9);
  });

  it("should have value", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    expect(tree.has(3)).toEqual(true);
  });

  it("should not have value", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);
    tree.insert(3);
    tree.insert(7);

    expect(tree.has(6)).toEqual(false);
  });

  it("should remove root", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);
    tree.insert(4);

    tree.insert(3);
    tree.insert(2);
    tree.remove(7);

    tree.remove(3);

    expect(tree.has(3)).toEqual(false);
  });

  it("should remove root", () => {
    const tree = new BinaryTree<number>();

    tree.insert(2);

    tree.remove(2);

    expect(tree.root).toEqual(null);
  });

  it("should remove & set next root", () => {
    const tree = new BinaryTree<number>();

    tree.insert(5);
    tree.insert(2);
    tree.insert(7);
    tree.insert(8);

    tree.remove(5);

    expect(tree.root?.value).toEqual(7);
  });

  it("should remove & replace next node", () => {
    const tree = new BinaryTree<number>();

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
