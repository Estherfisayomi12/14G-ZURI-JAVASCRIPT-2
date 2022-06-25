let number1 = Number(prompt("What is the first number?"));
while (isNaN(number1)) {
  number1 = Number(prompt("The first number is invalid, Enter a valid number"));
}
let number2 = Number(prompt("What is the second number?"));
while (isNaN(number2)) {
  number2 = Number(
    prompt("The second number is invalid, Enter a valid number")
  );
}
let operator = prompt("Choose from the following operator: + or - or * or /");

if (number1 === NaN && number2 === NaN) {
  alert("⛔ not a valid number");
} else if (operator === "+") {
  alert("Your answer is " + (number1 + number2));
} else if (operator === "-") {
  alert("Your answer is " + (number1 - number2));
} else if (operator === "*") {
  alert("Your answer is " + number1 * number2);
} else if (operator === "/") {
  alert("Your answer is " + number1 / number2);
} else {
  alert("⛔ Invalid Operator");
}
