// test 1

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

// makeNoise();
// var makeNoise = function () {
//   beep = "beep";
//   console.log(beep);
// };
// console.log(beep);
// Question 6

var sumOfNums = function (numsArray) {
  // Your Code Here
  let sum = 0;
  for (let i = 0; i < numsArray.length; i++) {
    sum += numsArray[i];
  }
  return sum;
};
// if (numsArray.length ===0){
//   return 0
// } else {
//   return numsArray.reduce((prev, curr) => prev, curr, 0)
// }

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

var allStartingWithA = function (words) {
  if (words.length === 0) {
    return true;
  } else {
    let wordsWithNotA = words.some(
      (item) => !(item.startsWith("a") || item.startsWith("A"))
    );
    if (wordsWithNotA) {
      return false;
    } else return true;
  }
};

// Question 9
var hasAtLeastNVowels = function (word, n) {
  let result = "";
  if (n < 0) {
    result = null;
  } else if (word.match(/[aeiou]/gi).length >= n) {
    result = true;
  } else {
    result = false;
  }
  return result;
};
console.log(hasAtLeastNVowels("DANGROUS", 3));

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

// let obj = {
//   cat: 3,
//   house: 5,
//   elephant: 8,
//   'my-elephant': 6
// };

// obj.cat
// obj['my-elephant']

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  allStartingWithA: allStartingWithA,
  hasAtLeastNVowels: hasAtLeastNVowels,
  buildObjectFromWords: buildObjectFromWords,
};
