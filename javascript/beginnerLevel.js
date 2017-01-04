//BEGINNER LEVEL JS TOY PROBLEMS


////////////////////////////////////////////////////////////////////////////////
// Sum of positive
// You get an array of numbers, return the sum of all of the positives ones.
//
// Example [1,-4,7,12] => 1 + 7 + 12 = 20
//
// Note: array may be empty, in this case return 0.
//my answer
function positiveSum(arr) {
  var sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

//slimmed down
function positiveSum(arr) {
   return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
}

//test
positiveSum([1,2,3,4,5])//15
positiveSum([1,-2,3,4,5])//13
positiveSum([])//0

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//letterCapitalize
// Have the function letterCapitalize(str) take the str parameter being passed, capitalize the first letter of each word, and return the altered string. Words will be separated by only one space.
//my answer
function letterCapitalize(str) {
  var arr = str.split(' ');
  var result = arr.map(i=>i[0].toUpperCase() + i.slice(1));
  return result.join(' ');
}

//slimmed down
function letterCapitalize(str) {
 return str.split(' ').map(i=>i[0].toUpperCase() + i.slice(1)).join(' ');
}

//test
var sntc = "make all letters Capitalized please";//'Make All Letters Capitalized Please'
console.log(letterCapitalize(sntc));

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//myGroceryList
//Write a function called removeItem that is given two arguments, the first is an array called myGroceryList, and the second is an item to remove from myGroceryList. If the second argument (the item to remove) matches an item in myGroceryList, remove that item from your grocery list and return the new, updated grocery list.

var list = ['milk','cheese', 'meat', 'eggs'];
//my answer
function removeItem(myGroceryList, item) {
  	return myGroceryList.filter(i=>i !== item);
}
//test
console.log(removeItem(list, 'cheese'));

//Once you do that, write another function called addItem that is given two arguments, the first is myGroceryList and the second is an item to add to your grocery list. If the item is already in the grocery list, do not add it a second time. If it's not in the list, then add it and return the new list.
//my answer
function addItem(myGroceryList, item) {
	var result = myGroceryList.filter(i=>i !== item);
	result.push(item);
	return result;
}
//test
console.log(addItem(list, 'fruit'));

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

//FizzBuzz
//Log 1 through 100. with numbers divisible by 3 = fizz, by 5 = buzz and by both = fizzbuzz.
//my answer
function fizzBuzz() {
  for (var i=1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
  }
}

//slimmed down
function fizzBuzz() {
  for (var i = 1; i <= 100; i++) {
    console.log([i,"fizz","buzz","fizzbuzz"][(i%3===0)+2*(i%5===0)]);
  }
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// For loops are especially useful when combined with arrays. Create an empty array called myArray, then create a function called arrayFiller that takes one parameter (the parameter will be a number). Then fill myArray with the string "item" the number of times indicated by the parameter. Return the filled array. For example if I were to call arrayFiller(2) I would expect the return value to be ["item","item"] .
//my answer
function arrayFiller(num) {
return Array(num).fill('item')
}
//test
var myArray = arrayFiller(3)

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Maker 25
// Fill an array with the numbers 1 to 25.
//my answer
function maker() {
 return [...Array(25).keys()].map(i => i+1);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Looper
// Create a function called "looper" that when passed an array of numbers will increment each value in the array by 5 and then return the updated array. For example: if the looper function were to be passed [ 2, 7 ] it should return [ 7, 12 ]
//my answer
function looper(arr){
  return arr.map(i=>i+5);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// findInArray
// Write a function called 'findInArray' that takes in two parameters, the first representing the array to be searched and the second representing the value to be searched for. Return true if the value exists in the array. If it doesn't exist return false.
//my answer
function findInArray(arr, num) {
  return arr.find(i=>i===num)?true:false;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// oddsAndEvens
//Write a function below called "oddsAndEvens" that loops through a parameter "nums" (an array).
//for each number in the given array, if it is even, it is added to the evens array, if the number is odd, is added to the odds array.
//my answer
var evens = [];
var odds = [];

function oddsAndEvens(nums) {
 nums.map(i=>i%2===0?evens.push(i):odds.push(i))
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Create a function called exponent that takes in two parameters, the first parameter should represent a number to be multiplied against itself and the second parameter should represent how many times it is multiplied by itself. The function should return the result of this operation. exponent(2,3) should return 8
//my answer
function pow(x,y) {
  var result = 1;
  for (var i = 1; i <= y; i++) {
    result *= x;
  }
  return result
}

//slimmed down
function exponent(a,b){
  return Math.pow(a,b)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Even Finder & Odd Finder
// Create a function called evenFinder that takes an array as an argument and returns an array with all of the odd numbers removed.
//my answer
function evenFinder(arr){
 return arr.filter(i=>i%2===0)
}
function oddFinder(arr){
 return arr.filter(i=>i%2)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Get the Middle Character
// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
//my answer
function getMiddle(s) {
  return (s.length % 2) ? s[Math.floor(s.length/2)] : s[s.length/2 - 1] + s[s.length/2]
}

//slimmed down
function getMiddle(s) {
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//my answer
function highAndLow(numbers){
  var a = numbers.split(' ').sort((a,b)=>b-a);
  return [a[0], a[a.length-1]].join(' ');
}

//math.max and math.min methods
function highAndLow(numbers) {
  var arr = numbers.split(" ");
  return Math.max.apply(null, arr) + ' ' + Math.min.apply(null, arr);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Your task is to make a function that can take any non-negative integer as a argument and return it with it's digits in descending order. Descending order means that you take the highest digit and place the next highest digit immediately after it.

function descendingOrder(n){
  return parseInt(n.toString().split('').sort((a,b)=>b-a).join(''));
}

//alternative
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You have function with one side of the DNA (string, except for Haskell); you need to get the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//my answer
function DNAStrand(dna){
  return dna.split('').map(x=>{
     switch (x) {
      case 'A': return 'T';
      case 'T': return 'A';
      case 'G': return 'C';
      case 'C': return 'G';
    }}).join('');
}

//slimmed down
var pairs = {'A':'T','T':'A','C':'G','G':'C'};

function DNAStrand(dna){
  return dna.split('').map(function(v){ return pairs[v] }).join('');
}

//regex
function DNAStrand(dna) {
  return dna.replace(/./g, function(c) {
    return DNAStrand.pairs[c]
  })
}

DNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C',
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Given two integers, which can be positive and negative, find the sum of all the numbers between including them too and return it. If both numbers are equal return a or b.
//my answer
function GetSum(a,b) {
  var nums = [];
  if (b > a) {
    for (var i=a;i <= b; i++) {
      nums.push(i);
    }
  } else {
    for (var i=b;i <= a; i++) {
      nums.push(i);
    }
  }
  return a===b ? a : nums.reduce((a,b)=> a + b, 0);
}

//alt
function GetSum( a,b ) {
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}

//alt
const GetSum = (a, b) => {
  let min = Math.min(a, b),
      max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Return the number (count) of vowels in the given string.
//
// We will consider a, e, i, o, and u as vowels.
//my answer
function getCount(str) {
  var vowelsCount = 0,
      vowels = ['a','e','i','o','u'];
  str.split('').map(x=>{if (vowels.includes(x)){vowelsCount+=1}})
  return vowelsCount;
}

//regex
function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Welcome. In this kata, you are asked to square every digit of a number.
//
// For example, if we run 9119 through the function, 811181 will come out.
//my answer
function squareDigits(num){
  return parseInt(num.toString().split('').map(x=>(parseInt(x)*parseInt(x))).join(''))
}

//alt
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// exOh
// Have the function exOh(str) take the str parameter being passed and return true if there is an equal number of x's and o's, otherwise return false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's.
//my answer
function XO(str) {
  var x = str.split('').filter(i=>i.toLowerCase()==='x');
  var o = str.split('').filter(i=>i.toLowerCase()==='o');
  return x.length===o.length;
}
//test
var xo = 'xoxoxoxoxoxo';
var xox = 'xxooxxoox';
console.log(exOh(xo));
console.log(exOh(xox));

//alt
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//my answer
function isIsogram(str){
  var letters = str.toLowerCase().split(''),
      results = [];
  for (var i=0; i < letters.length; i++) {
    results.push(letters.indexOf(letters[i])<i)
  }
  return results.indexOf(true)>-1?false:true
}

//regex
function isIsogram(str){
  return !/(\w).*\1/i.test(str)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
//
// If the parameter is itself not a perfect square, than -1 should be returned. You may assume the parameter is positive.
//my answer
function findNextSquare(sq) {
  var root = Math.sqrt(sq);
  return root % 1 === 0 ? Math.pow(root+1, 2) : -1;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//my answer
function maskify(cc) {
  return cc === '1'||'' ? cc : Array(cc.slice(0,-4).length + 1).join('#') + cc.slice(-4);
}

//regex
function maskify(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
//
// For example, when an array is passed like [19,5,42,2,77], the output should be 7.
//
// [10,343445353,3453445,3453545353453] should return 3453455.
//my answer
function sumTwoSmallestNumbers(nums) {
  var min = Math.min(...nums),
      indexOfMin = nums.indexOf(min);
  return min + Math.min(...nums.slice(0, indexOfMin), ...nums.slice(indexOfMin + 1))
};

//slimmed down
function sumTwoSmallestNumbers(nums) {
  nums = nums.sort((a,b)=>a-b);
  return nums[0]+nums[1]
};

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.
function findShort(s){
  return s.split(' ').sort((a,b)=> a.length - b.length)[0].length
}
//top answer on codewars
function findShort(s){
  return Math.min.apply(null, s.split(' ').map(w => w.length));
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filter_list(l) {
  return l.filter((x)=>typeof x === 'number')
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Write a small function that returns the values of an array that are not odd.
//
// All values in the array will be integers. Return the good values in the order they are given.
function noOdds( values ){
  return values.filter(x=>x%2===0)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Complete the solution so that it reverses the string value passed into it.
function solution(str){
  return str.split('').reverse().join('')
}
//es6
const solution = s => [...s].reverse().join('')


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
//
// The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
function solution(pairs){
  var results = [];
  for (prop in pairs) {
    results.push(prop + ' = ' + pairs[prop])
  }
  return results.join(',')
}

//top codewars answer
function solution(pairs){
  return Object.keys(pairs)
    .map(k=> k + ' = ' + pairs[k])
    .join(',');
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function spinWords(s){
  return s
  .split(' ')
  .map(x=>x.length>=5?x.split('').reverse().join(''):x)
  .join(' ');
}

//regex
function spinWords(s){
  return s.replace(/\w{5,}/g, w=>w.split('').reverse().join(''))
}


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
//
// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text

function likes(names) {
  var l = names.length;
  return
  l===0 ? 'no one likes this' :
  l===1 ? names[0] + ' likes this' :
  l===2 ? names.join(' and ') + ' like this' :
  l===3 ? names[0] + ', ' + names.slice(1).join(' and ') + ' like this' :
  names.slice(0,2).join(', ') + ' and ' + (names.length - 2) + ' others like this'
}

//favorite codewars answer
function likes(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`,
    2: `${names[0]} and ${names[1]} like this`,
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`,
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`,
  }[Math.min(4, names.length)]
}


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
