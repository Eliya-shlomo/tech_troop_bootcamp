import {AutoCompleteTrie } from './index.js';


function assert(condition, testName) {
    if (condition) {
        console.log(`✅ PASSED: ${testName}`);
    } else {
        console.error(`❌ FAILED: ${testName}`);
    }
}

function runTests() {
    console.log("--- Starting Unit Tests ---");

    const trie = new AutoCompleteTrie();
    
    trie.addWord("cat");
    trie.addWord("car");
    trie.addWord("dog");

    assert(trie.findWord("cat") === true, "findWord מצא מילה קיימת ('cat')");
    assert(trie.findWord("car") === true, "findWord מצא מילה קיימת נוספת ('car')");
    assert(trie.findWord("ca") === false, "findWord החזיר false עבור תחילית בלבד ('ca')");
    assert(trie.findWord("apple") === false, "findWord החזיר false עבור מילה שלא הוכנסה");

    const helperResults = [];
    trie._findAllWords(trie.root, "", helperResults);
    assert(helperResults.includes("cat") && helperResults.includes("car") && helperResults.includes("dog"));

    const predictionsForCa = trie.predictWords("ca");
    assert(predictionsForCa.length === 2 && predictionsForCa.includes("cat") && predictionsForCa.includes("car"));

    const predictionsForDo = trie.predictWords("do");
    assert(predictionsForDo.length === 1 && predictionsForDo[0] === "dog");

    const predictionsForX = trie.predictWords("xyz");
    assert(predictionsForX.length === 0);

    console.log("\n--- Testing Whole Flow ---");
    const mainTrie = new AutoCompleteTrie();
    const wordsDataset = ["hello", "hell", "heaven", "heavy", "cat"];
    
    wordsDataset.forEach(w => mainTrie.addWord(w));
    
    let allAdded = wordsDataset.every(w => mainTrie.findWord(w));
    assert(allAdded, "כל המילים במאגר הוכנסו ונמצאו בהצלחה");

    const heavyPredictions = mainTrie.predictWords("hea");
    assert(heavyPredictions.length === 2 && heavyPredictions.includes("heaven") && heavyPredictions.includes("heavy"));
        
    const hellPredictions = mainTrie.predictWords("hell");
    assert(hellPredictions.length === 2 && hellPredictions.includes("hell") && hellPredictions.includes("hello"));

    console.log("\n--- Tests Completed ---");
}

runTests();