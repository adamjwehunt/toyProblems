//MODERATE LEVEL JS TOY PROBLEMS

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
// Some numbers have funny properties. For example:
//
// 89 --> 8¹ + 9² = 89 * 1
//
// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
//
// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p we want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n. In other words:
//
// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
// If it is the case we will return k, if not return -1.
//
// Note: n, p will always be given as strictly positive integers.
//
// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

function digPow(n, p){
  var k = n.toString().split('').map((x,i)=>Math.pow(x,(i+p))).reduce((a,b)=>a+b)/n
  return k%1===0?k:-1
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// The new "Avengers" movie has just been released! There are a lot of people at the cinema box office standing in a huge line. Each of them has a single 100, 50 or 25 dollars bill. A "Avengers" ticket costs 25 dollars.
//
// Vasya is currently working as a clerk. He wants to sell a ticket to every single person in this line.
//
// Can Vasya sell a ticket to each person and give the change if he initially has no money and sells the tickets strictly in the order people follow in the line?
//
// Return YES, if Vasya can sell a ticket to each person and give the change. Otherwise return NO.
//
// Examples:
//
// // === JavaScript ==
//
// tickets([25, 25, 50]) // => YES
// tickets([25, 100])
//         // => NO. Vasya will not have enough money to give change to 100 dollars

function tickets(p){
  var vasya = {
    two5: 0,
    fiveO: 0,
    hundO: 0
  };

  for (var i = 0; i < p.length; i++) {

    if (p[i]===25) {
      vasya.two5 += 1
    } else if (p[i]===50) {
      vasya.fiveO += 1
      vasya.two5 -= 1
    } else if (p[i]===100) {
      if (vasya.fiveO){
        vasya.fiveO-=1;
        vasya.two5-=1
      } else {
        vasya.two5-=3
      }
        vasya.hundO += 1
    }
    if (vasya.two5<0||vasya.fiveO<0) {
      return 'NO'
    }
  }
  return 'YES'
}

//nice form
function Clerk(name) {
  this.name = name;

  this.money = {
    25 : 0,
    50 : 0,
    100: 0
  };

  this.sell = function(element, index, array) {
    this.money[element]++;

    switch (element) {
      case 25:
        return true;
      case 50:
        this.money[25]--;
        break;
      case 100:
        this.money[50] ? this.money[50]-- : this.money[25] -= 2;
        this.money[25]--;
        break;
    }
    return this.money[25] >= 0;
  };
}

function tickets(peopleInLine){
  var vasya = new Clerk("Vasya");
  return peopleInLine.every(vasya.sell.bind(vasya)) ? "YES" : "NO";
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// Description:
//
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


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Directions reduction
// … a man was given directions to go from one point to another. The directions were "NORTH", "SOUTH", "WEST", "EAST". Clearly "NORTH" and "SOUTH" are opposite, "WEST" and "EAST" too. Going to one direction and coming back the opposite direction is a needless effort. Since this is the wild west, with dreadfull weather and not much water, it's important to save yourself some energy, otherwise you might die of thirst!
//
// Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
//
// ex:
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// Test.assertSimilar(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// Test.assertSimilar(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])

//my answer
const dirReduc = (arr) => {
  for (var i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i+1] && arr[i].length === arr[i+1].length) {
      arr.splice(i,2);
      i = -1;
    }
  }
  return arr;
}

//codewars top
function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
// For example:
//
//  persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4
//                        // and 4 has only one digit
//
//  persistence(999) === 4 // because 9*9*9 = 729, 7*2*9 = 126,
//                         // 1*2*6 = 12, and finally 1*2 = 2
//
//  persistence(4) === 0 // because 4 is already a one-digit number

//good for recursion practice
const persistence = (num) => {
  let counter = 0;

  const multiply = (num) => {
    let nums = num.toString().split('');
    if (nums.length < 2) {
      return counter
    } else {
      counter++
      return multiply(nums.reduce((a,b)=>a*b))
    }
  }

  multiply(num)
  return counter
}

//codewars solution.  while loop eliminates the need for recursion
function persistence(num) {
   var times = 0;

   num = num.toString();

   while (num.length > 1) {
     times++;
     num = num.split('').map(Number).reduce((a, b) => a * b).toString();
   }

   return times;
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Create a function that returns the name of the winner in a fight between two fighters.
//
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
//
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
//
// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.
//
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }
//more recursion practice :
const declareWinner = (fighter1, fighter2, firstAttacker) => {
  const battle = () => {
    if (fighter1.health <= 0 && fighter2.health <= 0){
      return firstAttacker
    } else if (fighter1.health <= 0) {
      return fighter2.name
    } else if (fighter2.health <= 0) {
      return fighter1.name
    } else {
      fighter1.health -= fighter2.damagePerAttack
      fighter2.health -= fighter1.damagePerAttack
      return battle()
    }
  }
  return battle()
}

//codewars
function declareWinner(fighter1, fighter2, firstAttacker) {
  var fac1 = Math.ceil( fighter1.health / fighter2.damagePerAttack );
  var fac2 = Math.ceil( fighter2.health / fighter1.damagePerAttack );
  if(fac1 < fac2) {
    return fighter2.name;
  } else if(fac2 < fac1) {
    return fighter1.name;
  } else {
    return firstAttacker;
  }
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Lists are data structures composed of nested objects, each containing a single value and a reference to the next object.
//
// Here's an example of a list in JavaScript:
//
// {value: 1, next: {value: 2, next: {value: 3, next: null}}}
// In Python, lists will be represented by a preloaded LinkedList class with the members value and next. Here's an example:
//
// LinkedList(1, LinkedList(2, LinkedList(3)))
// Write a function listToArray (or list_to_array in Python) that converts a list to an array, like this:
//
// [1, 2, 3]
// Assume all inputs are valid lists with at least one value. For the purpose of simplicity, all values will be either numbers, strings, or Booleans.

//I am starting to really like recursion
const listToArray = (list) => {
  let result = []

  const addValue = (obj) => {
    if (!obj.next) {
      result.push(obj.value)
      return
    }
    result.push(obj.value)
    addValue(obj.next)
  }
  addValue(list)

  return result
}


///really cool for loop answer
function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.next)
    array.push(node.value);
  return array;
}

//better recursion
function listToArray(list) {
  return !list ? [] : [list.value].concat(listToArray(list.next));
}

//while loop
function listToArray(list) {
  var temp = [];
  while(list){
    temp.push(list.value);
    list = list.next;
  }
  return temp;
}


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

// Description:
//
// My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
//
// I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
//
// For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99. Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
//
// Example:
//
// "56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: "100 180 90 56 65 74 68 86 99"
//
// When two numbers have the same "weight", let us class them as if they were strings and not numbers: 100 is before 180 because its "weight" (1) is less than the one of 180 (9) and 180 is before 90 since, having the same "weight" (9) it comes before as a string.
//
// All numbers in the list are positive numbers and the list can be empty.


//my answer
const orderWeight = (str) => {
  if (str === "") return "";
  let array = str.split(" ").map(Number).sort(),
      unsorted = [],
      sorted = [],
      converted = [];
  for (let i=0; i<array.length; i++) {
    unsorted[i] = digitSum(array[i]);
  }
  sorted = unsorted.concat().sort((a, b)=>a-b);
  for (let i=0; i<array.length; i++) {
    converted[i] = array[unsorted.indexOf(sorted[i])];
    delete unsorted[unsorted.indexOf(sorted[i])];
  }
  return converted.join(" ");
}

const digitSum = (num) => {
  var sum = 0;
  while (num > 0) {
    sum += num%10;
    num = Math.floor(num/10);
  }
  return sum;
}


//top on codewars
function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}


////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Description:
//
// It's Christmas! You had to wait the whole year for this moment. You can already see all the presents under the Christmas tree. But you have to wait for the next morning in order to unwrap them. You really want to know, what's inside those boxes. But as a clever child, you can do your assumptions already.
//
// You know, you were a good child this year. So you may assume, that you'll only get things from your wishlist. You see those presents, you can lift them and you can shake them a bit. Now you can make you assumptions about what you'll get.
//
// Your Task
//
// You will be given a wishlist (array), containing all possible items. Each item is in the format: {name: "toy car", size: "medium", clatters: "a bit", weight: "medium"} (Ruby version has an analog hash structure, see example below)
//
// You also get a list of presents (array), you see under the christmas tree, which have the following format each: {size: "small", clatters: "no", weight: "light"}
//
// Your task is to create a list of all possible presents you might get.
//
// Rules
//
// Possible values for size: "small", "medium", "large"
// Possible values for clatters: "no", "a bit", "yes"
// Possible values for weight: "light", "medium", "heavy"
// The return value must be an array of the names of items from your wishlist, e.g. ["Toy Car", "Card Game"]
// Don't add any item more than once to the result
// The order of names in the returned array doesn't matter
// It's possible, that multiple items from your wish list have the same attribute values. If they match the attributes of one of the presents, add all of them.
// Example
//
// var wishlist = [
//     {name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light"},
//     {name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium"},
//     {name: "Card Game", size: "small", clatters: "no", weight: "light"}
// ];
//
// var presents = [
//     {size: "medium", clatters: "a bit", weight: "medium"},
//     {size: "small", clatters: "yes", weight: "light"}
// ];
//
// guessGifts(wishlist, presents); // must return ["Toy Car", "Mini Puzzle"]

const guessGifts = (list, presents) => {
  let recieved = [];
  for (i=0; i<list.length; i++) {
    for (let j=0; j<presents.length; j++) {
      if (list[i].size === presents[j].size &&
          list[i].clatters === presents[j].clatters &&
          list[i].weight === presents[j].weight &&
          recieved.indexOf(list[i].name) === -1)
        recieved.push(list[i].name);
    }
  }
  return recieved;
}

//codewars
function guessGifts(wishlist, presents) {
  return wishlist.filter(function(x){
    return presents.some(function(y){
      return x.size == y.size && x.clatters == y.clatters && x.weight == y.weight;
    });
  }).map(function(x){ return x.name; });
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Description:
//
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
//
// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)
//
// You can find some examples in the test fixtures.

function humanReadable (seconds) {
  var hours = Math.floor(seconds/3600),
      minutes = Math.floor((seconds - hours*3600)/60),
      seconds = Math.floor(seconds - hours*3600 - minutes*60)
  hoursSpot = hours > 9 ? hours : "0" + hours
  minutesSpot = minutes > 9 ? minutes : "0" + minutes
  secondsSpot = seconds > 9 ? seconds : "0" + seconds
  return hoursSpot + ":" + minutesSpot + ":" + secondsSpot
}


//codewars top
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}

////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Well met with Fibonacci bigger brother, AKA Tribonacci.
//
// As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
//
// So, if we are to start our Tribonacci sequence with [1,1,1] as a starting input (AKA signature), we have this sequence:
//
// [1,1,1,3,5,9,17,31,...]
// But what if we started with [0,0,1] as a signature? As starting with [0,1] instead of [1,1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
//
// [0,0,1,1,2,4,7,13,24,...]
// Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
//
// Signature will always contain 3 numbers; n will always be a non-negative number; if n==0, then return an empty array and be ready for anything else which is not clearly specified ;)

function tribonacci(sig,n){
  var res = sig;
  if (n < 3) {
    return sig.slice(0,n);
  }
  for (var i = 3; i < n; i++) {
    res.push((res[i-1] + res[i-2] + res[i-3]));
  }

  return res;
}

//top
function tribonacci(signature,n){
  for (var i = 0; i < n-3; i++) { // iterate n times
    signature.push(signature[i] + signature[i+1] + signature[i+2]); // add last 3 array items and push to trib
  }
  return signature.slice(0, n); //return trib - length of n
}
