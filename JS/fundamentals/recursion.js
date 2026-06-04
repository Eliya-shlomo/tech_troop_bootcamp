/*EX1__________________________________________________________*/

const findFactorial = function(num){
    if(num===1){
        return num
    }
    return num * findFactorial(num -1)
}


console.log(findFactorial(8))

/*EX2__________________________________________________________*/

const reverseString = function(str){
    if (str.length <= 1) return str

    return str[str.length - 1] + reverseString(str.slice(0, -1))
}

console.log(reverseString("ayile"))


/*EX3__________________________________________________________*/

const arr1 = [1, 2, 3]
const arr2 = []

const swap = function(arr1,arr2){
    if(arr1.length === 0){
        return
    }
    arr2.push(arr1.shift())

    swap(arr1, arr2)

}

swap(arr1, arr2)
console.log(arr1) //[]
console.log(arr2) //[1, 2, 3]