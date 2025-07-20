//Modules protects their variables and functions from leaking into the global scope

console.log("Sum module is running");
var x="Hello"; // This variable is local to this module
function calculateSum(a, b) { // ES Module syntax for exporting a function
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
}

module.exports = { calculateSum };

// module.exports.x = x; // Exporting the variable x        Another Way to export
// module.exports.calculateSum = calculateSum; // Exporting the function calculateSum
