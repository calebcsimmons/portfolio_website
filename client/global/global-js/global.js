// Function to load scripts dynamically
function loadScript(url) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

// Determine the base URL dynamically based on the current script location
function getBaseUrl() {
    // Get the script element where this script is loaded
    let scriptElements = document.getElementsByTagName('script');
    let thisScript = scriptElements[scriptElements.length - 1];

    // Extract the base URL from the script's src attribute
    let scriptUrl = thisScript.src;
    let baseUrl = scriptUrl.substring(0, scriptUrl.lastIndexOf('/') + 1);
    return baseUrl;
}

// Array of script files to load
let scriptFiles = [
    'cacheBust.js',
    'codeModal.js',
    'copyText.js',
    'darkMode.js',
    'linking.js'
];

// Load external scripts and handle promise chain
Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/prismjs/prism.js'),
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js'),
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/prism/1.25.0/prism.min.js')
])
.then(() => {
    console.log('External scripts loaded successfully');
    // Load custom scripts after external scripts if necessary
    let scriptPromises = scriptFiles.map(file => {
        return loadScript(getBaseUrl() + file);
    });
    return Promise.all(scriptPromises);
})
.then(() => {
    console.log('Custom scripts loaded successfully');
})
.catch(error => {
    console.error('Error loading scripts:', error);
});
