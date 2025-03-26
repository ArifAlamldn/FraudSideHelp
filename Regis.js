document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Show the popup and overlay
    document.getElementById("popup").style.display = "flex";
    document.getElementById("overlay").style.display = "block";

    // Reset the form after submission
    this.reset();
});

// 🚫 Remove the event listeners that hide the popup
