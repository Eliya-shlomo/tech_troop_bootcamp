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



// #6
// Given a string of words separated by spaces, return the longest word.
// If there is a tie, return the first one.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in sort functions.
//
// Input:  "the quick brown fox"   →  Output: "quick"
// Input:  "cat elephant dog"      →  Output: "elephant"
// Input:  "one two six ten"       →  Output: "one"  (tie → first wins)

function longestWord(str) {
    const words = str.split(" ")
    let longest = words[0]
    for(let i=1; i<words.length;i++){
        if(words[i].length>longest.length){
            longest = words[i]
        }
    }
    return longest


}



// #7 
// Given two strings, return true if they are anagrams of each other,
// false otherwise. An anagram uses the same characters the same number
// of times, just in a different order.
//
// Constraints: strings will only contain lowercase letters, no spaces.
//
// Input:  "listen", "silent"  →  Output: true
// Input:  "hello",  "world"   →  Output: false
// Input:  "cat",    "car"     →  Output: false


function mapsEqual(a, b) {
    if (a.size !== b.size) return false;
  
    for (let [key, val] of a) {
      if (b.get(key) !== val) return false;
    }
  
    return true;
  }

function isAnagram(a, b) {
    
    const a_map = new Map()
    const b_map = new Map()

    for(let char of a){
        if(a_map.has(char)){
            a_map.set(char,a_map.get(char)+1)
        }
        else{
            a_map.set(char,1)
        }
    }

    for(let char of b){
        if(b_map.has(char)){
            b_map.set(char,b_map.get(char)+1)
        }
        else{
            b_map.set(char,1)
        }
    }

    const is_equel = mapsEqual(a_map,b_map)
    return is_equel 

  }