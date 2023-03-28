function isPalindrome(word) {
  // Write your algorithm here
  const lowercaseWord = word.toLowerCase();
  return lowercaseWord === lowercaseWord.split("").reverse().join("");
}

/* 
  Add your pseudocode here
  convert the input word to lowercase
  reverse the lowercase word
  compare the reversed lowercase word with the original lowercase word
  if the reversed lowercase word is equal to the original lowecase word, return true. Othoerwise, return false
*/

/*
  Add written explanation of your solution here
  The function takes in a string as an arguement and converts it to lowercase. It then reverses the lowercase string using `split()` , `reverse()` and `join()` methods, and compares the reversed lowecase string with the original lowercase string. If they are equal, the function returns true, indicating that the input string is a palindrome. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

const word = "RADAR";
const isPal = isPalindrome(word);
console.log(`"${word}" is a palindrome: ${isPal}`);
console.log("=>", isPalindrome("level"));
console.log("=>", isPalindrome("pop"));
console.log("=>", isPalindrome("rotator"));
console.log("=>", isPalindrome("noon"));
console.log("=>", isPalindrome("noom"));

