//your JS code here. If required.
const element = document.getElementById('level');

let level = 0;
let currentElement = element;

// Traverse up the DOM tree to count levels
while (currentElement) {
    level++;
    currentElement = currentElement.parentElement; // Move to the parent element
}

// Display the level using an alert
alert(`The level of the element is: ${level}`);