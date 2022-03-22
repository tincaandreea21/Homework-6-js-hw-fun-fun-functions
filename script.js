// Question 1
// 1. local;
// 2. yes;
// 3. 'Aloha!'

// Question 2
// 1. global
// 2. yes
// 3. '5'

// Question 3
// 1. local
// 2. out of scope
// 3. no
// 4. "snap pea"
// 5. not found

// Question 4
// 1. global
// 2. global
// 3."Superman"
// 4. "Batman"
// 5. no

// Question 5
// 1. global
// 2. "beep"
// 3. function declaration
// 4. error
// 5. "beep"
// 6. "beep " "beep "
// 7. "beep " "beep "

makeNoise();

function makeNoise() {
  beep = "beep";
  console.log(beep);
}
console.log(beep);
// Question 6

var sumOfNums = function (numsArray) {
  // Your Code Here
  let sum = 0;
  for (let i = 0; i < numsArray.length; i++) {
    sum += numsArray[i];
  }
  return sum;
};

// Question 7

var numsGreaterThanTen = function (numsArray) {
  // Your Code Here
  let arr = [];
  for (let i = 0; i < numsArray.length; i++) {
    if (numsArray[i] > 10) {
      arr.push(numsArray[i]);
    }
  }
  return arr;
};

// Question 8

var allStartingWithA = function (words) {
  // Your Code Here
  let result = true;
  for (let i = 0; i < words.length; i++) {
    if (words[i].charAt(0) === "a" || words[i].charAt(0) === "A") {
      result = true;
    } else {
      return false;
    }
  }
  return result;
};

// Question 9
var hasAtLeastNVowels = function (word, n) {
  // Your Code Here
};

// Question 10
var buildObjectFromWords = function (words) {
  let result = {};
  let key = "";
  let value = 0;
  for (let i = 0; i < words.length; i++) {
    key = words[i];
    value = words[i].length;
    result[key] = value;
  }
  return result;
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allStartingWithA: allStartingWithA,
  hasAtLeastNVowels: hasAtLeastNVowels,
  buildObjectFromWords: buildObjectFromWords,
};
