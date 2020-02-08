const pr = "practice";
// this is a comment
const ed = "edit";
// another comment
let name = "Jenny";
// We reserve some space in memory and 'name' it 'numOfYears'
let numOfYears = 0;
// 'let' allows us to re-assign.
// This REFERENCES 'numOfYears' in memory - RIPS OUT the '9' and REPLACES it with a '10'.
numOfYears = 23;
// Can use strings to attach a string to a variable
// JS is a DYNAMICALLY TYPED LANGUAGE.
numOfYears = "ten";
// comment
console.log("My name is " + name + ".");

// Template literals use INTERPOLATION
// INTERPOLATION occurs inside the '${}' meaning it automatically fills in the information without having to use '+'
console.log(`My name is ${name}.`);

const timeOfDay = "afternoon";

const greeting = `Good ${timeOfDay}`;

console.log(greeting);
console.log(`Good ${timeOfDay}`);

let something = undefined; //NEVER EVER DO THIS!

console.log(something);
// 'null' represents the deliberate assignment of a 'nothing' value.
let someone = null; //RARELY DO THIS!

const useless = null;

console.log(someone);

// console.log(somethingElse);

const x = 3;
const y = 5;

console.log(typeof x);
console.log(typeof y);

// create a variable called "name" that references a string
name = "Jenny";
// create a variable called "favoriteSong" that references a string
let favoriteSong = "Atlas Novus";
// create a variable called "wage" that references a number
let wage = 2000;
// create a variable called "age" that references a number
let age = 22;
// create a variable called "onlyChild" that references a boolean
const onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "pizza";
// print the data type of "favoriteThing"
console.log(favoriteThing);
// ! You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "I'll Wear Black to My Own Vigil";
// ! You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 23;
// ! Happy Birthday!
// Reassign "age" to a new value
age = 23;
// ! You got a big raise at work.
// Reassign "wage" to a new value
wage = 3000;
// ! Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;
// use "console.log()" and "+" to print a sentence that includes two variables
console.log("My name is " + name + " and I am now " + age + " years old.");

// 'const' is not about IMMUTABILITY (ability to change) - it's about NO REASSIGNMENT.
// OBJECTS can change. PRIMITIVES cannot.
const me = {};
// I CANNOT REASSIGN 'me'
// me = "23";
// I CAN reassign the VALUE of the key inside of 'me'
me.name = "Jenny";

console.log("me", me);

const food = {
  best: {
    pizza: "margherita",
    pasta: "lasagna"
  },
  worst: "anchovies"
};

console.log("food", food);
console.log(food.best.pizza);

// Error from doing 'undefined.das'
// console.log(food.blah.das);

// Cannot attach "." notation after a primitive
// console.log(food.'number'.pizza) = number is a primitive

console.log(food["best"]);

// let keyINeed = "age";

// console.log(me.keyINeed);
// I must use BRACKET NOTATION if I need to use a VARIABLE for my key.
// No quotation marks, looks for variable assigned
// console.log(me[keyINeed]);
// undefined, looks for a string of "keyINeed"
// console.log(me["keyINeed"]);

let favorite = "pizza";

console.log(food.best[favorite]);
