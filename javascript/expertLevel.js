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
