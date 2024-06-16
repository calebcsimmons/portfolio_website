function codeModal(filePath) {
    fetch(filePath)
        .then(response => response.text())
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
            codePre.textContent = data;

            modal.appendChild(closeButton);
            modal.appendChild(codePre);

            document.body.appendChild(modal);
        })
        .catch(error => {
            console.error('Error fetching file:', error);
        });
}
