document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission

    // Show the popup and overlay
    document.getElementById("popup").style.display = "flex";
    document.getElementById("overlay").style.display = "block";

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
        document.getElementById("popup").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    }, 3000);

    // Reset the form after submission
    this.reset();
});

// Hide popup on overlay or popup click
document.getElementById("overlay").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});

document.getElementById("popup").addEventListener("click", function() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
});
