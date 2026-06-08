/*EX1__________________________________________________________*/

const num1      = Number(process.argv[2]);
const operation = process.argv[3]
const num2      = Number(process.argv[4]);

let result 

if(operation === "+") result = num1+num2
else if(operation === "-") result = num1-num2
else if(operation === "*") result = num1*num2
else if(operation === "/") result = num1/num2
else{
    console.log("operation is Invalid. Use +, -, *, /")
    process.exit(1)
}

console.log(`${num1} ${operation} ${num2} = ${result}`);


/*EX2__________________________________________________________*/

const prompt = require("prompt-sync")();

const questions = [
  { question: "What is 2 + 2?",                answer: "4"      },
  { question: "What is the capital of France?", answer: "paris"  },
  { question: "What color is the sky?",         answer: "blue"   },
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  const userAnswer = prompt(`Question ${i + 1}: ${questions[i].question} `).toLowerCase();
  
  if (userAnswer === questions[i].answer) {
    console.log("Correct");
    score++;
  } else {
    console.log(`Wrong. The answer is: ${questions[i].answer}`);
  }
}

console.log(`\nFinal Score: ${score}/${questions.length} correct!`);




/*EX3__________________________________________________________*/


const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const user = {};

rl.question("Enter your name: ", (name) => {
  user.name = name;

  rl.question("Enter your email: ", (email) => {
    user.email = email;

    rl.question("Enter your age: ", (age) => {
      user.age = age;

      rl.question("Enter your favorite color: ", (color) => {
        user.color = color;

        console.log("\nRegistration Summary:");
        console.log(`Name: ${user.name}`);
        console.log(`Email: ${user.email}`);
        console.log(`Age: ${user.age}`);
        console.log(`Favorite Color: ${user.color}`);

        rl.close();
      });
    });
  });
});







/*EX4__________________________________________________________*/


const prompt = require("prompt-sync")();

let balance = 100;

while (true) {
  console.log("\n=== Banking System ===");
  console.log("1) Check Balance");
  console.log("2) Deposit Money");
  console.log("3) Withdraw Money");
  console.log("4) Exit");

  const choice = prompt("Choose option (1-4): ");

  if (choice === "1") {
    console.log(`Current balance: $${balance}`);

  } else if (choice === "2") {
    const amount = Number(prompt("Enter amount to deposit: $"));
    if (amount <= 0 || isNaN(amount)) {
      console.log("Invalid amount. Must be a positive number.");
    } else {
      balance += amount;
      console.log(`New balance: $${balance}`);
    }

  } else if (choice === "3") {
    const amount = Number(prompt("Enter amount to withdraw: $"));
    if (amount <= 0 || isNaN(amount)) {
      console.log("Invalid amount. Must be a positive number.");
    } else if (amount > balance) {
      console.log("Insufficient funds.");
    } else {
      balance -= amount;
      console.log(`New balance: $${balance}`);
    }

  } else if (choice === "4") {
    console.log("Goodbye!");
    break;

  } else {
    console.log("Invalid option. Please choose 1-4.");
  }
}



