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
