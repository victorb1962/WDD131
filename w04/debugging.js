/*
// Initial Code
const PI = 3.14;
const radius = 3;
let area = 0;
area = radius * radius * pi;
radius = 4;
area = radius * radius * pi;

// See /w04/dbug_solution0.png
*/

/*
// Activity 1 - fix errors and use console.log() to show results
const PI = 3.14;
let radius = 3;
let area = 0;
area = radius * radius * PI;
console.log("Area1:", area);
radius = 4;
area = radius * radius * PI;
console.log("Area2:", area);

// See /w04/dbug_solution1.png
*/

/*
// Activity 2a - Use a Function for repeating code. Use debug to find error.
const PI = 3.14;
let area = 0;

function circleArea(radius) {
  const area = radius * PI;
}

area = circleArea(3);
console.log(area);

// See /w04/dbug_solution2a.png
*/

// Activity 2b - Debug Use a Function for repeating code
const PI = 3.14;
// let radius = 3;
let area = 0;

function circleArea(radius) {
  const area = radius * radius * PI;
  return area;
}

area = circleArea(3);
console.log("Area1:", area);
// radius = 4;
area = circleArea(4);
console.log("Area2:", area);

// See /w04/dbug_solution2b.png