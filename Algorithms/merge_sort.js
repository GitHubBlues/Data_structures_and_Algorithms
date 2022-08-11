//Mergesort ist ein stabiler Sortieralgorithmus, der nach dem Prinzip teile und herrsche (divide and conquer) arbeitet.

function mergeSort(arr){
    let len = arr.length

    if (len>1){
       let a = mergeSort( arr.slice(0, Math.ceil(len/2)) )
       let b = mergeSort( arr.slice(Math.ceil(len/2), len) )

       return merge(a,b)
    } else {
        
        return arr
    } 
}

function merge(arr1, arr2){
    let lentot = arr1.length + arr2.length
    let myarr = Array(lentot)
    let i = 0
    let j = 0 
    let k = 0
    
    while (k<lentot){
        console.log(k)
        if ((i<=arr1.length-1) && (j<=arr2.length-1)){
            console.log('a --' + i + ' ' + j)     
            if (arr1[i] <= arr2[j]) {
                myarr[k] = arr1[i]
                k++
                i++
            } else {
                myarr[k] = arr2[j]
                k++
                j++
            }
        } else if (i>arr1.length-1) {
              console.log('b --' + i + ' ' + j) 
              myarr[k] = arr2[j]
              k++
              j++
        } else {
               console.log('c --' + i + ' ' + j) 
               myarr[k] = arr1[i]
               k++
               i++
        }
    }
    return myarr
}

console.log( mergeSort([1,54,9,8,7,4,1,2,33]) )