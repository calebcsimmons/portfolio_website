// client/js/populateCards.js

// Function to update views (define in global scope)
window.updateViews = function(projectId, callback) {
    $.ajax({
        url: '/update-views',
        method: 'POST',
        contentType: 'application/json',
        data: JSON.stringify({ id: projectId }),
        success: function(response) {
            $('#' + projectId + '-views').text(response.views + ' views');
            if (callback) {
                callback();
            }
        },
        error: function(jqxhr, textStatus, error) {
            console.error("Error updating views:", textStatus, error);
            if (callback) {
                callback();
            }
        }
    });
};

$(document).ready(function() {
    console.log("Document ready");

    // Function to create function names based on project title
    function createFunctionName(title) {
        return 'open' + title.replace(/[^a-zA-Z0-9]/g, '') + 'Page';
    }

    // Load JSON data
    $.getJSON('./data/project.json', function(data) {
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

            // Loop through tech images
            $.each(project.techImages, function(index, techImage) {
                console.log("Processing tech image:", techImage);
                cardHTML += '<img src="' + techImage + '"><br>';
            });

            cardHTML += '</div>' +
            '</div>' +
            '<div class="content">' +
                '<p class="txt4">' + project.title + '</p>' +
                '<p class="txt5">' + project.description + '</p>' +
            '</div>' +
            '<div class="footer">' +
                '<p><a class="waves-effect waves-light btn" href="javascript:void(0);" onclick="' + functionName + '()">Read More</a><a class="heart"></a></p>' +
                '<p class="txt3"><i class="far fa-clock"></i>' + project.date + ' <span class="comments"><i class="fas fa-eye"></i> <span id="' + project.id + '-views">' + project.views + ' views</span></p>' +
            '</div>' +
          '</div>';

            // Append card HTML to cards-wrapper
            $('.cards-wrapper').append(cardHTML);
        });
    }).fail(function(jqxhr, textStatus, error) {
        console.error("Error loading JSON:", textStatus, error);
    });
});
