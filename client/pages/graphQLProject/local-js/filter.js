document.addEventListener('DOMContentLoaded', function() {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.thq-button-outline');

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = button.getAttribute('data-target');
            showContent(targetId); // Call showContent function with targetId
        });
    });
});

function showContent(targetId) {
    // Hide all content sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    // Display the selected content section
    const selectedSection = document.getElementById(targetId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}
