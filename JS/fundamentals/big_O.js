/*EX1__________________________________________________________*/
const getBalance = function (bankOperations) {
    let balance = 0
    for (let op of bankOperations) {
      balance += op
     }
     return balance
  }
      
  getBalance([-27, -43, -2400, -700, 15000, 58])


  /*the bankoperation has n opration. on the for loop we cover each one of them. its make the loop for n times. 
  time complexity = O(n)
  */


  /*EX2__________________________________________________________*/
  const printSome = function (complaints) {
    for (let i = 1; i < complaints.length; i = i * 2)
      console.log(complaints[i].text);
  }


  /* the function get the compliments that have n ites inside her.
  we loop for n length of compliments. but i is expending on rate if i*2, its means 1,2,4,8,16...,64..
  so i is getting bigger as i^2.
  so for n items its take log(n) to get to the final item. 
  */



/*EX3__________________________________________________________*/

const allSides = [
    { a: 3, b: 4 },
    { a: 15, b: 21 },
    { a: 41, b: 8 },
    { a: 12, b: 6 }
  ]
      
  const relevantSides = allSides.filter(s => s.a % 3 == 0)
  for (let sides of relevantSides) {
    console.log(getHype(sides))
  }
      
  const getHype = function (sides) {
    let a = sides.a
    let b = sides.b
    let sumOfSquares = a * a + b * b
    return Math.sqrt(sumOfSquares)
  }


    /*
    Lets begging on getHype - on that fucntion we just take elemnt and make on him math. its take O(1)
    the fucntion filetr get over the n items and check each one if them, its turn it to O(n)
    */



/*EX4__________________________________________________________*/

const studentAnswers = {
    brBlds: {
      1: "a",
      2: "a",
      3: "c"
    },
    dvOna: {
      1: "a",
      2: "c",
      3: "c"
    },
    nmPrz: {
      1: "a",
      2: "b",
      3: "a"
    }
  }
  const studentGithubs = ["brBlds", "dvOna", "nmPrz"]
      
  const distributions = {
    1: {},
    2: {},
    3: {}
  }
      
  const getDistributions = function (studentAnswers) {
    studentGithubs.forEach(sg => {
      let answers = studentAnswers[sg]
      
      Object.keys(answers).forEach(questionNumber => {
        let letterAnswer = answers[questionNumber]
      
        distributions[questionNumber][letterAnswer] ?
          distributions[questionNumber][letterAnswer]++ :
          distributions[questionNumber][letterAnswer] = 1
      })
    })
      
    return distributions
  }
      
  getDistributions(studentAnswers)
  

/*
there is n students. adn tehre is m answers. we itarete for n student and for each student his answers. its make it O(n*m)
*/


/*EX5__________________________________________________________*/

const sendEmails = (email, recepients) => recepients.forEach(r => r.sendEmail(email))
    
const emailManager = function () {
  let email = generateEmail()
    
  $.get('/recepients', function (recepients) {
      sendEmails(email, recepients)
  })
}
  
/*
O(n) - its loop for n recepients. and i trreat the second sendEmail as O(1) complexsity. its make it for O(n)
*/


/*EX6__________________________________________________________*/


  
/*
*/





/*EX7__________________________________________________________*/


const employees = {
    ax01: { name: "Ray",    age: 28, salary: 1300 },
    qs84: { name: "Lucius", age: 31, salary: 840  },
    bg33: { name: "Taylor", age: 18, salary: 2700 }
  }

const findEmployeeSalary = function(employeeID){
    return employees[employeeID]?.salary
}
  

/* we will use HashMap. we store it that way so when ever we need employeeID - if tehre is kind of ID it will return his salary.
if not it will return undefined
*/



/*EX8__________________________________________________________*/


let numbers = [24, 33, 66, 102, 108, 140, 146, 177, 182, 217, 341, 357, 372, 390, 418, 427, 442, 444, 469, 480, 572, 624, 627, 665, 680, 694, 743, 768, 790, 794, 852, 896, 919, 942, 982, 991, 1026, 1055, 1086, 1137, 1141, 1157, 1167, 1271, 1272, 1273, 1301, 1337, 1340, 1344, 1388, 1455, 1465, 1466, 1509, 1555, 1640, 1667, 1667, 1689, 1824, 1897, 1928, 1950, 1987, 2056, 2059, 2070, 2123, 2140, 2198, 2215, 2260, 2304, 2383, 2403, 2433, 2454, 2472, 2480, 2481, 2535, 2543, 2554, 2557, 2580, 2630, 2634, 2671, 2745, 2792, 2839, 2849, 2871, 2873, 2893, 2932, 2962, 2984, 2987]
  
const findIndex = function(numbers, num) {
    let left = 0
    let right = numbers.length - 1
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
  
      if (numbers[mid] === num) {
        return mid               
      } else if (numbers[mid] < num) {
        left = mid + 1            
      } else {
        right = mid - 1           
      }
    }
  
    return -1                    
  }
  
  findIndex(numbers, 2630) 



/*EX9__________________________________________________________*/

/* 
blue - O(n)
red - O(n^2)
yellow - O(log(n))
green - O(1)

*/