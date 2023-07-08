import { Node } from "./node";

describe("Binary Tree Node", () => {
  it("should access data", () => {
    const node = new Node(1);

    expect(node.data).toEqual(1);
  });

  it("should access left node", () => {
    const node = new Node(1, 2);

    expect(node.leftNode).toEqual(2);
  });

  it("should access right node", () => {
    const node = new Node(1, 2, 3);

    expect(node.rightNode).toEqual(3);
  });

  it("should initialize left node to null", () => {
    const node = new Node(1);

    expect(node.leftNode).toEqual(null);
  });

  it("should initialize right node to null", () => {
    const node = new Node(1);

    expect(node.rightNode).toEqual(null);
  });
});
