class TrieNode {
    constructor(value = '') {
        this.value = value;
        this.children = {}; 
        this.endOfWord = false; 
    }
}

export class AutoCompleteTrie {
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

        current = this.root

        for(let i=0; i<prefix.length; i++){
            let char = prefix[i]

            if(!current.children[char]){
                return []
            }

            let current = current.children[char]
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



