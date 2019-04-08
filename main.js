var whichCalc = prompt("Which calculator would you like to use? Basic (b) or Advanced(a)?");

if (whichCalc.toLowerCase = "b"){
    var firstNumber = prompt("Please enter the first number:");
    var operation = prompt("Please select the operation(+, -, *, /) you'd like to use:");
    var secondNumber = prompt("Please enter the second number:");

    switch(operation){
      case "+":
        var result = Number(firstNumber) + Number(secondNumber);
        alert(firstNumber + "+" + secondNumber + "=" + result);
        break;
      case "-":
        var result = Number(firstNumber) - Number(secondNumber);
        alert(firstNumber + "-" + secondNumber + "=" + result);
        break;
      case "*":
        var result = Number(firstNumber) * Number(secondNumber);
        alert(firstNumber + "*" + secondNumber + "=" + result);
        break;
      case "/":
        var result = Number(firstNumber) / Number(secondNumber);
        alert(firstNumber + "/" + secondNumber + "=" + result);
        break;
    }

}
