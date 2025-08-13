// Write a JavaScript function that checks if a given string is a palindrome (reads the same backward as forward).

function isPalindrome(str) {
  const cleanedStr = str.toLowerCase(); 

  console.log(cleanedStr.split(''));
  const reversedStr = cleanedStr.split('').reverse().join('');

  return cleanedStr === reversedStr;
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello"));   // false                  
