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




function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // We need to concat here because there will be one element remaining
  // from either left OR the right
  return resultArray
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
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