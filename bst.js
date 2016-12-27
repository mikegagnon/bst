
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
            leftValid = this.left.max() < this.key && this.left.isValidBST();
        }

        if (this.right == undefined) {
            rightValid = true;
        } else {
            rightValid = this.right.min() > this.key && this.right.isValidBST();
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

// BST with one node
var node = new BNode(10);
assert(node.isValid());
