/*EX1__________________________________________________________*/

let meatArr = ["beef","chicken"]
let vegetableArr = ["rabbit","carrots","potatoes","lettuce"]

meatArr = [...meatArr,vegetableArr[0]]
vegetableArr = vegetableArr.slice(1)


console.log(meatArr)
console.log(vegetableArr)


/*EX2__________________________________________________________*/

var firstPiece = { id: 101, name: 'Ofri' }

var seoncdPiece = { country: 'Israel'}

var passport = {...firstPiece,...seoncdPiece}

console.log(passport)

/*EX3__________________________________________________________*/

let employeesArr = [
    { name : "Joey" , id: 1 , age: 26},
    { name : "Lily" , id: null , age: 24},
    { name : "Alice" , id: 7 , age: null},
    { name : "Sam" , id: 8 , age: 24},
    { name : "Ray" , id: null , age: null}
]

for(let employee of employeesArr ){
    const missingId   = employee.id ?? "missing"
    const missingAge = employee.age ?? "missing"

    if(missingId === "missing" || missingAge === "missing"){
        console.log(employee.name)
    }
}

