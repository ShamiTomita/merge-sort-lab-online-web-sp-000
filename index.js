//1. Implement a function that first finds and removes the smallest element in a sorted array.
//2. Implement the merge function to combine two sorted arrays into one larger array.
//3. Implement the mergeSort algorithm using the previous functions that you wrote. 

function findMinAndRemoveSorted(array){
  let min = array[0]
  let minIndex = 0
  for (let i = 0; i < array.length; i++){
    if(array[i] < min){
      min = array[i];
      minIndex = i
    }
    array.splice(minIndex, 1)
    return min;
  }
}




function merge(array1, array2){
  let sorted = []
  let firstHalf = array1
  let secondHalf = array2
  let currentMin;
  while(firstHalf.length != 0 && secondHalf.length != 0){
    let currentMin = findMinAndRemove(firstHalf, secondHalf)
    sorted.push(currentMin)
  }
  return sorted.concat(firstHalf).concat(secondHalf)
}

 function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
 
    if(array.length < 2){
      return array
    } else {
      merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
  }