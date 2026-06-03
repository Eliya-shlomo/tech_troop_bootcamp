/*EX1__________________________________________________________*/

const run = true

if (run) {
    var distance = 8
    for (var i = 0; i < distance; i++) {
        console.log("running")
    }
    console.log("Finished running " + distance + " miles")
}

console.log("Damn, you see this gal? She ran " + distance + " miles") 



/* distance is on the if scope, we can change it to var and then there will not be error.
beacude he is not on scope tehre will ve undefiend error.
*/


/*EX2__________________________________________________________*/

if (13 == "space") {
    var cowSound = "moo"
}
else {
    console.log("Cow says " + cowSound)
}


/* the function defind the cowSound inside the if - so the variable is local to the if scope. and not gloval.
 when we will try to run teh program it will give an error. if we want to prevant it we can change him to var. or defind it before the for (: as global
*/




/*EX3__________________________________________________________*/

const serveOrders = function (orders) {

    for (let order of orders) {
        let specialOrder = "special " + order
        console.log("Served a " + specialOrder)
    }

    console.log("Finished serving all the orders: " + orders)
}
const allOrders = ["fish", "lettuce plate", "curious cheese"]
serveOrders(allOrders)


/* 
the code runs without errors because every variable is used only within the scope it was defined in.
*/



/*EX4__________________________________________________________*/

const pot = "red pot with earth in it"

const getSeed = function () {
    const seed = "brown seed"
}

const plant = function () {
    getSeed()
    console.log("Planting the " + seed + " inside a " + pot)
}

plant()


/* 
there will  be an error. the fucntion crate the seed. but not return it. and if it will return it the other
function dont take other varibale and compare it to  the seed. so its pointless to use the fucnction. and then on the console log it uses seed that
not in the scope of function.
*/


/*EX5__________________________________________________________*/


const doesUserExist = function (name) {
    const users = [{ name: "Shapira", age: 19 }, { name: "Lucius", age: 23 }]
    for (let u of users) {
        if (u.name == name) {
            const found = true
        }
    }
    return found
}

const userExists = doesUserExist("Lucius")
if (userExists) {
    console.log("We found the ragamuffin!")
}
else {
    console.log("No idea where this person is.")
}


/* 

2:18 PM
there will be an error because found is defined inside the if block but used outside of it in the return statement.
*/


/*EX6__________________________________________________________*/

const isEnough = false

const makeEnough = function () {
    for (let i = 0; i < 10; i++) {
        if (i > 5) {
            isEnough = true
        }
    }
}

makeEnough()
if (isEnough) {
    console.log("Finally, sheesh")
}
else {
    console.log("Here we go again...")
}

/*
there will be an error because isEnough is a const variable, and const variables cannot be changed after they are created.
*/
