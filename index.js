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
  while(leftIndex < array1.length && rightIndex < array2.length){
    if (array1[leftIndex] < array2[rightIndex]){
      sorted.push(array1[leftIndex]);
      leftIndex++;
    }else{
      sorted.push(array2[rightIndex]);
      rightIndex++;
    }
  }
  return sorted.concat(array1.slice(leftIndex)).concat(array2.slice(rightIndex));
}

 
  
  function mergeSort (unsortedArray) {
  // No need to sort the array if the array only has one element or empty
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }
  // In order to divide the array in half, we need to figure out the middle
  const middle = Math.floor(unsortedArray.length / 2);

  // This is where we will be dividing the array into left and right
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Using recursion to combine the left and right
  return merge(
    mergeSort(left), mergeSort(right)
  );
}