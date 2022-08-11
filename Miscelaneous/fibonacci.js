//The Fibonacci sequence sums each number with the previous one. 

// Part 1: using iteration. 
// Write the function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence. 
// Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13]

function fibs(nb){
    let result = [0,1]
    for (let i=0; i<(nb-2); i++){
        result.push( Number(result.slice(-1)) + Number(result.slice(-2, -1)) )
    }
    return result
}
console.log(fibs(8))


// Part 2: solve it recursively 
// function fibsRec(nb){
//     let result = []
//     if (nb < 2) return nb 
//     if (nb == 0) return result

//     return result.push( Number(result.slice(-1)) + Number(result.slice(-2, -1)) )).concatenate(fibsRec( nb-1 ))
// }
// console.log(fibsRec(8))

function fibsRec(n) {
    arr = []
    if (n === 0) return [0]
    if (n === 1) return [0,1]

    return [...fibsRec(n - 1), fibsRec(n - 1)[n - 1] + fibsRec(n - 1)[n - 2]]
  }
  
  console.log(fibsRec(8))
