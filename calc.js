// let sum = 0
// for (i=0; i<=10; i++)
// {
//     sum = sum + i
//     console.log(sum)
// }

// function sum(a,b)
// {
// return a+b
// }
// //let total = sum(2,3)
// console.log(sum(2,3))   

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a number: ', (input1) => {
    // Convert the input to a number
    const number1 = parseFloat(input1);


rl.question('Please enter another number: ', (input2) => {
        // Convert the input to a number
        const number2 = parseFloat(input2);   

console.log("Choose an option:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");

        rl.question("Enter your choice: ", (choice) => {
            switch (choice) {
                case "1":
                    function Addition(number1,number2)
                    {
                    return number1+number2
                    }
                    console.log(Addition(number1,number2)) 
                    break;
                case "2":
                    function Subtraction(number1,number2)
                    {
                    return number1-number2
                    }
                    console.log(Subtraction(number1,number2)) 
                    break;
                case "3":
                    function Multiplication(number1,number2)
                    {
                    return number1*number2
                    }
                    console.log(Multiplication(number1,number2))
                    break;
                case "4":
                    function Division(number1,number2)
                    {
                    return number1/number2
                    }
                    console.log(Division(number1,number2))
                    break;
                default:
                    console.log("Invalid choice");
            }        
    rl.close();
});
});

}
)
