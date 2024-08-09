// Get elements from the DOM
const welcomeTitle = document.getElementById("welcome-title");
const welcomeSubtitle = document.getElementById("welcome-subtitle");

// Array containing text content for the welcome title and subtitle
const welcomeText = [
  { title: "Samuel Olawumi", subtitle: "A Frontend Developer" },
  { title: "a Frontend Developer", subtitle: "Based In Nigeria" },
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

// Helper function to get an element from the DOM
const getElement = (element) => {
  return document.querySelector(element);
};

// Track the last scroll position
let lastScrollTop = window.scrollY || document.documentElement.scrollTop;
const triggerScrollUpLength = 300; // Length of scroll (in pixels) to reveal the navbar after scrolling up
let scrollUpLength = 0;

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
  // Get the current scroll position
  let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

  if (currentScrollTop > lastScrollTop) {
    // User is scrolling down
    scrollUpLength -= lastScrollTop - currentScrollTop; // Decrease the scroll-up length (as scrolling down cancels out scrolling up)
    if (scrollUpLength > triggerScrollUpLength) {
      // If the user has scrolled up more than the trigger length, show the navbar
      showNavbar();
      scrollUpLength = 0; // Reset the scroll-up length after showing the navbar
    }
  } else {
    // User is scrolling up
    if (currentScrollTop <= triggerScrollUpLength) {
      // If the user scrolls down to or past the trigger length, reset the navbar position
      resetNavPosition();
      scrollUpLength = 0; // Reset the scroll-up length
    }
  }

  // Update the last scroll position, preventing negative values
  lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

// Function to show the navbar by setting its position to sticky
function showNavbar() {
  // Show navbar
  getElement("header").style.position = "sticky";
}

// Function to reset the navbar position to relative (puts it back in its normal position)
function resetNavPosition() {
  // reset navbar position
  getElement("header").style.position = "relative";
}
