//Modules protects their variables and functions from leaking into the global scope

console.log("Sum module is running");
var x="Hello"; // This variable is local to this module
function calculateSum(a, b) {
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
}

// module.exports = calculateSum; // Exporting the function to be used in other files
// Note: In Node.js, we typically use module.exports or exports to export functions or variables
module.exports = { calculateSum, x };
