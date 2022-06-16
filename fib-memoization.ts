//Find a given number in a fibonacci sequence
const fib = (n: number) => {
  if (n <= 2) return 1;

  return fib(n - 1) + fib(n - 2);
};
//time complexity = O(2^n) (2 multiplied by itself n[our argument integer] number of times = the number of function calls)
//space complexity = O(n) (space taken is only equal to the height of the tree, i.e the max stack depth of n)

// O(2^n) is terrible time. fib(50) = 1,123,899,906,842,624 steps (function calls).

// console.log(fib(6));
// console.log(fib(7));
// console.log(fib(8));

/*
fib(3);
return fib(2)[1] + fib(1)[1];
((2))

fib(4);
return fib(3)[2] + fib(2)[1]
((3))

fib(5);
return fib(4)[3] + fib(3)[2];
((5))

fib(6);
return fib(5)[5] + fib(4)[3]
((8))

fib(7);
return fib(6)[8] + fib(5)[5];
((13))
*/

// Dynamic Programming
// The solution to the brute force: Memoization.
// Recognizing subpatterns, and caching their values to avoid going down recursion trees we don't need to.
// i.e, never call fib(5) twice. Call it once, save the value, reference it in future calls.

//Implementation solution
// create js obj(memo), keys will be arg to fn, value will be return value

const memoFib = (n: number, memo = {}) => {
  //Check if result has already been run
  if (n in memo) return memo[n];
  //Check base case
  if (n <= 2) return 1;

  //If neither, calculate value and save it to memo
  memo[n] = memoFib(n - 1, memo) + memoFib(n - 2, memo);
  //Return value
  return memo[n];
};

//Time complexity = O(2n), which simplifies to O(n); Linear!!
//Space complexity = O(n)

console.log(memoFib(6));
console.log(memoFib(9));
console.log(memoFib(50));
