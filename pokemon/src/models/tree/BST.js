
import Node from "./Node.js";

class BST {
    #root;

    constructor() {
        this.#root = null;
    }

    add(island) {
        if (this.#root == null) {
            this.#root = new Node(island);
            return this.#root != null;
        } else {
            return this.insertNode(this.#root, island);
        }
    }

    insertNode(node, island) {
        if (island.name < node.value.name) {
            if (node.left == null) {
                node.left = new Node(island);
                return node.left != null;
            } else {
                return this.insertNode(node.left, island);
            }
        } else {
            if (node.right == null) {
                node.right = new Node(island);
                return node.right != null;
            } else {
                return this.insertNode(node.right, island);
            }
        }
    }

    search(name) {
        return this.searchNode(this.#root, name);
    }

    searchNode(node, name) {
        if (node == null || node.value.name === name) {
            return node;
        } else if (name < node.value.name) {
            return this.searchNode(node.left, name);
        } else {
            return this.searchNode(node.right, name);
        }
    }

    searchMin() {
        return this.searchMinValue(this.#root);
    }

    searchMinValue(node) {
        if (node == null) {
            return null;
        }
        if (node.left == null) {
            console.log("Minimum island found:", node.value);
            return node.value;
        } else {
            return this.searchMinValue(node.left);
        }
    }

    searchMax() {
        return this.searchMaxValue(this.#root);
    }

    searchMaxValue(node) {
        if (node == null) {
            return null;
        }
        if (node.right == null) {
            console.log("Maximum island found:", node.value);
            return node.value;
        } else {
            return this.searchMaxValue(node.right);
        }
    }

    inOrder(callback) {
        this.inOrderTraverseNode(this.#root, callback);
    }

    inOrderTraverseNode(node, callback) {
        if (node != null) {
            this.inOrderTraverseNode(node.left, callback);
            callback(node.value);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
}

export default BST;
