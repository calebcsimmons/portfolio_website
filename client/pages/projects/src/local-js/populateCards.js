$(document).ready(function() {
    console.log("Document ready");

    // Function to create function names based on project title
    function createFunctionName(title) {
        return 'open' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page';
    }

    // Function to update views
    function updateViews(projectId) {
        fetch('/update-views', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: projectId }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Updated views:', data.views);
            // Update views count in the DOM if needed
        })
        .catch(error => {
            console.error('Error updating views:', error);
            // Handle error
        });
    }

    // Mapping from technology name to image path
    var techImagePaths = {
        'apollo': '../../global/img/apollo_icon.png',
        'css': '../../global/img/css.png',
        'cpp': '../../global/img/cpp_icon.png',
        'graphQL': '../../global/img/graphQL.png',
        'html': '../../global/img/html.png',
        'json': '../../global/img/json.png',
        'java': '../../global/img/java.png',
        'javascript': '../../global/img/javascript.png',
        'nodeJs': '../../global/img/nodeJs_icon.png',
        'openGL': '../../global/img/openGL.png',
        'processing': '../../global/img/processing.png',
        
    };

    // Load JSON data from server
    $.getJSON('/data/project.json', function(data) {
        console.log("JSON loaded:", data);

        // Loop through each project in the JSON data
        $.each(data, function(index, project) {
            console.log("Processing project:", project);

            // Create a unique function name based on the project title
            var functionName = createFunctionName(project.title);

            // Create card HTML
            var cardHTML = '<div class="cardcontainer">' +
                               '<div class="photo">' +
                                   '<img src="' + project.cardImage + '">' +
                                   '<div class="tech">';

            // Loop through tech stack and get paths
            $.each(project.techStack, function(index, techName) {
                var techImagePath = techImagePaths[techName];
                if (techImagePath) {
                    cardHTML += '<img src="' + techImagePath + '"><br>';
                } else {
                    console.error('No image path found for tech:', techName);
                }
            });

            cardHTML += '</div>' +
            '</div>' +
            '<div class="content">' +
                '<p class="txt4">' + project.title + '</p>' +
                '<p class="txt5">' + project.description + '</p>' +
            '</div>' +
            '<div class="footer">' +
                '<p><a class="waves-effect waves-light btn" href="javascript:void(0);" onclick="' + functionName + '();">Read More</a></p>' +
                '<p class="txt3"><i class="far fa-clock"></i>' + project.date /* + ' <span class="comments"><i class="fas fa-eye"></i> <span id="' + project.id + '-views">' + project.views + ' views</span></span></p>'*/ +
            '</div>' +
          '</div>';

            // Append card HTML to cards-wrapper
            $('.cards-wrapper').append(cardHTML);
        });
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Error loading JSON:", textStatus, error);
    });
});
