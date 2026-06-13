import readline from 'readline';
import { AutoCompleteTrie } from './index.js';

const trie = new AutoCompleteTrie();

function main() {
    console.log("=== AutoComplete Trie Console ===");
    console.log("Type 'help' for commands");

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '\n> '
    });

    rl.prompt();

    rl.on('line', (line) => {
        const userInput = line.trim();
        
        if (userInput === "") {
            rl.prompt();
            return;
        }

        const parts = userInput.split(" ");
        const command = parts[0].toLowerCase();
        const arg = parts[1]; 

        if (command === "exit") {
            console.log("Goodbye!");
            rl.close();
            return;
        } 
        else if (command === "help") {
            console.log("Commands: add <word>, find <word>, complete <prefix>, help, exit");
        } 
        else if (command === "add") {
            if (!arg) {
                console.log("✗ Error: Please provide a word.");
            } else {
                trie.addWord(arg); 
                console.log("✓ Added '" + arg + "' to dictionary");
            }
        } 
        else if (command === "find") {
            if (!arg) {
                console.log("✗ Error: Please provide a word.");
            } else {
                const found = trie.findWord(arg); 
                if (found === true) {
                    console.log("✓ '" + arg + "' exists in dictionary");
                } else {
                    console.log("✗ '" + arg + "' not found in dictionary");
                }
            }
        }
        else if (command === "complete") {
            if (!arg) {
                console.log("✗ Error: Please provide a prefix.");
            } else {
                const suggestions = trie.complete(arg); 
                
                if (suggestions && suggestions.length > 0) {
                    console.log("Suggestions for '" + arg + "': " + suggestions.join(", "));
                } else {
                    console.log("No suggestions found for '" + arg + "'");
                }
            }
        }
        else {
            console.log("Unknown command. Type 'help' for commands.");
        }

        rl.prompt();
    });
}

main();