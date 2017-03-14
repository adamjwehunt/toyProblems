//ADVANCED LEVEL JS TOY PROBLEMS

////////////////////////////////////////////////////////////////////////////////


// Sum of Pairs
//
// Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
// sum_pairs([11, 3, 7, 5],         10)
// #              ^--^      3 + 7 = 10
// == [3, 7]
//
// sum_pairs([4, 3, 2, 3, 4],         6)
// #          ^-----^         4 + 2 = 6, indices: 0, 2 *
// #             ^-----^      3 + 3 = 6, indices: 1, 3
// #                ^-----^   2 + 4 = 6, indices: 2, 4
// #  * entire pair is earlier, and therefore is the correct answer
// == [4, 2]
//
// sum_pairs([0, 0, -2, 3], 2)
// #  there are no pairs of values that can be added to produce 2.
// == None/nil/undefined (Based on the language)
//
// sum_pairs([10, 5, 2, 3, 7, 5],         10)
// #              ^-----------^   5 + 5 = 10, indices: 1, 5
// #                    ^--^      3 + 7 = 10, indices: 3, 4 *
// #  * entire pair is earlier, and therefore is the correct answer
// == [3, 7]
var sum_pairs=function(ints, s){
  var results,
	    limit = ints.length;
    for (var i = 0; i < limit; i++) {
      for (var j = i+1; j < limit; j++){
    	  if (ints[i] + ints[j] === s) {
    			results = [ints[i], ints[j]];
    			limit = j;
    		}
    	}
    }
  return results;
};

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Pascal's Triangle
function pascalsTriangle(n) {
  console.log(n)
  var triangle = [[1]],
      results = [],
      level;

  for (var i=0; i<n-1; i++) {
    level = [1];
    for (var j = 1; j < triangle[i].length; j++) {
      level[j] = triangle[i][j] + triangle[i][j-1];
    }
    level.push(1);
    triangle.push(level)
  }

  triangle.map(x=>results.push(x))
  return results
}

//recursion
function pascalsTriangle(n) {
  if (n === 1) {
    return [1];
  }
  var prev = pascalsTriangle(n - 1), len = prev.length;
  prev.push(1);
  for (var i = len - n + 1; i < len - 1; i ++) {
    prev.push(prev[i] + prev[i + 1]);
  }
  prev.push(1);
  return prev;
}

//

function pascalsTriangle(n) {
    for (var i = 0, ret = []; i < n; i++) for (var j = 0; j <= i; j++) ret.push(row(i, j));
    return ret;
}
function row(n, k) { return (k == 0 || n == k) ?1 :row(n - 1, k - 1) + row(n - 1, k); }
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Valid Braces
// Description:
//
// Write a function called validBraces that takes a string of braces, and determines if the order of the braces is valid. validBraces should return true if the string is valid, and false if it's invalid.
//
// This Kata is similar to the Valid Parentheses Kata, but introduces four new characters. Open and closed brackets, and open and closed curly braces. Thanks to @arnedag for the idea!
//
// All input strings will be nonempty, and will only consist of open parentheses '(' , closed parentheses ')', open brackets '[', closed brackets ']', open curly braces '{' and closed curly braces '}'.
//
// What is considered Valid? A string of braces is considered valid if all braces are matched with the correct brace.
// For example:
// '(){}[]' and '([{}])' would be considered valid, while '(}', '[(])', and '[({})](]' would be considered invalid.
//
// Examples:
// validBraces( "(){}[]" ) => returns true
// validBraces( "(}" ) => returns false
// validBraces( "[(])" ) => returns false
// validBraces( "([{}])" ) => returns true


//clever
function validBraces(braces){
 while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
 return !braces.length;
}

//best practice
function validBraces(braces){
  var matches = { '(':')', '{':'}', '[':']' };
  var stack = [];
  var currentChar;

  for (var i=0; i<braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) { // opening braces
      stack.push(currentChar);
    } else { // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0; // any unclosed braces left?
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// Description:
//
// In this kata, you will create an object that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
//
// For example, the array arr = [ 0 , 1 , 2 , 5 , 1 , 0 ] has a peak in position 3 with a value of 5 (arr[3] = 5)
//
// The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
//
// Example: pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]) returns {pos:[3,7],peaks:[6,3]}
//
// All input arrays will be valid numeric arrays (although it could still be empty), so you won't need to validate the input.
//
// The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
//
// Also, beware of plateaus !!! [1,2,2,2,1] has a peak while [1, 2, 2, 2, 3] does not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1,2,2,2,1]) returns {pos:[1],peaks:[2]}
//
// have fun!


const pickPeaks = (arr) => {
  let result = {
    pos: [],
    peaks: []
    };
  let index = -1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i-1]) {
      index = i;
    } else if(index != -1 && arr[i] < arr[i-1]) {
      result.peaks.push(arr[index]);
      result.pos.push(index);
      index = -1;
    }
  }
  return result;
}

///

function pickPeaks(arr){

  var pos = [], peaks = [], lastIncreaseIndex = null;
  arr.forEach(function(e, index) {

    if(lastIncreaseIndex) {

      if(arr[index - 1] > arr[index]) {
        pos.push(lastIncreaseIndex);
        peaks.push(arr[lastIncreaseIndex]);
        lastIncreaseIndex = null;
      }
    }
    if(index && arr[index] > arr[index - 1]) {
      lastIncreaseIndex = index;
    }
  });
  return {pos:pos,peaks:peaks};
}dddd

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////








////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////







////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////







////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
