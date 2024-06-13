document.addEventListener('DOMContentLoaded', function() {
    const copyText = document.querySelector('.footer__copy');

    copyText.addEventListener('click', function() {
        const textArea = document.createElement('textarea');
        textArea.value = copyText.textContent.trim();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Create "Copied!" message
        const copiedMessage = document.createElement('span');
        copiedMessage.textContent = 'Copied!';
        copiedMessage.classList.add('copied-message');

        // Append message next to the email address
        copyText.parentNode.appendChild(copiedMessage);

        // Remove the message after a short delay
        setTimeout(function() {
            copiedMessage.parentNode.removeChild(copiedMessage);
        }, 2000); // Adjust the time as needed
    });

    // Optional: Change cursor to pointer on hover
    copyText.style.cursor = 'pointer';
});
