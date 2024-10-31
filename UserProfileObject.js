// User Profile Object
let userProfile = {
    fullName: prompt("Please enter your full name:"),
    age: prompt("Please enter your age:"),
    favoriteNumber: prompt("Please enter your favorite number:"),
    favoriteColors: []
};

// Collecting the favorite colors
for (let i = 0; i < 3; i++) {
    let color = prompt("Please enter a favorite color:");
    userProfile.favoriteColors.push(color);
}

// Log all the user profile object
console.log("User Profile:", userProfile); 
