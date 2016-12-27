
function assert(condition) {
    if (!condition) {
        console.error("Test failed");
    }
}

class BNode {
    constructor(key) {
        this.key = key;
        this.left = undefined;
        this.right = undefined;
    }

    isValid() {
        var leftValid;
        var rightValid;

        if (this.left == undefined) {
            leftValid = true;
        } else {
            leftValid = this.left.max() < this.key && this.left.isValid();
        }

        if (this.right == undefined) {
            rightValid = true;
        } else {
            rightValid = this.right.min() > this.key && this.right.isValid();
        }

        return leftValid && rightValid;
    }

    max() {
        if (this.right == undefined) {
            return this.key;
        } else {
            return this.right.max();
        }
    }

    min() {
        if (this.left == undefined) {
            return this.key;
        } else {
            return this.left.min();
        }
    }
}

//

// BST with one node
var key = 10
var node = new BNode(key);
assert(node.min() == key);
assert(node.max() == key);
assert(node.isValid());

// Valid BST with one left node
var node = new BNode(10);
node.left = new BNode(5);
assert(node.left.min() == 5);
assert(node.left.max() == 5);
assert(node.isValid());

// Valid BST with one right node
var node = new BNode(10);
node.right = new BNode(15);
assert(node.right.min() == 15);
assert(node.right.max() == 15);
assert(node.isValid());

// Invalid BST with one left node
var node = new BNode(10);
node.left = new BNode(15);
assert(node.left.min() == 15);
assert(node.left.max() == 15);
assert(!node.isValid());

// Invalid BST with one right node
var node = new BNode(10);
node.right = new BNode(5);
assert(node.right.min() == 5);
assert(node.right.max() == 5);
assert(!node.isValid());

// Valid BST with one left node and one right node
var node = new BNode(10);
node.left = new BNode(5);
assert(node.left.min() == 5);
assert(node.left.max() == 5);
node.right = new BNode(15);
assert(node.right.min() == 15);
assert(node.right.max() == 15);
assert(node.isValid());

// Invalid BST with one left node and one right node: left node invalid
var node = new BNode(10);
node.left = new BNode(15);
assert(node.left.min() == 15);
assert(node.left.max() == 15);
node.right = new BNode(15);
assert(node.right.min() == 15);
assert(node.right.max() == 15);
assert(!node.isValid());

// Invalid BST with one left node and one right node: right node invalid
var node = new BNode(10);
node.left = new BNode(5);
assert(node.left.min() == 5);
assert(node.left.max() == 5);
node.right = new BNode(5);
assert(node.right.min() == 5);
assert(node.right.max() == 5);
assert(!node.isValid());

// Valid BST:
//
//             10
//     5               15
//   3   7          12    20
// 
var node = new BNode(10);
node.left = new BNode(5);
node.left.left = new BNode(3);
node.left.right = new BNode(7);
node.right = new BNode(15);
node.right.right = new BNode(20);
node.right.left = new BNode(12);

assert(node.left.min() == 3);
assert(node.left.max() == 7);
assert(node.right.min() == 12);
assert(node.right.max() == 20);
assert(node.isValid());
