(function() {
    const elements = document.querySelectorAll('script[src], link[rel="stylesheet"]');
    const timestamp = new Date().getTime();

    elements.forEach(el => {
        const srcAttr = el.tagName.toLowerCase() === 'script' ? 'src' : 'href';
        const src = el.getAttribute(srcAttr);
        if (src) {
            const separator = src.includes('?') ? '&' : '?';
            el.setAttribute(srcAttr, `${src}${separator}v=${timestamp}`);
        }
    });
})();
