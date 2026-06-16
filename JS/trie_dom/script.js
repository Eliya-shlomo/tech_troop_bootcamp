class TrieNode {
    constructor(value = '') {
        this.value = value;
        this.children = {}; 
        this.endOfWord = false; 
    }
}

class AutoCompleteTrie {
    constructor() {
        this.root = new TrieNode();
    }

    addWord(word) {
        let current = this.root;

        for (let char of word) {

            if (!current.children[char]) {
                current.children[char] = new TrieNode(char);
            }
            
            current = current.children[char];
        }

        current.endOfWord = true;
    }


    findWord(word) {
        if (!word) {
            return false;
        }
    
        let current = this.root;
    
        for (let i = 0; i < word.length; i++) {
            let char = word[i];
    
            if (!current.children[char]) {
                return false;
            }
    
            current = current.children[char];
        }
    
        return current.endOfWord;
    }


    predictWords(prefix){
        if(!prefix){
            return []
        }

        let current = this.root

        for(let i=0; i<prefix.length; i++){
            let char = prefix[i]

            if(!current.children[char]){
                return []
            }

             current = current.children[char]
        }
        
        let results = []
        this._findAllWords(current, prefix, results);

        return results;

    }


    _findAllWords(node, currentWord, results) {
        if (node.endOfWord) {
            results.push(currentWord);
        }
    
        for (let char in node.children) {
            let childNode = node.children[char];
            this._findAllWords(childNode, currentWord + char, results);
        }
    }


}

const trieDom = new AutoCompleteTrie()
counter = 0

const addBtn = document.getElementById("addBtn")
const wordInput = document.getElementById("wordInput")
const suggestions = document.getElementById("suggestions")
const greenRed = document.getElementById("greenRed")

addBtn.onclick = function (word){

    word = wordInput.value 

    if (word === ""){
        greenRed.innerHTML = "Cannot add empty word"
        greenRed.className = "error";
        greenRed.style.display = "block";
        return
    }


    trieDom.addWord(word)
    
    greenRed.innerHTML = `Added ${word} to dictonary`
    greenRed.className = "success";
    greenRed.style.display = "block";
    const wordCount = document.getElementById("wordCount")

    wordCount.innerHTML = ++counter
}


const searchInput = document.getElementById("searchInput")

searchInput.oninput = function () {

    suggestions.innerHTML = ""
    let predicted_words = trieDom.predictWords(searchInput.value)

    if (predicted_words.length === 0) {  
        suggestions.style.display = "none"
    }
    else{
        suggestions.style.display = "block"
        for(let i=0; i<predicted_words.length;i++){
            let suggest = document.createElement("li")
            suggest.innerHTML = predicted_words[i]
            suggestions.appendChild(suggest)
        }
    }
}