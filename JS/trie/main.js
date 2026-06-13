const readline = require('readline');

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
            console.log("Commands: add, find, complete, help, exit");
        } 
        else {
            console.log("Unknown command. Type 'help' for commands.");
        }

        rl.prompt();
    });
}

