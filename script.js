// Question 1
// 1. The variable `greeting` is `______` to the `sayGreeting` function.
// 2. Can the function access `greeting`?
// 3. What happens when you invoke `sayGreeting`?
// 4. :dart: Commit -m "Question 1 done"

var sayGreeting = function () {
  var greeting = "Aloha!";
  console.log(greeting);
};

// Question 1
// 1.
// 2.
// 3.

// Question 2
// 1. The variable `number` is `_______` to the `addition` function.
// 2. Can the function access `number`?
// 3. What happens when you invoke `addition`?
// 4. :dart: Commit -m "Question 2 done"

var number = 5;

var addition = function () {
  console.log(number);
};

// Question 2
// 1.
// 2.
// 3.
// Question 3

// 1. The variable `vegetable` is `_______` to the `firstFunction` function.
// 2. The variable `vegetable` is `_______` to the `second Function` function.
// 3. Can the `secondFunction` access `vegetable`?
// 4. What happens when you invoke `firstFunction`?
// 5. What happens when you invoke `secondFunction`?
// 6. :dart: Commit -m "Question 3 done"

var firstFunction = function () {
  var vegetable = "snap pea";
  console.log(vegetable);
};

var secondFunction = function () {
  console.log(vegetable);
};

// Question 3
// 1.
// 2.
// 3.
// 4.
// 5.

// Question 4

// 1. The variable `superhero` is `_______` to the `fightSuperman` function.
// 2. The variable `superhero` is `_______` to the `theRealHero` function.
// 3. What happens when you invoke `fightSuperman`?
// 4. What happens when you invoke `theRealHero`?
// 5. Does `theRealHero` have access to `superhero` inside `fightSuperman`?
// 4. :dart: Commit -m "Question 4 done"

var superhero = "Batman";

var fightSuperman = function () {
  var superhero = "Superman";
  console.log(superhero);
};

var theRealHero = function () {
  console.log(superhero);
};
// Question 4
// 1.
// 2.
// 3.
// 4.
// 5.

// Question 5
// 1.
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.

// Question 6

var sumOfNums = function (numsArray) {
  // Your Code Here
};

// Question 7

var numsGreaterThanTen = function (numsArray) {
  // Your Code Here
};

// Question 8

var noneHaveTwoOrMoreVowels = function (words) {
  // Your Code Here
};

// Question 9
var hasAtLeastNVowels = function (word, n) {
  // Your Code Here
};

// Question 10
var buildObjectFromWords = function (words) {
  // Your Code Here
};

/// DO NOT EDIT BELOW THIS LINE ///
module.exports = {
  sumOfNums: sumOfNums,
  numsGreaterThanTen: numsGreaterThanTen,
  noneHaveTwoOrMoreVowels: noneHaveTwoOrMoreVowels,
  buildObjectFromWords: buildObjectFromWords,
  allStartingWithA: allStartingWithA,
};
