# Binary Search Trees
A mini-course in binary search trees in JS for novice programmers.

A binary search tree (BST) is an efficient recursive data structure.

## Prerequisites

Mastery of [singly linked lists](https://github.com/mikegagnon/linked-lists/blob/master/README.md) and
[doubly linked lists](https://github.com/mikegagnon/dlists/blob/master/README.md)

## Contents

- [Lecture 1. Summary of algorithmic performance](#lec1)
- [Lecture 2. *O(log(N))*](#lec2)
- [Lecture 3. `BNode`](#lec3)

## <a name="lec1">Lecture 1. Summary of algorithmic performance</a>

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

## <a name="lec2">Lecture 2. *O(log(N))*</a>

The exponential function grows exorbitantly fast.

The logarithmic function grows exorbitantly slow.

<img src="graph.png">

### Defining log(N)

Say you have a single-elmination tournament with 16 players. How many rounds does it take to determine the victor?

The tournament starts with 16 players, then:

- (Round 1) half get eliminated leaving 8, then
- (Round 2) half get eliminated leaving 4, then
- (Round 3) half get eliminated leaving 2, then
- (Round 4) half get eliminated leaving 1, the victor

It only takes four rounds to handle 16 players.

And only five rounds to handle 32 players.

And only six rounds to handle 64 players.

And only seven rounds to handle 128 players.

...

In general:

- *N* is the number of players
- *Y* is the number of rounds it takes to find the victor
- *Y = log(N)*

When *N* is a very large number, *log(N)* is a relatively small number.

For example:

- *log(1) == 0*
- *log(2) == 1*
- *log(4) == 2*
- *log(8) == 3*
- *log(16) == 4*
- *log(32) == 5*
- *log(64) == 6*
- ...
- *log(4,294,967,296) == 32*

As *N* grows exponentially, *log(N)* grows linearly.

Therefore *O(log(N))* is considered very efficient, almost as good as *O(1)*.

## <a name="lec3">`BNode`</a>

Like linked lists, binary search trees are composed of nodes.

Here's the basic class definition for a `BNode` -- the node structure for BSTs:

```js
class BNode {
    constructor(key) {
        this.key = key;
        this.left = undefined;
        this.right = undefined;
    }
}
```

`BNode`s link together to form "trees," like so:

<img src="tree.png">

### The BST invariant

For every `BNode` in a tree, say `node`:

- The key in every node in `node`'s left subtree must be **less than** `node.key`
- The key in every node in `node`'s right subtree must be **greater than** `node.key`

Observe how this property holds in the diagram above.
