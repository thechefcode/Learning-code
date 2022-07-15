const textSizePreview = document.getElementById('textSizePreview');
const textSize = document.getElementById('textSize');
textSize.addEventListener('input', () => {
    textSizePreview.style.fontSize = `${textSize.value}px`;
})