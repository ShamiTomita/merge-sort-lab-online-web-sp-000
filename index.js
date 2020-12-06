//1. Implement a function that first finds and removes the smallest element in a sorted array.
//2. Implement the merge function to combine two sorted arrays into one larger array.
//3. Implement the mergeSort algorithm using the previous functions that you wrote. 

function findMinAndRemoveSorted(array){
  let min = array[0] //set the first index as the min (for now)
  let minIndex = 0 //this will eventually house the true minIndex
  for (let i = 0; i < array.length; i++){ //go through the array and increment it until it has reached the array.length
    if(array[i] < min){ //if for the given index of i is less that the set min
      min = array[i]; //the new min will be set for the index placement of i
      minIndex = i //and so the true min(for now) is i
    }
    array.splice(minIndex, 1)//once the if statement runs, remove the minIndex
    return min;//return the current min
  }
}




function merge(array1, array2){
  let sorted = [] //the array that we will pass the new merged array into
  let leftIndex = 0
  let rightIndex = 0
  while(leftIndex < array1.length && rightIndex < array2.length){ //while there are still items within both arrays
    if (array1[leftIndex] < array2[rightIndex]){ //if the first index of the first array is less than the firstindex of the right array
      sorted.push(array1[leftIndex]); //push that left index (in this case the smallest of the two into the sorted index)
      leftIndex++; //move to the next index in the first array
    }else{
      sorted.push(array2[rightIndex]); //the inverse in case the second array is the smallest
      rightIndex++;
    }
  }
  return sorted.concat(array1.slice(leftIndex)).concat(array2.slice(rightIndex));
}

 function mergeSort(array){
    if (array.length <= 1){
      return array;
    }
    const midpoint = Math.floor(array.length / 2);
    const firstHalf = array.slice(0, midpoint);
    const secondHalf = array.slice(midpoint);
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
  