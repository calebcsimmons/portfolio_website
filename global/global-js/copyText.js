document.addEventListener('DOMContentLoaded', function() {
    const copyText = document.querySelector('.footer__copy');

    copyText.addEventListener('click', function(e) {
        const textArea = document.createElement('textarea');
        textArea.value = copyText.textContent.trim();
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);

        // Show tooltip near clicked area
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Copied!';
        tooltip.classList.add('tooltip');

        // Position tooltip near clicked area
        tooltip.style.top = e.clientY - 40 + 'px';  // Adjust as needed
        tooltip.style.left = e.clientX + 20 + 'px'; // Adjust as needed

        document.body.appendChild(tooltip);

        // Hide tooltip after some time
        setTimeout(function() {
            tooltip.parentNode.removeChild(tooltip);
        }, 1000); // Adjust the time as needed
    });
});
