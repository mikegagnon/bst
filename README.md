# Binary Search Trees
A mini-course in binary search trees in JS for novice programmers.

A binary search tree (BST) is an efficient recursive data structure.

## <a name="summary">Summary of algorithmic performance</a>

| Function      | Singly linked list | Doubly linked List | Binary Search Tree |
| ------------- |--------------------|--------------------|--------------------|
| `insert`      | n/a                | n/a                | *O(log(N))*        |
| `append`      | *O(N)*             | *O(1)*             | n/a                |
| `prepend`     | *O(1)*             | *O(1)*             | n/a                |
| `removeFirst` | *O(1)*             | *O(1)*             | n/a                |
| `removeLast`  | *O(N)*             | *O(1)*             | n/a                |
| `removeValue` | *O(N)*             | *O(N)*             | *O(log(N))*        |
| `findSmallest`| *O(N)*             | *O(N)*             | *O(log(N))*        |
| `sort`        | *O(N^2)*           | *O(N^2)*           | *O(N)*             |

## *O(log(N))*

Recall, the logarithm function is the inverse of the exponential function.

The exponential function grows exorbitantly fast.

The logarithmic function grows exorbitantly slow.

<img src="graph.png">
