// From: https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion
// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.
function sumRange(k){
    if (k==1) return 1
    return k + sumRange(k-1)
}
console.log( sumRange(3) )


// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function power(base, exponent){
    if (exponent == 0) return 1
    return base * power(base,exponent-1)
}
console.log( power(2,4) )


// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.
function factorial(k){
    if (k==0) return 1
    return k*factorial(k-1)
}
console.log( factorial(5) )


// Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function
function all(arr, cb){
    let myarr = arr.slice() // shallow copy
    if (myarr.length == 0) return true
    if (cb( myarr[0] ) == true){
        myarr.shift()
        return all( myarr, cb )
    } else {
        return false
    } 
}

var allAreLessThanSeven = all([1,2,3,10], function(num){
	return num < 7;
});
console.log( allAreLessThanSeven )


// Write a function called productOfArray which takes in an array of numbers and returns the product of them all
function productOfArray(arr){
    if (arr.length == 0) return 1
    return arr.shift() * productOfArray(arr) 
}
console.log( productOfArray([2,10,5]) )


// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.
function contains(obj, target){
   for (let key in obj){
       if (typeof obj[key] ==='object'){
            return contains(obj[key], target)
       }
       if (obj[key] === target) {
           return true
       } 
   }
   return false
}

let nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
console.log(contains(nestedObject, 46))


// Given a multi-dimensional integer array, return the total number of integers stored inside this array
let nint = []
function numberIntegers(arr){
    arr.forEach(element => {
        if (Array.isArray(element)){
            return numberIntegers(element)
        } else {
            if (Number.isInteger(element)){
            }
            return nint
        }
    })
    return nint
}
let seven = numberIntegers([[[5], 3], [0, 2], ['foo'], [], [4, [5, 7]]]); // 7
console.log(nint.length)


// Write a function that sums squares of numbers in list that may contain more lists
function SumSquares(lst){
   let sum = 0
   if (lst.length ==0) return 0

   for (let i=0; i<lst.length; i++){
       if (Array.isArray(lst[i])){
           sum += SumSquares(lst[i])
       } 
       if (typeof lst[i] == 'number'){
           sum += lst[i]*lst[i]
       }
   }
return sum
}


let l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400
console.log('******************')


// The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.
function replicate(numb, times){
   let result = []
   if (times<0) return result
   
   for (let i=0; i<times; i++){
       result.push(numb)
   }
   return result
}
console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // []