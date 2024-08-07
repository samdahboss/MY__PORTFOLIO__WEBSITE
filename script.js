// Get elements from the DOM
const welcomeTitle = document.getElementById("welcome-title");
const welcomeSubtitle = document.getElementById("welcome-subtitle");

// Array containing text content for the welcome title and subtitle
const welcomeText = [
    { title: "Samuel Olawumi", subtitle: "A Frontend Developer" },
    { title: "a Frontend Developer", subtitle: "Based In Nigeria" }
];

// Variable to keep track of the current index
let currentIndex = 0;

/**
 * Function to change the welcome text
 * Toggles the text content between the two sets defined in welcomeText array
 */
const changeWelcomeText = () => {
    // Toggle the current index between 0 and 1
    currentIndex = 1 - currentIndex;
    // Update the text content of the welcome title and subtitle elements
    welcomeTitle.textContent = welcomeText[currentIndex].title;
    welcomeSubtitle.textContent = welcomeText[currentIndex].subtitle;
};

// Set an interval to change the welcome text every 10 seconds (10000 milliseconds)
setInterval(changeWelcomeText, 10000);
