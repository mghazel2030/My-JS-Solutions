/*################################
  How to Run JavaSCript in Visual Code:
  ################################
    1. Open Integrated Terminal: 
        Go to View > Terminal or press Ctrl + (backtick).
    2. Run the File: In the terminal, type:
        > node filename.js 
        Press Enter. 
    3. The output will appear directly in the terminal.
  ################################*/
console.log("================================"); 
console.log("JavaScript Foundations: Lesson # 2"); 
console.log("================================"); 
console.log("In-Class Exercise: Variables and Functions Exercise"); 
console.log("================================"); 
/*################################
 Variables and Functions Exercise
 ################################
 Exercise # 1: Simple Variable Assignment
 ################################*/
 // Objective: Practice declaring variables and assigning values.
 // 
 // Task: 
 //  1. Declare a variable name.
 //  3. Assign your name to the variable.
 //  3. Print the value of the variable to the console.
 //=============================
 // Display a message
 console.log("\n================================"); 
 console.log("Exercise # 1: Simple Variable Assignment:"); 
 console.log("================================");
 // Declare a variable name and assign your name to the variable.
 let name1 = "Mohsen Ghazel";
 // Print the value of the variable to the console.
 console.log("Hi, nice to meet you, my name is: " + name1); 

 /*################################
 Exercise # 2: Basic Function
 ################################*/
 // Objective: Objective: Create a simple function..
 // 
 // Task: 
 //  1. Declare a function called greet.
 //  2. Inside the function, print a greeting message using the console.log() statement.
 //  3. Call the function to see the greeting.
 //=============================
 // Display a message
 console.log("\n================================"); 
 console.log("Exercise # 2: Basic Function:"); 
 console.log("================================");
 // 1. Declare a function called greet: 
 function greet2() {
   // 2. Inside the function, print a greeting message using the console.log() statement.
  console.log("Hello, nice to meet you!");
}
// 3. Call the function to see the greeting.
greet2();


 /*################################
 Exercise # 3: Function with Parameters
 ################################*/
 // Objective: Practice using parameters in functions.
 // 
 // Task: 
 //  1. Modify the greet function to accept a parameter called name.
 //  2. Use the parameter inside the function to personalize the greeting.
 //   3. Call the function with different names.
 //=============================
 // Display a message
 console.log("\n================================"); 
 console.log("Exercise # 3: Function with Parameters:"); 
 console.log("================================"); 
 // 1. Modify the greet function to accept a parameter called name.
 function greet3(name) {
   // 2. Use the parameter inside the function to personalize the greeting.
  console.log("Hello, my name is: " + name + ", Nice to meet you!");
}
// 3. Call the function with different names.
greet3("Mohsen Ghazel");
greet3("John Doe");
greet3("Jane Doe");

 /*################################
 Exercise # 4: Function with Return Value
 ################################*/
 // Objective: Understand functions that return values.
 // 
 // Task: 
 //  1. Create a function called square that takes a number as a parameter..
 //  2. Calculate the square of the number..
 //  3. Call the function and print the result.
 //=============================
 // Display a message
 console.log("\n================================"); 
 console.log("Exercise # 4: Function with Return Value:"); 
 console.log("================================"); 
 // 1. Create a function called square that takes a number as a parameter..
 function square4(x) {
   // 2. Calculate the square of the number.
  return x * x;
}
// 3. Call the function and print the result.
// Declare a variable and assign a value
var x = 5;
// Compute the square of x
var x_squared = square4(x);
// Display the results
console.log("If x = " + x + ", x*x = " + x_squared)


 /*################################
 Exercise # 5: Function Interactions
 ################################*/
 // Objective: Combine variables and functions in a more complex scenario..
 // 
 // Task: 
 //  1. Create a function called calculateArea that calculates the area of a rectangle.
 //  2. The function should take two parameters: length and width.
 //  3. Use the function to calculate the area and store it in a variable.
 //  4. Print a message to the console that includes the length, width, and calculated area.
 //=============================
 // Display a message
 console.log("\n================================"); 
 console.log("Exercise # 5: Function Interactions:"); 
 console.log("================================"); 
 // Calculate the Area that calculates the area of a rectangle.
 function compute_rectangle_area5(length, width) {
   // 2. Calculate the area of teh rectangle
  return width * length;
}
// 3. Call the function and print the result.
// Declare the length and width of a rectangle
var length = 10;
var width = 20;
// Compute the area of the rectangle
var rectangle_area = compute_rectangle_area5(length, width);
// Display the results
console.log("Rectangle dimensions: Length = " + length + ", Width = " + width + ": Area = " + rectangle_area);

 /*################################
 Exercise # 6: Arrow Functions
 ################################*/
 // Objective: Use arrow functions where it is possible.
 // 
 // Task: 
 //  1. Rewrite every function that can be turned into an arrow function
 //  4. Print a message to the console and check your answers
 //=============================
// Display a message
 console.log("\n================================"); 
 console.log("Exercise # 6: Arrow Functions:"); 
 console.log("================================"); 
 // Display a  message
 const greet2_arrow = () => "Hello, Nice to meet you!";

 // Display a custom message
 name = "Mohsen Ghazel"
 const greet3_arrow = (name) => "Hello" + name + ", Nice to meet you!";
 greet3_arrow(name)

 // Square the input
 x = -10.5988;
 const square4_arrow = (x )=> x * x;
 // Test
 console.log("If x = 10, then x * x = " + square4_arrow(x));

 // The area of a rectangle
 const compute_rectangle_area5_arrow = (length, width)=> {
  const result = length * width;
  return result; };
 // Test
 var length = 10;
 var width = 20;
 // Display the results
 console.log("Rectangle dimensions: Length = " + length + ", Width = " + width + ": Area = " + compute_rectangle_area5_arrow(length, width) );

 /*################################
     ********* DONE! *********
 ################################*/
 // Display a message
 console.log("\n================================"); 
 console.log("End-of-Exercises:"); 
 console.log("================================\n\n"); 


