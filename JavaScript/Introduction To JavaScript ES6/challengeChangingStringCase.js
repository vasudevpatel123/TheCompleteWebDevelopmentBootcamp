var name = prompt("Enter your name: ");
var firstCharOfName = name.slice(0,1);
var upperFirstCharOfName = firstCharOfName.toUpperCase();
var stringLength = name.length;
var remainingCaseOfName = name.slice(1,stringLength)
remainingCaseOfName = remainingCaseOfName.toLowerCase();
alert("Hello, "+upperFirstCharOfName+remainingCaseOfName);
