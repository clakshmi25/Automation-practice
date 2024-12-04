const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class BasicCalculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error("Division by zero is not allowed");
        }
        return a / b;
    }

    modulus(a, b) {
        return a % b;
    }
}

class AdvancedCalculator extends BasicCalculator {
    sin(x) {
        return Math.sin(x);
    }

    cos(x) {
        return Math.cos(x);
    }

    tan(x) {
        return Math.tan(x);
    }

    log(x) {
        if (x <= 0) {
            throw new Error("Logarithm undefined for non-positive numbers");
        }
        return Math.log(x);
    }

    pow(base, exponent) {
        return Math.pow(base, exponent);
    }

    sqrt(x) {
        if (x < 0) {
            throw new Error("Square root of negative number is not real");
        }
        return Math.sqrt(x);
    }
}

const calc = new AdvancedCalculator();

function askOperation() {
    console.log(`
Choose an operation:
1. Add
2. Subtract
3. Multiply
4. Divide
5. Power
6. Square Root
7. Modulus
8. Sin Theta
9. Cos Theta
10.Tan Theta
11.Log function
15. Exit
    `);
    

    rl.question("Enter the operation number: ", (op) => {
        if (op === "15") {
            console.log("Exiting... Goodbye!");
            rl.close();
            return;
        }
        handleOperation(parseInt(op));
    });
}

function handleOperation(op) {
    if (op < 1 || op > 12) {
        console.log("Invalid choice. Try again.");
        return askOperation();
    }

    if (op === 6) {
        rl.question("Enter a number: ", (num) => {
            try {
                const result = calc.sqrt(parseFloat(num));
                console.log(`Result: ${result}`);
            } catch (err) {
                console.error(err.message);
            }
            askOperation();
        });
    } 
    else if (op === 8) {
        rl.question("Enter a number: ", (num) => {
            try {
                const result = calc.sin(parseFloat(num));
                console.log(`Result: ${result}`);
            } catch (err) {
                console.error(err.message);
            }
            askOperation();
        });
    } 
    else if (op === 9) {
        rl.question("Enter a number: ", (num) => {
            try {
                const result = calc.cos(parseFloat(num));
                console.log(`Result: ${result}`);
            } catch (err) {
                console.error(err.message);
            }
            askOperation();
        });
    } 
    else if (op === 10) {
        rl.question("Enter a number: ", (num) => {
            try {
                const result = calc.tan(parseFloat(num));
                console.log(`Result: ${result}`);
            } catch (err) {
                console.error(err.message);
            }
            askOperation();
        });
    } 
    else if (op === 11) {
        rl.question("Enter a number: ", (num) => {
            try {
                const result = calc.log(parseFloat(num));
                console.log(`Result: ${result}`);
            } catch (err) {
                console.error(err.message);
            }
            askOperation();
        });
    }  
    else {
        rl.question("Enter the first number: ", (num1) => {
            rl.question("Enter the second number: ", (num2) => {
                try {
                    let result;
                    switch (op) {
                        case 1:
                            result = calc.add(parseFloat(num1), parseFloat(num2));
                            break;
                        case 2:
                            result = calc.subtract(parseFloat(num1), parseFloat(num2));
                            break;
                        case 3:
                            result = calc.multiply(parseFloat(num1), parseFloat(num2));
                            break;
                        case 4:
                            result = calc.divide(parseFloat(num1), parseFloat(num2));
                            break;
                        case 5:
                            result = calc.pow(parseFloat(num1), parseFloat(num2));
                            break;
                        case 7:
                            result = calc.modulus(parseFloat(num1), parseFloat(num2));
                            break;                                                                                  
                    }
                    console.log(`Result: ${result}`);
                } catch (err) {
                    console.error(err.message);
                }
                askOperation();
            });
        });
    }
}


askOperation();