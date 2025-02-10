/*
// EXAMPLE 1
const steps = ["one", "two", "three"];

function listTemplate(step) {
    return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join('');


// EXAMPLE 2
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);

// Display the GPA points in the <ul> element
const gpaList = document.querySelector("#myList");

gpaPoints.forEach(function(point) {
  const listItem = document.createElement("li");  // Create a new <li> element
  listItem.textContent = point;  // Set the text content of the <li> to the GPA point
  gpaList.appendChild(listItem);  // Append the <li> to the <ul> with id "gpaList"
});


// EXAMPLE 3
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  let points = 0;
  if (grade === "A") {
    points = 4;
  } else if (grade === "B") {
    points = 3;
  }
  return points;
}

const gpaPoints = grades.map(convertGradeToPoints);

// Get the <ul> element where GPA points will be displayed
const gpaList = document.querySelector("#myList");

// Loop through the gpaPoints array to create <li> elements
gpaPoints.forEach(function(point) {
  const listItem = document.createElement("li");  // Create a new <li> element
  listItem.textContent = `GPA Point: ${point}`;  // Set the text content of the <li> to the GPA point
  gpaList.appendChild(listItem);  // Append the <li> to the <ul> with id "gpaList"

// Append the new <li> to the <ul> with id="myList"
gpaList.appendChild(listItem);
});

/* **********
// Calculate total points
const pointsTotal = gpaPoints.reduce(function (total, item) {
  return total + item;
}, 0); // Initialize total to 0

// Calculate GPA
const gpa = pointsTotal / gpaPoints.length;

// Create a final <li> for total points and GPA
const totalPointsItem = document.createElement("li");
totalPointsItem.textContent = `Total Points: ${pointsTotal}`;
gpaList.appendChild(totalPointsItem);

const gpaItem = document.createElement("li");
gpaItem.textContent = `Calculated GPA: ${gpa.toFixed(2)}`; // Display GPA rounded to two decimal places
gpaList.appendChild(gpaItem);
********** */

/*
// EXAMPLE 3b
// this is the same thing as above, but with an arrow function
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// this could be further simplified as
const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;

// Display the GPA points in the <ul> element
const gpaItem = document.createElement("li");
gpaItem.textContent = `Calculated GPA: ${gpa.toFixed(2)}`; // Display GPA rounded to two decimal places
gpaList.appendChild(gpaItem);


// Example 4
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
  return word.length < 6;
});

// Get the <ul> element where we want to display the short words
const myList = document.querySelector("#myList");

// Loop through the shortWords array to create <li> elements
shortWords.forEach(function(word) {
  // Create a new <li> element for each short word
  const listItem = document.createElement("li");
  
  // Set the text content of the <li> to display the short word
  listItem.textContent = word;
  
  // Append the <li> to the <ul> element
  myList.appendChild(listItem);
});
*/


// Example 5
// improved luckyNumber
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;

// Find the index of the lucky number in the array
let luckyIndex = myArray.indexOf(luckyNumber);

// Get the <ul> element where you want to display the array
const myList = document.querySelector("#myList");

// Display the original array as list items
myArray.forEach(function (number) {
  const listItem = document.createElement("li");
  listItem.textContent = number;
  myList.appendChild(listItem);
});

// Get the <p> element to display the lucky index
const luckyIndexDisplay = document.querySelector("#luckyIndexDisplay");

// Display the result (index of the lucky number)
if (luckyIndex !== -1) {
  luckyIndexDisplay.textContent = `The lucky number ${luckyNumber} is at index ${luckyIndex} in the array.`;
} else {
  luckyIndexDisplay.textContent = `The lucky number ${luckyNumber} is not in the array.`;
}
