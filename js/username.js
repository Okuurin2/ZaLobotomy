document.addEventListener('DOMContentLoaded', function() {
    const text = document.getElementById('username');

    if (text && text.textContent) {
        const initialFontSize = 100;
        const maxLength = 10;
        const initialMargin = 0;
    
        const textLength = text.textContent.length;
        const newFontSize = Math.min(initialFontSize, initialFontSize * (maxLength / textLength));
    
        text.style.fontSize = newFontSize + 'px';
        text.style.marginBottom = initialMargin + textLength +"px"
    }
    else {
        console.log(":(")
    }
});