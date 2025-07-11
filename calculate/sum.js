//Modules protects their variables and functions from leaking into the global scope

console.log("Sum module is running");
var x="Hello"; // This variable is local to this module
function calculateSum(a, b) { // ES Module syntax for exporting a function
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
}

// module.exports = calculateSum; // Exporting the function to be used in other files
// Note: In Node.js, we typically use module.exports or exports to export functions or variables
console.log(module.exports); // This will show what is being exported
module.exports = { calculateSum, x };

// module.exports.x = x; // Exporting the variable x        Another Way to export
// module.exports.calculateSum = calculateSum; // Exporting the function calculateSum
