/*EX1__________________________________________________________*/


const push = function () {
    console.log("pushing it!")
  }
  
const pull = function () {
    console.log("pulling it!")
  }
  
const pushPull = (func) => {
    func()
}


  pushPull(push) //should print "pushing it!"
  pushPull(pull) //should print "pulling it!"

/*EX2__________________________________________________________*/


const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  

const getTime = (func) =>{
    returnTime(new Date())
}

getTime(returnTime)



/*EX3__________________________________________________________*/


const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  
const logData = (data) =>{
    console.log(data)
}
  
  displayData(console.error, logData, "I like to party")





/*EX4__________________________________________________________*/

const sum = (a,b,c) => {return a+b+c}


/*EX5__________________________________________________________*/

const capitalize = str => str[0].toUpperCase() + str.slice(1).toLowerCase()
   

console.log(capitalize("bOb")) // returns Bob
console.log(capitalize("TAYLOR")) // returns Bob
console.log(capitalize("feliSHIA")) // returns Bob


/*EX6__________________________________________________________*/

const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }


  const commentOnWeather = degree => {
    return "It's " + determineWeather(degree)
  } 

console.log(commentOnWeather(30)) //returns "It's hot"
console.log(commentOnWeather(22)) //returns "It's cold"