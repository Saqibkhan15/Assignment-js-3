//1
// var name = prompt("Enter your city")
// if (name === "karachi") {
//   alert("Welcome to city of lights");
// }
//2
// var gender = prompt("Enter your gender")
// if (gender === "male") {
//   alert(" Good Morning Sir!");
// } else {
//   alert(" Good Morning Ma'am!");
// }
//3
// var color = prompt("Enter color of road traffic signal")
// if (color === "red") {
//   alert("Must Stop");
// } else if (color === "yellow") {
//   alert("Ready to move");
// } else {
//   alert("Move now");
// }
//4
// var fuel = +prompt("Enter fuel in litres");
// if (fuel < 0.25) {
//  alert("Please refill the fuel in your car");
// }
//5
// var a = 4; 
// if (++a === 5){ alert("given condition for variable a is true"); } // will run
// var b = 82; 
// if (b++ === 83){ alert("given condition for variable b is true"); } // will not run
// var c = 12; 
// if (c++ === 13) { alert("condition 1 is true");} // will not run
// if (c === 13) { alert("condition 2 is true"); } // will run
// if (++c < 14) { alert("condition 3 is true");} // will not run
// if (c === 14) { alert("condition 4 is true"); } // will run
//6
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("the cost equals"); 
// }// will run
//7
// if (true){
//     alert("True");
//     } //run
//     if (false){
//     alert("False");
//     } //not run
//8
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }  //run
//9
// var sub1 = +prompt("Enter marks in subject 1");
// var sub2 = +prompt("Enter marks in subject 2");
// var sub3 = +prompt("Enter marks in subject 3");
// var sub4 = +prompt("Enter the total marks");
// var per = (sub1 + sub2 + sub3) / sub4 * 100;

// if (per >= 80) {
//   document.write("Total Marks: " + sub4 + "<br>");
//   document.write("Marks Obtained: " + (sub1 + sub2 + sub3) + "<br>");
//   document.write("Grade is: A-one" + "<br>");
//   document.write("Percentage is: " + per + "<br>");
//   document.write("Remarks: Excellent" + "<br>");
// } else if (per >= 70) {
//   document.write("Total Marks: " + sub4 + "<br>");
//   document.write("Marks Obtained: " + (sub1 + sub2 + sub3) + "<br>");
//   document.write("Grade is: A" + "<br>");
//   document.write("Percentage is: " + per + "<br>");
//   document.write("Remarks: Good" + "<br>");
// } else if (per >= 60) {
//   document.write("Total Marks: " + sub4 + "<br>");
//   document.write("Marks Obtained: " + (sub1 + sub2 + sub3) + "<br>");
//   document.write("Grade is: B" + "<br>");
//   document.write("Percentage is: " + per + "<br>");
//   document.write("You need to improve" + "<br>");
// } else {
//   document.write("Total Marks: " + sub4 + "<br>");
//   document.write("Marks Obtained: " + (sub1 + sub2 + sub3) + "<br>");
//   document.write("Fail" + "<br>");
//   document.write("Percentage is: " + per + "<br>");
//   document.write("Sorry" + "<br>");
// }


//10


// var ans = +prompt("Guess the secret number.");
// var secretNumber = 50; 

// if (ans == secretNumber) {
//   document.write("Bingo! Correct answer.");
// }
// if (ans + 1 > secretNumber) {
//   document.write("Close enough to the correct answer.");
// }



//11

// var num1 = +prompt("Enter Number");
// if (num1 % 3 == 0) {
//   document.write("Number is divisible by 3");
// }


//12
// var num1 = +prompt("Enter Number");
// if (num1 % 2 != 0) {
//   document.write("Odd number");
// } else {
//   document.write("Even number");
// }


//13

// var temp = +prompt("Enter temperature");
// if (temp > 40) {
//   document.write("It is too hot outside");
// } else if (temp > 30) {
//   document.write("The weather today is normal");
// } else if (temp > 20) {
//   document.write("Today's weather is cool");
// } else if (temp > 10) {
//   document.write("OMG! Today's weather is so cool");
// }


//14

// var first = +prompt("Enter First Number");
// var second = +prompt("Enter Second Number");
// var opr = prompt("Enter Operator");
// if (opr == "+") {
//   document.write(first + second);
// } else if (opr == "*") {
//   document.write(first * second);
// } else if (opr == "/") {
//   document.write(first / second);
// } else if (opr == "-") {
//   document.write(first - second);
// } else if (opr == "%") {
//   document.write(first % second);
// }
