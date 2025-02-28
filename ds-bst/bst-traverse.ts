import { isBreakStatement } from 'typescript';
import { BinarySearchTree, TreeNode } from './lib/bst';

/**
 * Returns the values in the BST in numerical order, smallest to largest.
 */
export function traverse(bst: BinarySearchTree): number[] {
  return traverseRecursive(bst.root);
}

function traverseRecursive(node: TreeNode | undefined): number[] {
  if (node === undefined) return [];
  const allLeftNode = traverseRecursive(node.left);
  const currentValue = node.value;
  const rightNode = traverseRecursive(node.right);
  return [...allLeftNode, currentValue, ...rightNode];
}
