// Color Preferences
let favoriteColors = [];

// Collect three colors from the user
for (let i = 0; i < 3; i++) {
    let color = prompt("Please enter a color you like:");
    favoriteColors.push(color);
    console.log("Updated Color List: ", favoriteColors);
}

// Allow the user to add another color
let newColor = prompt("Please enter another color you like:");
favoriteColors.push(newColor);
console.log("Final Color List: ", favoriteColors);
