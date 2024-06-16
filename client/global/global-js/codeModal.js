function codeModal(filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            var modal = document.createElement('div');
            modal.classList.add('code-modal');

            var closeButton = document.createElement('span');
            closeButton.classList.add('close-button');
            closeButton.innerHTML = '&times;';
            closeButton.onclick = function() {
                document.body.removeChild(modal);
            };

            var codePre = document.createElement('pre');
            var code = document.createElement('code');
            code.textContent = data;

            // Check if this specific file should be forced to GraphQL
            if (filePath === './assets/schemas.js' || filePath.endsWith('.graphql')) {
                code.classList.add('language-graphql'); // Force GraphQL highlighting
            } else {
                // Determine language based on file extension or content type
                var languageClass = getLanguageClass(filePath);
                if (languageClass) {
                    code.classList.add(languageClass);
                } else {
                    code.classList.add('language-text'); // Default to plain text if language is not recognized
                }
            }

            codePre.appendChild(code);
            modal.appendChild(closeButton);
            modal.appendChild(codePre);
            Prism.highlightElement(code);

            document.body.appendChild(modal);
        })
        .catch(error => {
            console.error('Error fetching or displaying code:', error);
            var modalError = document.createElement('div');
            modalError.classList.add('code-modal');
            modalError.textContent = 'Error fetching or displaying code. Please try again later.';
            document.body.appendChild(modalError);
        });
}

// Function to determine language class based on file extension or content type
function getLanguageClass(filePath) {
    // Example: Extract file extension
    var fileExtension = filePath.split('.').pop().toLowerCase();

    // Map file extensions to Prism language classes
    var languageMap = {
        'js': 'language-javascript',
        'html': 'language-html',
        'css': 'language-css',
        'graphql': 'language-graphql',
        // Add more mappings as needed
    };

    // Return language class based on file extension
    return languageMap[fileExtension] || null;
}
