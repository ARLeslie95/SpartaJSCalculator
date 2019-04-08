var whichCalc = prompt("Which calculator would you like to use? Basic (b) or Advanced(a)?");

if (whichCalc == "b"){
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
      default:
        break;
    }
}
else if (whichCalc == "a"){
  var operation = prompt("Would you like to use the Power function(p), or the Square Root function(s)?")
  switch (operation) {
    case "p":
      var base = prompt("Please enter the base number:");
      var index = prompt("Please enter the power you would like to raise to:")
      var result = Number(base) ** Number(index);
      alert(base + " raised to the power of " + index + " = " + result);
      break;
    case "s":
      var firstNumber = prompt("Please enter the number you wish to find the root of:");
      var result = Math.sqrt(Number(firstNumber));
      alert("The square root of " + firstNumber + " = " + result);
      break;
    default:
      break;

  }
}
