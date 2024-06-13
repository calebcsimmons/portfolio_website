// Ensure the DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    /* Body */
    const body = document.querySelector('body');

    // Dark Mode Action
    let darkMode = localStorage.getItem("darkMode");
    const darkModeToggle = document.querySelector('.dark-mode-button');
    const darkModeIcon = document.getElementById('darkModeIcon');

    // Enable Dark Mode
    const enableDarkMode = () => {
        body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
        darkModeIcon.classList.remove('fa-sun');
        darkModeIcon.classList.add('fa-moon');
    }

    // Disable Dark Mode
    const disableDarkMode = () => {
        body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", null);
        darkModeIcon.classList.remove('fa-moon');
        darkModeIcon.classList.add('fa-sun');
    }

    // Check the current mode
    if (darkMode === "enabled") {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    // Toggle dark mode on button click
    darkModeToggle.addEventListener('click', () => {
        darkMode = localStorage.getItem("darkMode");
        if (darkMode !== "enabled") {
            enableDarkMode();
        } else {
            disableDarkMode();
        }
    });
});

darkModeToggle.addEventListener('focus', () => {
    darkModeToggle.blur(); // Remove focus immediately after it's applied
});
