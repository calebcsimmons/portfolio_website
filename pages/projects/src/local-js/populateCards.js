$(document).ready(function() {
    console.log("Document ready");

    // Load JSON data
    $.getJSON('./data/project.json', function(data) {
        console.log("JSON loaded:", data);
        
        // Loop through each project in the JSON data
        $.each(data, function(index, project) {
            console.log("Processing project:", project);
            
            // Create card HTML
            var cardHTML = '<div class="cardcontainer">' +
                               '<div class="photo">' +
                                   '<img src="' + project.cardImage + '">' +
                                   '<div class="tech">';
                                    
            // Loop through tech images
            $.each(project.techImages, function(index, techImage) {
                cardHTML += '<img src="' + techImage + '"><br>';
            });
                                    
            cardHTML += '</div>' +
                        '</div>' +
                        '<div class="content">' +
                            '<p class="txt4">' + project.title + '</p>' +
                            '<p class="txt5">' + project.description + '</p>' +
                        '</div>' +
                        '<div class="footer">' +
                            '<p><a class="waves-effect waves-light btn" href="#">Read More</a><a class="heart"></a></p>' +
                            '<p class="txt3"><i class="far fa-clock"></i>' + project.date + ' <span class="comments"><i class="fas fa-eye"></i>' + project.views + ' views</span></p>' +
                        '</div>' +
                      '</div>';

            // Append card HTML to cards-wrapper
            $('.cards-wrapper').append(cardHTML);
        });
    });
});
