// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {

    /* Body */
    const body = document.querySelector('body');

    // Dark Mode Action
    let darkMode = localStorage.getItem("darkMode");
    const darkModeToggle = document.querySelector('.dark-mode-button');
    const darkModeToggleFooter = document.querySelector('footer .dark-mode-button');

    // Enable Dark Mode
    const enableDarkMode = () => {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
    }

    // Disable Dark Mode
    const disableDarkMode = () => {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", null);
    }

    if (darkMode == "enabled") {
        enableDarkMode();
    }

    // Desktop Button
    if (darkModeToggle) { // Check if dark mode toggle button exists
        darkModeToggle.addEventListener('click', () => {
            darkMode = localStorage.getItem("darkMode");
            if (darkMode !== "enabled") {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });

    } else {
        console.error("Dark mode toggle button not found!");
    }

    // Footer button, optional
    if (darkModeToggleFooter) { // Check if footer dark mode toggle button exists
        darkModeToggleFooter.addEventListener('click', () => {
            darkMode = localStorage.getItem("darkMode");
            if (darkMode !== "enabled") {
                enableDarkMode();
            } else {
                disableDarkMode();
            }
        });
    }
});
