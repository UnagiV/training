// 9. Palindrome Number
// Easy
// Topics
// Companies
// Hint

// Given an integer x, return true if x is a
// palindrome
// , and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.

// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// Constraints:

//     -231 <= x <= 231 - 1

// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
// const isPalindrome = function (x) {
//   const numInStr = x.toString();
//   let reversedString = "";
//   for (let index = numInStr.length; index > 0; index--) {
//     reversedString += numInStr[index - 1];
//   }
//   return reversedString === numInStr ? true : false;
// };

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }
  let revertedNumber = 0;
  while (x > revertedNumber) {
    revertedNumber = revertedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  return x == revertedNumber || x == Math.floor(revertedNumber / 10);
};

isPalindrome(122);
