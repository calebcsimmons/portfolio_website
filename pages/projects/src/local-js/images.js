// Define the image paths
const imagePaths = {
    graphQL_header: "./images/graphQLHeader.png",
    python_icon: "./images/python.png",
    apollo_icon: "./images/apollo.png",
    cpp_icon: "./images/cpp.png",
    nodeJs_icon: "./images/nodeJs.png",
    graphQL_icon: "./images/graphQL.png"
};

// Set the src attributes of the img elements after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('graphQL_header').src = imagePaths.graphQL_header;
    document.getElementById('python_icon').src = imagePaths.python_icon;
    document.getElementById('apollo_icon').src = imagePaths.apollo_icon;
    document.getElementById('cpp_icon').src = imagePaths.cpp_icon;
    document.getElementById('nodeJs_icon').src = imagePaths.nodeJs_icon;
    document.getElementById('graphQL_icon').src = imagePaths.graphQL_icon;
});
