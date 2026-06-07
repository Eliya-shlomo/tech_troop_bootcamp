class BSNode {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insertNode(value) {
      if (value < this.value) {
        if (this.left === null) {
          this.left = new BSNode(value);
        } else {
          this.left.insertNode(value);
        }
      } else {
        if (this.right === null) {
          this.right = new BSNode(value);
        } else {
          this.right.insertNode(value);
        }
      }
    }
  
    findNode(value) {
      if (value === this.value) {
        return console.log(true);
      } else if (value < this.value) {
        if (this.left) {
          return this.left.findNode(value);
        } else {
          return console.log(false);
        }
      } else {
        if (this.right) {
          return this.right.findNode(value);
        } else {
          return console.log(false);
        }
      }
    }

    findCommonParent(val1, val2) {
        if (val1 < this.value && val2 < this.value) {
          return this.left.findCommonParent(val1, val2);
        } else if (val1 > this.value && val2 > this.value) {
          return this.right.findCommonParent(val1, val2);
        } else {
          return this.value;
        }
    }

    findMin() {
        if (!this.left) return this.value;
        return this.left.findMin();
    }
    
    removeNode(value, parent = null) {
        if (value < this.value) {
            if (this.left) {
                this.left.removeNode(value, this);
            } else {
                return false;
            }
        } else if (value > this.value) {
            if (this.right) {
                this.right.removeNode(value, this);
            } else {
                return false;
            }
        } else {

            if (!this.left && !this.right) {
                if (parent.right === this) parent.right = null;
                else if (parent.left === this) parent.left = null;

            } else if (this.right && !this.left) {
                if (parent.right === this) parent.right = this.right;
                else if (parent.left === this) parent.left = this.right;

            } else if (!this.right && this.left) {
                if (parent.right === this) parent.right = this.left;
                else if (parent.left === this) parent.left = this.left;

            } else {
                const minValue = this.right.findMin();
                this.removeNode(minValue, parent);
                this.value = minValue;
            }
        }
    }
    
}


/*EX1__________________________________________________________*/


const letters = ["H", "E", "S", "G", "L", "Y", "I"];
const bsTree = new BSNode(letters[0]);

for (let i = 1; i < letters.length; i++) {
  bsTree.insertNode(letters[i]);
}
    
//Use the following to test
bsTree.findNode("H") // should print true
bsTree.findNode("G") // should print true
bsTree.findNode("Z") // should print false
bsTree.findNode("F") // should print false
bsTree.findNode("y") // should print false - we didn't make the tree case sensitive!


/*EX2__________________________________________________________*/


const Letters = ["J", "H", "R", "E", "S", "P", "G", "B", "L", "Y", "I"]
const BsTree = new BSNode(Letters[0]);

for (let i = 1; i < Letters.length; i++) {
    BsTree.insertNode(Letters[i]);
}

console.log(BsTree.findCommonParent("B", "I")) //should return "H"
console.log(BsTree.findCommonParent("B", "G")) //should return "E"
console.log(BsTree.findCommonParent("B", "L")) //should return "J"
console.log(BsTree.findCommonParent("L", "Y")) //should return "R"
console.log(BsTree.findCommonParent("E", "H")) //should return "J"





/*EX3__________________________________________________________*/


const numbers = [8, 9, 12, 3, 5, 1, 11, 4];

let nodeWithOneChild = new BSNode(numbers[0]);
for (let i = 1; i < numbers.length; i++) {
  nodeWithOneChild.insertNode(numbers[i]);
}
nodeWithOneChild.removeNode(9); 
nodeWithOneChild.findNode(9);   
nodeWithOneChild.findNode(11);  

let nodeWithTwoChildren = new BSNode(numbers[0]);
for (let i = 1; i < numbers.length; i++) {
  nodeWithTwoChildren.insertNode(numbers[i]);
}
nodeWithTwoChildren.removeNode(8); 
nodeWithTwoChildren.findNode(8);   
nodeWithTwoChildren.findNode(9);   

