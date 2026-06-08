// #8
// Given an array of integers and a target number, return all pairs
// of elements that add up to the target. Each pair should be returned
// as an array of two numbers, and you should return an array of all pairs.
// Avoid duplicate pairs.
//
// Constraints: the array may contain positive and negative integers.
// A number cannot be paired with itself at the same index.
//
// Hint: think about every possible combination of two elements,
// then check if they add up to the target.
//
// Input:  [1, 2, 3, 4, 5], target 6  →  Output: [[1,5], [2,4]]
// Input:  [1, 1, 2, 3],    target 4  →  Output: [[1,3]]
// Input:  [0, -1, 2, -3],  target -1 →  Output: [[0,-1], [2,-3]]

function findPairs(arr, target) {
    let returned_array = []
    let seen = new Set()
  
    for(let i=0; i<arr.length; i++){
      let complement = target - arr[i]
      if(seen.has(complement)){
        let pair = [complement, arr[i]].sort((a, b) => a - b); 
      
        if (!returned_array.some(p => p[0] === pair[0] && p[1] === pair[1])) {
          returned_array.push(pair); 
        }
      }
      seen.add(arr[i])
    }
  
    return returned_array
  }
  
  // Tests
  console.log(findPairs([1, 2, 3, 4, 5], 6)); // → [[1,5], [2,4]]
  console.log(findPairs([1, 1, 2, 3], 4));     // → [[1,3]]
  console.log(findPairs([0, -1, 2, -3], -1));  // → [[0,-1], [2,-3]]




  // #9
// Given a string of words separated by spaces, return the sentence
// with the word order reversed. The words themselves should stay intact.
//
// Constraints: the string will always have at least one word.
// You may not use any built-in reverse functions.
//
// Input:  "hello world"          →  Output: "world hello"
// Input:  "the quick brown fox"  →  Output: "fox brown quick the"
// Input:  "one"                  →  Output: "one"

function reverseWords(str) {
    const words = str.split(" ")
    let j = words.length-1
    let i = 0

    while(i<j){
        temp     = words[j]
        words[j] = words[i]
        words[i] = temp

        i++
        j--
    }

    return words.join(" ");
  }
  
  // Tests
  console.log(reverseWords("hello world"));          // → "world hello"
  console.log(reverseWords("the quick brown fox"));  // → "fox brown quick the"
  console.log(reverseWords("one"));                  // → "one"