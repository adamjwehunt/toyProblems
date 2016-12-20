////////////////CODE CARDIO///////////////////


// Advanced #6
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

// Advanced #7
// Have the function letterCapitalize(str) take the str parameter being passed, capitalize the first letter of each word, and return the altered string. Words will be separated by only one space.
function letterCapitalize(str) {
 return str.split(' ').map(i=>i[0].toUpperCase() + i.slice(1)).join(' ');
}
//test
var sntc = "make all letters Capitalized please";
console.log(letterCapitalize(sntc));

//myGroceryList
//Write a function called removeItem that is given two arguments, the first is an array called myGroceryList, and the second is an item to remove from myGroceryList. If the second argument (the item to remove) matches an item in myGroceryList, remove that item from your grocery list and return the new, updated grocery list.
var list = ['milk','cheese', 'meat', 'eggs'];
//Code Here
function removeItem(myGroceryList, item) {
  	return myGroceryList.filter(i=>i !== item);
}
//test
console.log(removeItem(list, 'cheese'));
//Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. If the item is already in the grocery list, do not add it a second time. If it's not in the list, then add it and return the new list.
//Code Here
function addItem(myGroceryList, item) {
	var result = myGroceryList.filter(i=>i !== item);
	result.push(item);
	return result;
}
//test
console.log(addItem(list, 'fruit'));

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

// Advanced #5
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

//FizzBuzz
//Log 1 through 100. with numbers divisible by 3 = fizz, by 5 = buzz and by both = fizzbuzz.
function fizzBuzz() {
  for( var i = 1; i < 101; i++ ){
    console.log([i,"fizz","buzz","fizzbuzz"][(i%3===0)+2*(i%5===0)]);
  }
}

// Functions 15
// For loops are especially useful when combined with arrays. Create an empty array called myArray, then create a function called arrayFiller that takes one parameter (the parameter will be a number). Then fill myArray with the string "item" the number of times indicated by the parameter. Return the filled array. For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] .
function arrayFiller(num) {
return Array(num).fill('item')
}
var myArray = arrayFiller(3)

// Maker 25
// Fill an array with the numbers 1 to 25.
function maker() {
 return [...Array(25).keys()].map(i => i+1);
}

// Looper
// Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5 and then return the updated array. For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ]
function looper(arr){
  return arr.map(i=>i+5);
}

// findInArray
// Write a function called 'findInArray' that takes in two parameters, the first representing the array to be searched and the second representing the value to be searched for. Return true if the value exists in the array. If it doesn't exist return false.
function findInArray(arr, num) {
  return arr.find(i=>i===num)?true:false;
}

// oddsAndEvens
//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
var evens = [];
var odds = [];

function oddsAndEvens(nums) {
 nums.map(i=>i%2===0?evens.push(i):odds.push(i))
}

// Functions 14
// Create a function called exponent that takes in two parameters, the first parameter should represent a number to be multiplied against itself and the second parameter should represent how many times it is multiplied by itself. The function should return the result of this operation. exponent(2,3) should return 8
function exponent(a,b){
  return Math.pow(a,b)
}
// Even Finder & Odd Finder
// Create a function called evenFinder that takes an array as an argument and returns an array with all of the odd numbers removed.
function evenFinder(arr){
 return arr.filter(i=>i%2===0)
}
function oddFinder(arr){
 return arr.filter(i=>i%2)
}






//////////////////CODE WARS////////////////////
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
