//require('./xyz.js'); // Importing xyz.js file  one module to another
// require('./sum.js'); // Importing sum.js file       .js is optional in Node.js
//import { x, calculateSum } from './sum.js';
// const obj = require('./sum.js'); OLD WAY          // Importing the function from sum.js

// Destructuring on the Fly
  // const { calculateSum, x } = require('./calculate/sum.js'); // Importing specific exports
  // const { calculateMuliplication } = require('./calculate/multiply.js'); // Importing another function

  const { calculateMuliplication, calculateSum } = require('./calculate'); // Importing from index.js
 calculateSum(10, 20); // Calling the function directly
//  console.log(x); // Accessing the exported variable directly
var name1 = "Learning Node.js";

var a = 10;
var b = 20;
console.log(name1);
console.log(a + b);
calculateMuliplication(a, b); // Calling the imported function

// obj.calculateSum(a, b); // Calling the function from sum.js
// console.log(obj.x); // Accessing the exported variable from sum.js
// console.log(global);
//console.log(this); //Empty object in Node.js
//console.log(globalThis); //Global object in Node.js
//console.log(globalThis === global); //true

