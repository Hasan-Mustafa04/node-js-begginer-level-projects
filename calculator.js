const readline = require("readline");

// Create interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask the user for the first number
rl.question("Enter the first number: ", (num1) => {
  rl.question("Enter the second number: ", (num2) => {
    rl.question("Choose operation (+, -, *, /,%): ", (operation) => {
      // Convert input to numbers
      const a = parseFloat(num1);
      const b = parseFloat(num2);
      let result;

      // Choose operation
      if (operation === "+") {
        result = a + b;
      } else if (operation === "-") {
        result = a - b;
      } else if (operation === "*") {
        result = a * b;
      } else if (operation === "/") {
        result = b !== 0 ? a / b : "Cannot divide by zero";
      }
      else if (operation === "%") {
        result = a % b;
        
      } else {
        result = "Invalid operation";
      }

      console.log(`Result: ${result}`);
      rl.close(); // Close input
    });
  });
});
