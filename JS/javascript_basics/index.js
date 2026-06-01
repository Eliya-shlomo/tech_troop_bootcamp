/* 
falsy
true
true
falsy
true
true
false
false
false
*/


/*_____________________________________________________________*/

/*
a,b,c = 3
*/


/*_____________________________________________________________*/

let age = 31
function valid(age){
    if(age > 18){
        console.log("you are an adult eanough");
    }else{
        console.log("you are not an adult eanough");
    }
}

valid(age);

/*_____________________________________________________________*/
let grade = 95

function score(grade){
    if(grade >=90 && grade <=100){
        console.log("A");
    }else if(grade >=80 && grade <90){
        console.log("B");
    }else if(grade >=70 && grade <80){
        console.log("C");
    }else if(grade >=60 && grade <70){
        console.log("D");
    }else{
        console.log("F");
    }
}

score(grade);

/*_____________________________________________________________*/



function weatherActivity(temperature, weather) {
    if (weather === "sunny") {
      if (temperature > 24) {
        console.log("Go to the beach");
      } else if (temperature >= 15) {
        console.log("Go for a walk");
      } else {
        console.log("Stay inside and read");
      }
    } else if (weather === "rainy") {
      console.log("Watch a movie indoors");
    } else if (weather === "cloudy") {
      if (temperature > 21) {
        console.log("Go hiking");
      } else {
        console.log("Visit a museum");
      }
    }
  }
  
  let temperature = 20;
  let weather = "sunny";
  weatherActivity(temperature, weather);


/*_____________________________________________________________*/


let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;

if (usernameLength >= 5 && passwordLength >= 8 && userAge >= 13) {
  console.log("Account created successfully!");
} else {
  if (usernameLength < 5) {
    console.log("Error: Username must be at least 5 characters");
  }
  if (passwordLength < 8) {
    console.log("Error: Password must be at least 8 characters");
  }
  if (userAge < 13) {
    console.log("Error: User must be 13 or older");
  }
}

/*_____________________________________________________________*/

let customerType = "premium";
let purchaseAmount = 150;
let dayOfWeek = 6;

let discount = 0;
let isWeekend = dayOfWeek === 0 || dayOfWeek === 6;

if (customerType === "vip") {
  discount = 20;
} else if (customerType === "premium") {
  discount = isWeekend ? 15 : 10;
} else if (customerType === "regular") {
  discount = purchaseAmount > 100 ? 10 : purchaseAmount > 50 ? 5 : 0;
}

let discountAmount = (purchaseAmount * discount) / 100;
let finalPrice = purchaseAmount - discountAmount;

console.log("Customer type: " + customerType);
console.log("Purchase amount: $" + purchaseAmount);
console.log("Discount: " + discount + "%");
console.log("You saved: $" + discountAmount);
console.log("Final price: $" + finalPrice);

/*_____________________________________________________________*/

let year = 2024;

if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}


/*_____________________________________________________________*/



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.splice(1, 2);

numbers[3] = 1;

numbers.splice(-4);

numbers.unshift(0);

console.log(numbers);


/*_____________________________________________________________*/


const p1 = {name: "John", age: 30, city: "New York"}

const p2 = {name: "Jane", age: 25, city: "Los Angeles"}

if(p1.age == p2.age){
    if(p1.city == p2.city){
        console.log('p1.name want to date p2.name' )
    }else{
        console.log('p1.name want to date p2.name but couldnt') 
    }
}





/*_____________________________________________________________*/




const library = {
    books: [
        {title: "The Great Gatsby", author: "F. Scott Fitzgerald"},
        {title: "1984", author: "George Orwell"},
        {title: "To Kill a Mockingbird", author: "Harper Lee"},
        {title: "The Catcher in the Rye", author: "J.D. Salinger"},
        {title: "The Lord of the Rings", author: "J.R.R. Tolkien"},
    ]
}
 
console.log(library.books[0].title);




/*_____________________________________________________________*/



const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };
  
  const name = 'Bob';
  
  if (reservations[name]) {
    if (!reservations[name].claimed) {
      console.log("Welcome, " + name);
    } else {
      console.log("Hmm, someone already claimed this reservation");
    }
  } else {
    console.log("You have no reservation");
  }


/*_____________________________________________________________*/


const reservations_2= {
    Bob: { claimed: false },
    Ted: { claimed: true }
  };
  
  const name_2 = 'Dan';
  
  if (reservations_2[name_2]) {
    if (!reservations_2[name_2].claimed) {
      console.log("Welcome, " + name_2);
    } else {
      console.log("Hmm, someone already claimed this reservation");
    }
  } else {
    reservations_2[name_2] = { claimed: true };
    console.log("No reservation found, but we have open tables! Welcome, " + name);
  }
  
  console.log(reservations_2);



  /*_____________________________________________________________*/


  const reservations_3 = {
    bob: { claimed: false },
    ted: { claimed: true }
  };
  
  const name_3 = 'TeD';
  const nameLower = name_3.toLowerCase();
  
  if (reservations_3[nameLower]) {
    if (!reservations_3[nameLower].claimed) {
      console.log("Welcome, " + name_3);
    } else {
      console.log("Hmm, someone already claimed this reservation");
    }
  } else {
    reservations_3[nameLower] = { claimed: true };
    console.log("No reservation found, but we have open tables! Welcome, " + name_3);
  }
  
  console.log(reservations_3);


/*_____________________________________________________________*/



const date = 3;

const kitchen = {
  owner: "Geraldine",
  hasOven: true,
  fridge: {
    price: 500,
    works: false,
    items: [
      { name: "cheese", expiryDate: 7 },
      { name: "radish", expiryDate: 2 },
      { name: "bread", expiryDate: 1 }
    ]
  }
};

const owner = kitchen.owner;
const hasOven = kitchen.hasOven;
const fridgeWorks = kitchen.fridge.works;
const radish = kitchen.fridge.items[1];
const daysExpired = date - radish.expiryDate;
const repairCost = kitchen.fridge.price / 2;


const fridgePart = fridgeWorks ? "Weird, considering her fridge works." : "Probably because her fridge doesn't work.";

  
const ovenPart = hasOven   ? "Luckily, she has an oven to cook the " + radish.name + " in." : "Too bad she doesn't have an oven to cook the " + radish.name + " in.";

  
const fixPart = !fridgeWorks   ? " And she'll have to pay " + repairCost + " to fix the fridge." : "";


console.log(
  owner + "'s " + radish.name + " expired " + daysExpired + " day ago. " +
  fridgePart + " " + ovenPart + fixPart
);


/*_____________________________________________________________*/


const names = ["Ashley", "Donovan", "Lucas"];
const ages = [23, 47, 18];
const people = [];

for (let i = 0; i < names.length; i++) {
  people.push({ name: names[i], age: ages[i] });
}

console.log(people);



/*_____________________________________________________________*/


for (let person of people) {
    console.log(person.name + " is " + person.age + " years old");
  }






  const posts = [
    {
      id: 1,
      text: "Love this product",
      comments: []
    },
    {
      id: 2,
      text: "This is the worst. DON'T BUY!",
      comments: [
        { id: 1, text: "Idiot has no idea" },
        { id: 2, text: "Fool!" },
        { id: 3, text: "I agree!" }
      ]
    },
    {
      id: 3,
      text: "So glad I found this. Bought four already!",
      comments: []
    }
  ];
  
  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === 2) {
      for (let j = 0; j < posts[i].comments.length; j++) {
        if (posts[i].comments[j].id === 3) {
          posts[i].comments.splice(j, 1);
          break;
        }
      }
      break;
    }
  }
  
  console.log(posts[1].comments);


/*_____________________________________________________________*/


const dictionary = {
"A": ["Aardvark", "Abacus", "Actually", "Atomic"],
"B": ["Banana", "Bonkers", "Brain", "Bump"],
"C": ["Callous", "Chain", "Coil", "Czech"]
};

for (let key of Object.keys(dictionary)) {
console.log("Words that begin with " + key + ":");
for (let word of dictionary[key]) {
    console.log("    " + word);
}
}

console.log(Object.keys(dictionary));


/*_____________________________________________________________*/

let numbero = 18

function isEven(number) {
    return number % 2 === 0
}

isEven(numbero)


/*_____________________________________________________________*/
const array = [1, 2, 3, 4, 5]



function printOdd(array) {
    for (let i = 0; i < array.length; i++) {
        if (isEven(array[i]) === false) {
            console.log(array[i])
        }
    }
}

printOdd(array)  

/*_____________________________________________________________*/


function checkExists(array,x){
    for(let i=0; i<array.length; i++){
        if(array[i]===x){
            return true
        }
    }
    return false
}

/*_____________________________________________________________*/

const calculator = {
    add(a,b){
        return a + b
    },
    subtract(a,b){
        return a-b
    }
}

const result1 = calculator.add(20, 1)       
const result2 = calculator.subtract(30, 9) 

console.log(calculator.add(result1, result2))

/*_____________________________________________________________*/


const increaseByNameLength = function(money, name) {
    return money * name.length
}

const makeRegal = function(name) {
    return "His Royal Highness, " + name
}

const turnToKing = function(name, money) {
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100)



/*_____________________________________________________________*/

for(let i=100; i<=999; i++){
    
    let NumberAsString = String(i)

    let NumberLength = NumberAsString.length

    let sum = 0

    for(let j=0; j<NumberLength; j++){

        let add_to_sum = Math.pow(Number(NumberAsString[j]),NumberLength)

        sum += add_to_sum
    }

    if(sum === i){
        console.log(i)
    }
}

/*_____________________________________________________________*/



const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"', "?", "!", ";"]
const wordCounts = {}




function cleanText(story){
    const lowerStory = story.toLowerCase()
    let cleanStory = lowerStory
    for(let i=0; i<specialChars.length; i++){
        cleanStory = cleanStory.replaceAll(specialChars[i], "");
    }

    return cleanStory.split(' ')
}


function addToCounter(word){

    if(Object.hasOwn(wordCounts,word)){
    
        wordCounts[word] +=1
    }
    else{
        wordCounts[[word]] = 1
    }
}



function countWords(story){
    const wordsArray = cleanText(story);
    
    for(let i=0; i<wordsArray.length; i++){
        addToCounter(wordsArray[i])
    }

    return wordCounts
    
}

countWords(story);



console.log(wordCounts);
