import { TreeNode } from "./tree-node";

describe("Binary Tree Node", () => {
  it("should access value", () => {
    const node = new TreeNode(1);

    expect(node.value).toEqual(1);
  });

  it("should access left node", () => {
    const leftNode = new TreeNode(2);
    const node = new TreeNode(1, leftNode);

    expect(node.leftNode?.value).toEqual(2);
  });

  it("should access right node", () => {
    const rightNode = new TreeNode(2);
    const node = new TreeNode(1, undefined, rightNode);

    expect(node.rightNode?.value).toEqual(2);
  });

  it("should initialize left node to null", () => {
    const node = new TreeNode(1);

    expect(node.leftNode).toEqual(null);
  });

  it("should initialize right node to null", () => {
    const node = new TreeNode(1);

    expect(node.rightNode).toEqual(null);
  });
});
