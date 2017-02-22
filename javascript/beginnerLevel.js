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
// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has two digits, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  var x = n.toString().split('').reduce((a,b)=>parseInt(a)+parseInt(b),0);
  return x.toString().length===1? x : digital_root(x);
}

//top codewars
function digital_root(n) {
  return (n - 1) % 9 + 1;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

function isValidWalk(walk) {
  var n = [],
      s = [],
      e = [],
      w = [];
  walk.map(x=>{
    if (x==='n') { n.push(x)
    } else if (x==='s') { s.push(x)
    } else if (x==='e') { e.push(x)
    } else if (x==='w') { w.push(x)
    }
  })
  return walk.length===10 && n.length===s.length && e.length===w.length;
}

//my favorite amswer

function isValidWalk(walk) {
  function count(val) {
    return walk.filter(x=>x===val).length;
  }
  return walk.length==10 && count('n')==count('s') && count('w')==count('e');
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Your goal in this kata is to implement an difference function, which subtracts one list from another.
//
// It should remove all values from list a, which are present in list b.
//
// difference([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:
//
// difference([1,2,2,2,3],[2]) == [1,3]

function array_diff(a, b) {
  return a.filter(x=>x!==b[0])
}
//supports anysize array for the b paramater
function array_diff(a, b) {
  return a.filter(x=>b.indexOf(x)===-1)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Polycarpus works as a DJ in the best Berland nightclub, and he often uses dubstep music in his performance. Recently, he has decided to take a couple of old songs and make dubstep remixes from them.
//
// Let's assume that a song consists of some number of words. To make the dubstep remix of this song, Polycarpus inserts a certain number of words "WUB" before the first word of the song (the number may be zero), after the last word (the number may be zero), and between words (at least one between any pair of neighbouring words), and then the boy glues together all the words, including "WUB", in one string and plays the song at the club.
//
// For example, a song with words "I AM X" can transform into a dubstep remix as "WUBWUBIWUBAMWUBWUBX" and cannot transform into "WUBWUBIAMWUBX".

function songDecoder(s){
  return s.split('WUB').map(x=>!x?'':x+' ').join('').slice(0,-1)
}

//regex
function songDecoder(song){
  return song.replace(/(WUB)+/g," ").trim()
}

//another good answer
function songDecoder(song){
  return song.split('WUB').filter(Boolean).join(' ');
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
//novice, but first thought
function createPhoneNumber(n){
  return "("+n[0]+n[1]+n[2]+") "+n[3]+n[4]+n[5]+"-"+n[6]+n[7]+n[8]+n[9]
}

//second thought
function createPhoneNumber(n){
  return "("+n.slice(0,3).join('')+") "+n.slice(3, 6).join('')+"-"+n.slice(6).join('')
}
//best practice
function createPhoneNumber(numbers){
  numbers = numbers.join('');
  return '(' + numbers.substring(0, 3) + ') '
      + numbers.substring(3, 6)
      + '-'
      + numbers.substring(6);
}
//regex answer
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.
//
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input
// Input will consist of a list of lists containing two items each. Each list contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data){
  return data.map(x=>x[0]>=55&&x[1]>7?'Senior':'Open')
}

//good practice
function openOrSenior(data){
  function determineMembership(member){
    return (member[0] >= 55 && member[1] > 7) ? 'Senior' : 'Open';
  }
  return data.map(determineMembership);
}
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.
//
// The binary number returned should be a string.

function addBinary(a,b) {
  return (a+b).toString(2)
}

//works with negative numbers
function addBinary(a,b){
  return ((a + b) >>> 0).toString(2);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Implement a method that accepts 3 integer values a, b, c. The method should return true if a triangle can be built with the sides of given length and false in any other case.
//
// (In this case, all triangles must have surface greater than 0 to be accepted).
function isTriangle(a,b,c){
   return a+b>c&&b+c>a&&c+a>b
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
//
// If the function is passed a valid PIN string, return true, else return false.
function validatePIN (pin) {
  return (pin.length===4||pin.length===6)&&(pin.split('').filter(x=>x>-1).join('')===pin)
}

//slimmed downfunction validatePIN (pin) {
function validatePIN (pin) {
  return  (pin.length===4||pin.length===6) && parseInt(pin) == pin
}

//regex
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Given an array of integers, remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
//
// Don't change the order of the elements that are left.

function removeSmallest(n) {
  var result = n[0]
  for (var i = 1; i < n.length; i++) {
    if (n[i]<result) {
      result = n[i]
    }
  }
  n.splice(n.indexOf(result),1)
  return n
}

//Math.min..

function removeSmallest(numbers) {
  if(!numbers)return [];
  var min=Math.min.apply(null,numbers);
  numbers.splice(numbers.indexOf(min),1);
  return numbers;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// n a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants
//
// At the end of the 2nd year there will be:
// 1070 + 1070 * 0.02 + 50 => 1141 inhabitants (number of inhabitants is an integer)
//
// At the end of the 3rd year there will be:
// 1141 + 1141 * 0.02 + 50 => 1213
//
// It will need 3 entire years.

function nbYear(p0, percent, aug, p) {
  var currentP = p0, result = 0;
  for (var i = 1; currentP <= p; i++) {
    currentP += currentP * (percent*.01) + aug;
    if (currentP>=p) {return i}
  }
}

//slimmed down
function nbYear(p0, percent, aug, p) {
  for (var i = 0; p0 < p; i++) {
    p0 += p0 * (percent*.01) + aug;
  }
  return i
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
function longest(s1, s2) {
  var s3 = (s1 + s2).split('');
  return s3.filter((x,i)=>{
      return (s3.slice(0,i).indexOf(x)===-1)
    }).sort().join('')
}

//es6
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')

//sort first then check for the index behind it..MY FAVORITE
function longest(s1, s2) {
  return (s1+s2).split('').sort().filter((a,b,c)=>a!==c[b-1]).join('');
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Your task is to write a function which returns the sum of following series upto nth term(parameter).
//
// Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
// ex: SeriesSum(1) => 1 = "1"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

function SeriesSum(n){
  var result = 0, x = 1;
  for (var i=0; i<n; i++) {
    result += 1/x
    x=x+3
  }
  return result.toFixed(2).toString();
}

//slimmed down
function SeriesSum(n) {
  var result = 0;
  for (var i = 0; i < n; i++) {
    result += 1/(1 + i * 3)
  }
  return result.toFixed(2)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Given the triangle of consecutive odd numbers:
//
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the row sums of this triangle from the row index (starting at index 1) e.g.:
//
// rowSumOddNumbers(1); // 1
// rowSumOddNumbers(2); // 3 + 5 = 8

//first answe
function rowSumOddNumbers(n) {
  var result = 0,
      s = 1;
  for (var j=1; j<n; j++) {
    s += j * 2
  }
  for (var i=0; i<n; i++){
    result += s + 2 * i
  }
  return result
}

//DUH!
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
}

//es6
let rowSumOddNumbers = n => n ** 3;

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Mr. Scrooge has a sum of money 'P' that wants to invest, and he wants to know how many years 'Y' this sum has to be kept in the bank in order for this sum of money to amount to 'D'.
//
// The sum is kept for 'Y' years in the bank where interest 'I' is paid yearly, and the new sum is re-invested yearly after paying tax 'T'
//
// Note that the principal is not taxed but only the year's accrued interest
//
// Example:
//
//   Let P be the Principal = 1000.00
//   Let I be the Interest Rate = 0.05
//   Let T be the Tax Rate = 0.18
//   Let D be the Desired Sum = 1100.00
//
//
// After 1st Year -->
//   P = 1041.00
// After 2nd Year -->
//   P = 1083.86
// After 3rd Year -->
//   P = 1128.30

function calculateYears(principal, interest, tax, desired) {
  for (var i=0; principal<desired; i++) {
    principal = (principal + principal*interest) - (principal*interest)*tax
  }
  return i;
}

//while loop
function calculateYears(principal, interest, tax, desired) {
    var years = 0;
    while(principal < desired){
      principal += (principal * interest) * (1 - tax);
      years++;
    }
    return years;
}

//clever
function calculateYears(principal, interest, tax, desired) {
  return Math.ceil(
    Math.log(desired / principal) /
    Math.log(1 + interest * (1 - tax))
  );
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Your task is to write function findSum.
//
// Upto and including n, this function will return the sum of all multiples of 3 and 5.
//
// For example:
//
// findSum(5) should return 8 (3 + 5)
//
// findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)

function findSum(n) {
  var result = [];
  for (var i = n; i > 0; i--) {
    result.push([0,i,i][(i%3===0)+(i%5===0)])
  }
  return result.reduce((a,b)=>a+b);
}

//more simple and easy
function findSum(n) {
  let result = 0;
  for (let i = 0; i <= n; i += 1) {
    if (i % 3 ===0 || i % 5 === 0) result += i
  }
  return result
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Classic factorial counting on Javascript
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n-1)
}
// Your objective is to complete a recursive function reverse() that receives str as String and returns the same string in reverse order

function reverse(str) {
    if (str.length === 0) {
        return "";
    }

    return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
}

// Here, reverse("abc") would be evaluated like this

// "c" + reverse("ab")
// "c" + ("b" + reverse("a"))
// "c" + ("b" + ("a" + reverse("")))     // Hits the `base condition` of recursion
// "c" + ("b" + ("a" + ""))              // Unwinding begins here
// "c" + ("ba")
// "cba"

function reverse(str) {
    return str.length < 2 ? str : reverse(str.slice(1)) + str[0];
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns N.
//
// For example:
//
// [2, 4, 0, 100, 4, 11, 2602, 36]
//
// Should return: 11
//
// [160, 3, 1719, 19, 11, 13, -21]
//
// Should return: 160

const findOutlier = (nums) => {
  const odds = nums.filter(x=>x%2!==0),
        evens = nums.filter(x=>x%2===0);
  return odds.length > 1 ? evens[0] : odds[0]
}

//another good solution
function findOutlier(integers){
  var res;
  var odd = integers.filter(function(e){
    if(e%2 != 0){
      res = e;
    };
    return e%2 == 0;
  });

  return odd.length>1 ? res : odd.pop();
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// In a factory a printer prints labels for boxes. For one kind of boxes the printer has to use colors which, for the sake of simplicity, are named with letters from a to m.
//
// The colors used by the printer are recorded in a control string. For example a "good" control string would be aaabbbbhaijjjm meaning that the printer used three times color a, four times color b, then one time color a...
//
// Sometimes there are problems: lack of colors, technical malfunction and a "bad" control string is produced e.g. aaaxbbbbyyhwawiwjjjwwm.
//
// You have to write a function printer_error which given a string will output the error rate of the printer as a string representing a rational whose numerator is the number of errors and the denominator the length of the control string. Don't reduce this fraction to a simpler expression.
//
// The string has a length greater or equal to one and contains only letters from ato z.

printerError = (n) => {
  let numerator = 0,
      badLetters = ['n','o','p','q','r','s','t','u','v','w','x','y','z'];
  for (let i = 0; i <= n.length; i++) {
    if (badLetters.indexOf(n[i]) !== -1) {
      numerator++
    }
  }
  return numerator + '/' + n.length
}

//regex
function printerError(s) {
    return s.match(/[^a-m]/g).length + "/" + s.length;
}

//best non-regex answer (uses unicode to 'rank' letters)
function printerError(s) {
  var count = 0;
  for(var i = 0; i < s.length; i++) {
    if (s[i] > "m") {
      count++;
    }
  }
  return count+"/"+s.length;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Don't give me five!
//
// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
//
// Examples:
//
// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!
//
// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
//
// Have fun coding it and please don't forget to vote and rank this kata! :-)
//
// I have also created other katas. Take a look if you enjoyed this kata!

dontGiveMeFive = (start, end) => {
  let result = 0;
  for (let i = start; i <= end; i++) {
     if (i.toString().split('').indexOf('5')===-1){
       result++
     }
  }
  return result
}

//slim es6 things
const dontGiveMeFive=(s,e)=>[...Array(e-s+1)].reduce((r,_,n)=>r+!/5/.test(n+s),0)

//nice
function dontGiveMeFive(start, end)
{
  return Array.from(Array(end-start+1),(e,i)=>i+start)
          .filter((e)=>(''+e).indexOf('5')===-1)
          .length;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Given an array of one's and zero's convert the equivalent binary value to an integer.
//
// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1

const binaryArrayToNumber = arr => parseInt(arr.join(''), 2);

//codewars
function binaryArrayToNumber(arr) {
  return arr.reduce( (a, b) => a << 1 | b );
}

//shows the magic
const binaryArrayToNumber = arr =>
 ((arr[0]) ? 8 : 0) +
 ((arr[1]) ? 4 : 0) +
 ((arr[2]) ? 2 : 0) +
 ((arr[3]) ? 1 : 0);

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Make a program that filters a list of strings and returns a list with only your friends name in it.
//
// If a name has 4 letters in it, you can be sure that it has to be a friend of yours!
//
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

friend=f=>f.filter(x=>x.length==4)

//best read
function friend(friends){
  return friends.filter(n => n.length === 4)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Find the smallest integer in the array.
//
// Given an array of integers your solution should find the smallest integer. For example:
// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
//
// You can assume, for the purpose of this kata, that the supplied array will not be empty.


class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args)
  }
}
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.
//
// Your mission:
// Write a function called checkCoupon to verify that a coupon is valid and not expired. If the coupon is good, return true. Otherwise, return false.
//
// A coupon expires at the END of the expiration date. All dates will be passed in as strings in this format: "June 15, 2014"

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  currentDate = new Date(currentDate)
  expirationDate = new Date(expirationDate)
  return (currentDate <= expirationDate) && enteredCode===correctCode
}
//slimmed down
const checkCoupon = (eC, cC, cD, eD) => new Date(cD) <= new Date(eD) && eC===cC

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// You have a sequence of positive numbers starting with 1, but one number is missing!
//
// Find out the missing number; if the sequence is not broken, you should return 0. Each sequence always increments by 1.
//
// In short: an invalid sequence (a string with non numeric character) must return 1, an already complete (or empty) sequence must return 0; a broken sequence with more than one number missing should return the lowest missing number; otherwise return the missing number.
//
// Note that the input may be with random order.
//
// E.g.
//
// findMissingNumber("1 3 2 5") // returns 4, because 4 is missing
// findMissingNumber("1 2 3 4") // returns 0, because the sequence isn't broken
// findMissingNumber("1 5") // returns 2, because the sequence is missing more than one number and 2 is the lowest between 2, 3 and 4
// findMissingNumber("2 1 4 3 a") // returns 1, because it's an invalid sequence. in this case, it's invalid because contain a non numerical character
const findMissingNumber = (s) => {
  if (s==='') return 0;
  s = s.split(' ').sort((a,b)=>a-b).map(x=>parseInt(x));
  console.log(s)
  if (s.includes(NaN)) return 1
  if (s[0]!==1) return 1
  if (s[s.length-1]!==s.length) {
    for (let i = 0; i <s.length-1; i++) {
      if (s[i+1]!==s[i]+1) {
        return s[i]+1
      }
    }
  }
  return 0
}

//codewars top
function findMissingNumber(sequence){
  if (sequence === "") return 0;
  if (!/^(\d+ )+\d+$/gi.test(sequence)) return 1;
  var arr = sequence.split(' ').map(x => +x);
  var max = Math.max(...arr);
  for(var i = 1; i < max; ++i)
    if (arr.find(x => x == i) == undefined) return i;
  return 0;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer. Square all numbers k (0 <= k <= n) between 0 and n. Count the numbers of digits d used in the writing of all the k**2. Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.
//
// Examples:
//
// n = 10, d = 1, the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
// We are using the digit 1 in 1, 16, 81, 100. The total count is then 4.
//
// nb_dig(25, 1):
// the numbers of interest are
// 1, 4, 9, 10, 11, 12, 13, 14, 19, 21 which squared are 1, 16, 81, 100, 121, 144, 169, 196, 361, 441
// so there are 11 digits `1` for the squares of numbers between 0 and 25.
// Note that 121 has twice the digit 1

const nbDig = (n, d) => {
  let result;
  d===0?result=1:result=0
  n = [...Array(n).keys()].map(x=>{
  let y = (x+1)*(x+1)
  result += y.toString().split('').filter(x=>x===d.toString()).length
  })
  return result
}

//codewars
function nbDig(n, d) {
var res=0;
    for (var g=0;g<=n;g++){
      var square=(g*g+"").split("");
      square.forEach((s)=>s==d?res++:null)
    }return res;
}

//regex
const nbDig = (n, d) => {
  let re = new RegExp(d, 'g');
  return Array(...Array(n + 1))
    .reduce((s, v, i) => s + ((i * i + '').match(re) || []).length, 0);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Suppose we could access yesterday's stock prices as an array, where:
//
// The values are the price in dollars of Apple stock.
// A higher index indicates a later time.
// So if the stock cost $500 at 10:30am and $550 at 11:00am, then:
//
// stockPricesYesterday[60] = 500;
//
// Write an efficient function that takes stockPricesYesterday and returns the best profit I could have made from 1 purchase and 1 sale of 1 Apple stock yesterday.
//
// For example:
//
//   var stockPricesYesterday = [10, 7, 5, 8, 11, 9];
//
// getMaxProfit(stockPricesYesterday);
// // returns 6 (buying for $5 and selling for $11)

var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

const getMaxProfit = (arr) => {
  let margins = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      margins.push(arr[j]-arr[i])
    }
  }
  return Math.max(...margins)
}

getMaxProfit(stockPricesYesterday);


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// Write a function getProductsOfAllIntsExceptAtIndex() that takes an array of integers and returns an array of the products.
//
// For example, given:
//
//   [1, 7, 3, 4]
//
// your function would return:
//
//   [84, 12, 28, 21]
//
// by calculating:
//
//   [7 * 3 * 4,  1 * 3 * 4,  1 * 7 * 4,  1 * 7 * 3]


let nums = [1, 7, 3, 4]

const gPOAIEAI = (arr) => arr.map((x,i) =>[...arr.slice(0,i), ...arr.slice(i+1)].reduce((a,b)=>a*b))

gPOAIEAI(nums)


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






////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
