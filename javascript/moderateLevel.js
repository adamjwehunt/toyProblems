//MODERATE LEVEL JS TOY PROBLEMS

////////////////////////////////////////////////////////////////////////////////

// exOh
// Have the function exOh(str) take the str parameter being passed and return true if there is an equal number of x's and o's, otherwise return false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.

function exOh(str) {
  var x = str.split('').filter(i=>i==='x');
  var o = str.split('').filter(i=>i==='o');
  return x.length===o.length;
}
//test
var xo = 'xoxoxoxoxoxo';
var xox = 'xxooxxoox';
console.log(exOh(xo));
console.log(exOh(xox));

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

//reversedLooper
//  Create a function called 'reversedLooper' that when passed an array will loop through it backwards and subtract 2 from the last element, 1 from the second to last, 0 from to the third to last, add one to the fourth to last, add 2 to the fifth to last. Continue increasing the amount added by 1, until it reaches the front of the array.  Return the list when you are done
var testArray = [1, 1, 2, 3, 5, 8, 13, 21];
// result should be [ 6, 5, 5, 5, 6, 8, 12, 19 ]
function reversedLooper(arr) {
  var result = [],
      x = 2;
  for (var i = arr.length - 1; i >= 0; i--) {
    result[i] = (arr[i] - x);
    x--;
  }
  return result;
}
//test
console.log(reversedLooper(testArray));

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Finish the function missingNo so that it takes in a sorted array of integers which contains all integers between 0 and N except one value, and returns the missing integer in that array. Example: if you are passed [0,1,2,3,5], this is an array between 0 and 5, it is sorted. However, the number 4 is missing. Your function needs to return 4.
function missingNo(numArray) {
  return numArray.sort((a,b)=>{
    if (a !== b - 1){
    	return b;
    }
  })[0]-1;
}
var arr1 = [0,1,2,3,5];
console.log(missingNo(arr1))

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

function accum(s) {
  var arr = s.split(''),
      arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j <= i; j++) {
      arr2.push(arr[i]);
    }
    if (i < arr.length - 1) {arr2.push('-')}
  }
  var result = arr2.join('').split('-')
  return result.map(x => x[0].toUpperCase() + x.slice(1).toLowerCase() + '-').join('').slice(0, -1);
}
//slimmed down
function accum(s) {
  return s.split('').map((x,index) => x.toUpperCase()+Array(index+1).join(x.toLowerCase())).join('-');
}
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
