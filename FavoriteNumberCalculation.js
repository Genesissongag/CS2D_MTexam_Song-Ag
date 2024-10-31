// Declare a variable to hold the favorite number
let favoriteNumber = 7; // You can change this to any number you like

// Function to prompt user to guess their favorite number
function guessFavoriteNumber() {
    let guess; // Variable to hold the user's guess

    // While loop to keep asking for a guess until it's correct
    while (true) {
        guess = parseInt(prompt("Guess my favorite number:"));

        // Check if the input is a valid number
        if (!isNaN(guess)) {
            if (guess < favoriteNumber) {
                console.log("Your guess is too low.");
            } else if (guess > favoriteNumber) {
                console.log("Your guess is too high.");
            } else {
                console.log("Congratulations! You guessed it right.");
                break; // Exit the loop if the guess is correct
            }
        } else {
            console.log("Please enter a valid number.");
        }
    }
}

// Call the function
guessFavoriteNumber();
