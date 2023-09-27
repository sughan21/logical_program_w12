//1.Write a function that checks if two strings are anagrams of each other (contain the same characters in a different order).

function areAnagrams(str1, str2) {
  str1 = str1.replace(/\s/g, "").toLowerCase();
  str2 = str2.replace(/\s/g, "").toLowerCase();

  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

const str1 = "listen";
const str2 = "silent";
console.log(areAnagrams(str1, str2));

//2. Given an array containing numbers from 1 to N with one number missing, write a function to find

function findMissingNumber(arr) {
  const n = arr.length + 1;
  let totalSum = (n * (n + 1)) / 2;

  for (const num of arr) {
    totalSum -= num;
  }

  return totalSum;
}

const arr = [1, 2, 4, 5, 6];
const missingNumber = findMissingNumber(arr);
console.log(missingNumber);

//3. Write a function to find common elements between two arrays.

function findCommonElements(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
const commonElements = findCommonElements(arr1, arr2);
console.log(commonElements);

//4. Write a function to implement the binary search algorithm to find an element in a sorted array.

//5. Write a function to find missing elements in a given range within an array.

function findMissingElements(value, rangeStart, rangeEnd) {
  const missingElements = [];
  for (let i = rangeStart; i <= rangeEnd; i++) {
    if (!value.includes(i)) {
      missingElements.push(i);
    }
  }
  return missingElements;
}

const value = [1, 3, 4, 7, 9];
const rangeStart = 1;
const rangeEnd = 10;
const missingElements = findMissingElements(value, rangeStart, rangeEnd);
console.log(missingElements);

//6. Write a function to validate if the parentheses in an expression are balanced.

function validateParentheses(expression) {
  const stack = [];

  for (let i = 0; i < expression.length; i++) {
    if (expression[i] === "(") {
      stack.push("(");
    } else if (expression[i] === ")") {
      if (stack.length === 0 || stack.pop() !== "(") {
        return false;
      }
    }
  }

  return stack.length === 0;
}

const expression1 = "((a + b) - (c * d))";
const expression2 = "(a + b) - (c * d))";
console.log(validateParentheses(expression1));
console.log(validateParentheses(expression2));

//7. Write a function to perform basic string compression using the counts of repeated characters.

function compressString(inputString) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === inputString[i + 1]) {
      count++;
    } else {
      compressed += inputString[i] + count;
      count = 1;
    }
  }

  return compressed.length < inputString.length ? compressed : inputString;
}

const inputString = "aabcccccaaa";
const compressedString = compressString(inputString);
console.log(compressedString);

//8. Write a function to reverse a given integer.

function reverseNumber(number) {
  let reversed = 0;

  while (number !== 0) {
    const digit = number % 10;
    reversed = reversed * 10 + digit;
    number = (number - digit) / 10;
  }

  return reversed;
}

const number1 = 12345;
const number2 = -9876;
console.log(reverseNumber(number1));
console.log(reverseNumber(number2));
