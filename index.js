#! /usr/bin/env node
console.log("Code with Muhammad Ali");
import inquirer from "inquirer";
//  * @description - This is a simple calculator program that takes two numbers and an operator and performs the operation on the two numbers.
let answer = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select One Operator to Perform Operations",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
//  * @description - This is a simple calculator program that takes two numbers and an operator and performs the operation on the two numbers.
if (answer.operator == "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator == "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator == "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator == "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Enter the Valid Number");
}
