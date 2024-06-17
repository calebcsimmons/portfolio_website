// Function to fetch JSON data using fetch API
function fetchProjectData() {
    return fetch('/data/project.json') // Adjust path if necessary
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Error fetching project data:', error);
            throw error; // Rethrow the error to propagate it further
        });
}

// Function to populate the tech stack section
function populateTechStack(projectData, projectId) {
    console.log('Populating tech stack for project ID:', projectId); // Debug statement
    var techContent = document.querySelector('.tech__content');

    // Define categories and their associated technologies
    var categories = {
        'Languages': ['html', 'css', 'javascript', 'cpp', 'python', 'java'],
        'Tools': ['git', 'github'],
        'Frameworks & Libraries': ['nodejs', 'apollo', 'graphql', 'react'],
        'Databases': ['mysql', 'mongodb', 'postgresql']
        // Add more categories and technologies as needed
    };

    // Find the specific project by projectId
    var project = projectData.find(project => project.id === projectId);
    if (!project) {
        console.error('Project not found:', projectId);
        return;
    }

    console.log('Found project:', project); // Debug statement

    // Loop through each technology in the project's tech stack
    project.techStack.forEach(function(tech) {
        var imgSrc = techImagePaths[tech.toLowerCase()]; // Get the image path from the mapping
        if (!imgSrc) {
            console.warn('Image source not found for tech:', tech);
            return;
        }

        // Determine the category for the current technology
        var category = getCategory(tech, categories);

        if (category) {
            // Create image element
            var imgElement = document.createElement('img');
            imgElement.src = imgSrc;

            // Create tech data container
            var techDataDiv = document.createElement('div');
            techDataDiv.classList.add('tech__data');
            techDataDiv.appendChild(imgElement);

            // Append to the appropriate category section
            var categoryContainer = techContent.querySelector('.tech__area[data-category="' + category + '"] .tech__box');
            if (categoryContainer) {
                categoryContainer.appendChild(techDataDiv);
            } else {
                console.warn('Category container not found for tech:', tech);
            }
        } else {
            console.warn('Category not found for tech:', tech);
        }
    });
}

// Main function to initiate fetching and populating
function main() {
    // Get the project ID from the HTML element
    const projectIdElement = document.getElementById('project-id');
    if (projectIdElement) {
        const projectId = projectIdElement.textContent.trim(); // Get the text content
        console.log('Project ID from HTML:', projectId); // Debug statement

        fetchProjectData()
            .then(projectData => {
                populateTechStack(projectData, projectId);
            })
            .catch(error => {
                console.error('Error fetching or populating tech stack:', error);
            });
    } else {
        console.error('Project ID element not found in HTML');
    }
}

// Call the main function to start the process
main();

// Mapping from technology name to image path
var techImagePaths = {
    'html': '../../global/img/html.png',
    'css': '../../global/img/css.png',
    'json': '../../global/img/json.png',
    'javascript': '../../global/img/javascript.png',
    'nodejs': '../../global/img/nodejs.png',
    'git': '../../global/img/git.png',
    'github': '../../global/img/github.png',
    'apollo': '../../global/img/apollo.png',
    'graphql': '../../global/img/graphql.png',
    'cpp': '../../global/img/cpp_icon.png',
    'opengl': '../../global/img/opengl.png',
    'processing': '../../global/img/processing.png',
    'python': '../../global/img/python_icon.png',
    'java': '../../global/img/java.png'
    // Add more mappings as needed
};

// Function to determine the category of a technology
function getCategory(tech, categories) {
    for (var category in categories) {
        if (categories[category].includes(tech.toLowerCase())) {
            return category;
        }
    }
    return null; // Return null if category is not found
}
