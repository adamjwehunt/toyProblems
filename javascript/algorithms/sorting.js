//BUBBLE SORT (not good for production code)
var arr = [1,4,23,1,400,2,9,5,6,3,2];

const bubbleSort = (nums) => {
  do  {
    var swapped = false;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i+1]) {
        const temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  } while(swapped)
  return nums
}

bubbleSort(arr)



//MERGE SORT - 'divide and conquer' - pretty much Array.sort()
// this method of sorting is consistent and dependanble
// uses recursion
// STABLE sort (if you have two of the same values, they will be returned in original order - good for strings perhaps)

var nums = [1,2,9,14,8,2,1,19,2,3,4,20,300,2]

const split = (arr) => {
  //basecase
  if (arr.length < 2) {
    return arr
  }

  const length = arr.length;
  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle, length)

  return stitch(split(left), split(right))
}

const stitch = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  return [...results, ...left, ...right]
}

split(nums)



//QUICKSORT

//my solution
var nums = [1,20,3,21,50,2,3,1,1,18,35,78,64,32]

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[arr.length-1],
        left = [],
        right = [],
        middle = []

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else if (arr[i] > pivot) {
        right.push(arr[i])
      } else {
        middle.push(arr[i])
      }
    }

    console.log(left, right, middle)

  return [...quickSort(left), ...middle, ...quickSort(right)]
}

quickSort(nums)



///answer

var nums = [1,20,3,21,50,2,3,1,1,18,35,78,64,32]

const quickSort = (arr) => {
  if (arr.length <= 1) {
    return arr
  }

  const pivot = arr[arr.length-1],
        left = [],
        right = [];

  for (let i = 0; i < arr.length-1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
    }
  }

  console.log(left, right)

  return [...quickSort(left), pivot, ...quickSort(right)]
}

quickSort(nums)



////BOGOSORT  I did this just for fun. don't ever use this sort unless you have lots and lots of memory :D
var nums = [1,20,3,21,50,2,3]

function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
      // Pick a random index
      let index = Math.floor(Math.random() * counter);

      // Decrease counter by 1
      counter--;

      // And swap the last element with it
      let temp = array[counter];
      array[counter] = array[index];
      array[index] = temp;
  }

  return array;
}

const bogoSort = (arr) => {
  const isSorted = (random) => {
    for (let i = 0; i < random.length; i++) {
      if (random[i] > random[i+1]) {
        return false
      }
    }
    return true
  }
  if (isSorted(arr)) {
    return arr
  }
  let random = shuffle(arr)
  return bogoSort(arr)
}

bogoSort(nums)
