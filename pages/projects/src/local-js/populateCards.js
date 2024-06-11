document.addEventListener('DOMContentLoaded', () => {
    fetch('../data/cards.json')
        .then(response => response.json())
        .then(cards => {
            const container = document.querySelector('.cards-wrapper');
            cards.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.classList.add('cardcontainer');
                
                const photoDiv = document.createElement('div');
                photoDiv.classList.add('photo');
                
                const headerImage = document.createElement('img');
                headerImage.src = card.headerImage;
                
                const techDiv = document.createElement('div');
                techDiv.classList.add('tech');
                
                card.techImages.forEach(techImage => {
                    const img = document.createElement('img');
                    img.src = techImage;
                    techDiv.appendChild(img);
                    techDiv.appendChild(document.createElement('br'));
                });
                
                photoDiv.appendChild(headerImage);
                photoDiv.appendChild(techDiv);
                
                const contentDiv = document.createElement('div');
                contentDiv.classList.add('content');
                
                const titleP = document.createElement('p');
                titleP.classList.add('txt4');
                titleP.textContent = card.title;
                
                const descriptionP = document.createElement('p');
                descriptionP.classList.add('txt5');
                descriptionP.textContent = card.description;
                
                contentDiv.appendChild(titleP);
                contentDiv.appendChild(descriptionP);
                
                const footerDiv = document.createElement('div');
                footerDiv.classList.add('footer');
                
                const readMoreP = document.createElement('p');
                const readMoreA = document.createElement('a');
                readMoreA.classList.add('waves-effect', 'waves-light', 'btn');
                readMoreA.href = '#';
                readMoreA.textContent = 'Read More';
                readMoreP.appendChild(readMoreA);
                readMoreP.appendChild(document.createElement('a')).classList.add('heart');
                
                const infoP = document.createElement('p');
                infoP.classList.add('txt3');
                
                const clockI = document.createElement('i');
                clockI.classList.add('far', 'fa-clock');
                infoP.appendChild(clockI);
                
                infoP.appendChild(document.createTextNode(card.date));
                
                const commentsSpan = document.createElement('span');
                commentsSpan.classList.add('comments');
                
                const eyeI = document.createElement('i');
                eyeI.classList.add('fas', 'fa-eye');
                commentsSpan.appendChild(eyeI);
                
                commentsSpan.appendChild(document.createTextNode(` ${card.views} views`));
                
                infoP.appendChild(commentsSpan);
                footerDiv.appendChild(readMoreP);
                footerDiv.appendChild(infoP);
                
                cardElement.appendChild(photoDiv);
                cardElement.appendChild(contentDiv);
                cardElement.appendChild(footerDiv);
                
                container.appendChild(cardElement);
            });
        })
        .catch(error => console.error('Error loading cards:', error));
});
