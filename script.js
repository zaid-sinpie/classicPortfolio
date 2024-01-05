"use strict";

// Function to generate a random color in hexadecimal format
function generateRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change text color to a calm color (e.g., shades of blue, green, etc.)
function changeTextColor() {
  const calmColors = ["#3498db", "#2ecc71", "#9b59b6", "#27ae60"]; // Define calm colors
  const randomCalmColor =
    calmColors[Math.floor(Math.random() * calmColors.length)];
  document.querySelector(".textElement").style.color = randomCalmColor; // Change text color
}

// Function to change text color randomly after a delay
function changeColorOnDelay() {
  setInterval(() => {
    const randomColor = generateRandomColor(); // Generate a random color
    document.querySelector(".textElement").style.color = randomColor; // Change text color to a random color
    setTimeout(changeTextColor, 1000); // Change text color to a calm color after 1 second
  }, 3000); // Change color every 3 seconds
}

// Call the function to initiate the color change process
// changeColorOnDelay();