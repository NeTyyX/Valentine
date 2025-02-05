let yesButton = document.querySelector('.yes');
let noButton = document.querySelector('.no');
let popup = document.getElementById('popup');

// Variable to track the scaling factor of the "Yes" button
let scaleFactor = 1;

// Function to handle button clicks
function answer(choice) {
    if (choice === 'Yes') {
        // When "Yes" is clicked, reset the scale factor and popup
        scaleFactor = 1; // Reset to the original size
        yesButton.style.transform = `scale(${scaleFactor})`;
        popup.style.display = 'block';

        // Confetti effect on the entire screen
        confetti({
            particleCount: 200,
            spread: 360,
            origin: { x: 0.5, y: 0.5 } // Center the confetti in the middle of the screen
        });
    } else if (choice === 'No') {
        // Increase the size of the "Yes" button by a constant factor with each "No"
        scaleFactor += 0.1; // Increment the scale factor by 0.1
        yesButton.style.transform = `scale(${scaleFactor})`;
    }
}
