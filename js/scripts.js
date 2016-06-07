/*This file is for your custom js.  All yours*/
$(function() {
  var input = parseInt(prompt("Enter a number:"));
  var output = [];
  var allNumbers = [];
  var square = Math.sqrt(input)
  for (i=0; i <= input; i++) {
      allNumbers.push(i);
  }
  for (i = 2; i <= square; i++) {
    if (allNumbers[i]) {
      for (var j = i * i; j < input; j += i) {
        allNumbers[j] = false;
      }
    }
  }
  debugger;
  for (var i = 2; i < input; i++) {
    if(allNumbers[i]) {
      output.push(i);
    }
  }

  });
