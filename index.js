function isPalindrome(word) {
  // Write your algorithm here
    for (let i = 0; i < word.length / 2; i++) {
      const j = word.length - 1 - i;
      if (word[i] !== word[j]) return false;
    }
    return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("dad"))

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: false");
  console.log("=>", isPalindrome("fragile"));
}

module.exports = isPalindrome;
