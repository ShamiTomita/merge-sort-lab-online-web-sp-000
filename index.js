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
  let leftIndex = 0
  let rightIndex = 0
  let currentMin;
  while(leftIndex < array1.length && rightIndex <array2.length){
    if (array1[leftIndex] < array2[rightIndex]){
      leftIndex++;
    }else{
      sorted.push(array2[rightIndex]);
      rightIndex++;
    }
  }
  return sorted
  .concat(array1.slice(leftIndex))
  .concat(array2.slice(rightIndex));
}

 function mergeSort(array){
    if(array.length <= 0){
      return array;
    }
    let midpoint = Math.floor(array.length/2);
    let firstHalf = array.slice(0, midpoint);
    let secondHalf = array.slice(midpoint, array.length);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }