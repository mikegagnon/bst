
function assert(condition) {
    if (!condition) {
        console.error("Test failed");
    }
}

class DNode {
    constructor(value) {
        this.value = value;
        this.prev = undefined;
        this.next = undefined;
    }

    // Creates a new node to hold value, then inserts the new node after
    // this node.
    //
    // Returns a reference to the new node
    insertAfter(value) {
        
        var newNode = new DNode(value);

        newNode.next = this.next;
        newNode.prev = this;

        if (newNode.next != undefined) {
            newNode.next.prev = newNode;
        }

        this.next = newNode;

        return newNode;
    }

    // Creates a new node to hold value, then inserts the new node before
    // this node.
    //
    // Returns a reference to the new node
    insertBefore(value) {

        var newNode = new DNode(value);

        newNode.next = this;
        newNode.prev = this.prev;

        if (newNode.prev != undefined) {
            newNode.prev.next = newNode;
        }

        this.prev = newNode;

        return newNode;
    }

    // Creates a new node to hold value, then appends the new node to 
    // the end of the list.
    //
    // this node __must__ be the last node in the list
    // 
    // Returns a reference to the new node
    append(value) {
        if (this.next == undefined) {
            return this.insertAfter(value);
        } else {
            console.error("this node __must__ be the last node in the list");
        }
    }
    
    // Creates a new node to hold value, then prepend the new node to 
    // the head of the list.
    //
    // this node __must__ be the first node in the list
    // 
    // Returns a reference to the new node
    prepend(value) {
        if (this.prev == undefined) {
            return this.insertBefore(value);
        } else {
            console.error("this node __must__ be the first node in the list");
        }
    }
}


class BNode {
    constructor(key) {
        this.key = key;
        this.left = undefined;
        this.right = undefined;
    }

    // Returns true iff this node represents the root of a valid BST.
    // 
    // A tree of nodes is valid iff:
    //      - Every key in node's left subtree is less than node.key
    //      - Every key in node's right subtree is greater than node.key
    isValid() {
        var leftValid;
        var rightValid;

        if (this.left == undefined) {
            leftValid = true;
        } else {
            leftValid = this.left.isValid() && this.left.max() < this.key;
        }

        if (this.right == undefined) {
            rightValid = true;
        } else {
            rightValid = this.right.isValid() && this.right.min() > this.key;
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

    // Assumg this is a valid BST, insert(key) creates a new BNode for key,
    // and inserts it into the BST. The insertion is performed in a way such
    // that this remains a valid BST
    insert(key) {
        if (key < this.key) {
            if (this.left == undefined) {
                this.left = new BNode(key);
            } else {
                this.left.insert(key);
            }
        } else if (key > this.key) {
            if (this.right == undefined) {
                this.right = new BNode(key);
            } else {
                this.right.insert(key);
            }
        } else {
            console.error("Key is already in the BST")
        }
    }

    sort() {

        var sorted = undefined;

        if (this.left != undefined) {
            sorted = this.left.sort();
        } 

        if (sorted == undefined) {
            sorted = new DNode(this.key);
        } else {
            sorted.append(new DNode(this.key));
        }

        if (this.right != undefined) {
            sorted.concat(this.right.sort());
        }

        return sorted;
       
    }
}

/* Tests for min, max, and isValid ********************************************/

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

// Invalid BST:
//
//             10
//     5               15
// *6*   7       12    20
// 
var node = new BNode(10);
node.left = new BNode(5);
node.left.left = new BNode(6);
node.left.right = new BNode(7);
node.right = new BNode(15);
node.right.right = new BNode(20);
node.right.left = new BNode(12);

assert(node.left.min() == 6);
assert(node.left.max() == 7);
assert(node.right.min() == 12);
assert(node.right.max() == 20);
assert(!node.isValid());

// Invalid BST:
//
//             10
//     5               15
//   3   *11*       12    20
// 
var node = new BNode(10);
node.left = new BNode(5);
node.left.left = new BNode(3);
node.left.right = new BNode(11);
node.right = new BNode(15);
node.right.right = new BNode(20);
node.right.left = new BNode(12);

assert(node.left.min() == 3);
assert(node.left.max() == 11);
assert(node.right.min() == 12);
assert(node.right.max() == 20);
assert(!node.isValid());

// Invalid BST:
//
//             10
//     5               15
//   3   7         *8*    20
// 
var node = new BNode(10);
node.left = new BNode(5);
node.left.left = new BNode(3);
node.left.right = new BNode(7);
node.right = new BNode(15);
node.right.right = new BNode(20);
node.right.left = new BNode(8);

assert(node.left.min() == 3);
assert(node.left.max() == 7);
assert(node.right.min() == 8);
assert(node.right.max() == 20);
assert(!node.isValid());

// Invalid BST:
//
//             10
//     5               15
//   3   7          12    *14*
// 
var node = new BNode(10);
node.left = new BNode(5);
node.left.left = new BNode(3);
node.left.right = new BNode(7);
node.right = new BNode(15);
node.right.right = new BNode(14);
node.right.left = new BNode(12);

assert(node.left.min() == 3);
assert(node.left.max() == 7);
assert(node.right.min() == 12);
assert(node.right.max() == 14);
assert(!node.isValid());




/* Tests for insert ***********************************************************/

// Test case for
//             10
//     5               15
//   3   7          12    20
var root = new BNode(10);
assert(root.isValid());
root.insert(5);
assert(root.left.key == 5);
root.insert(15);
assert(root.right.key == 15);
root.insert(3);
assert(root.left.left.key == 3);
root.insert(7);
assert(root.left.right.key == 7);
root.insert(12);
assert(root.right.left.key == 12);
root.insert(20);
assert(root.right.right.key == 20);

assert(root.isValid());


/* Tests for sorted ***********************************************************/

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

// assert(node.sort() == [3,5,7,10,12,15,20]);
