// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('easter-egg-text');
    const imageElement = document.getElementById('easter-egg-image');
    let clickCount = 0;

    textElement.addEventListener('click', () => {
        clickCount++;

        if (clickCount === 6) {
            imageElement.classList.remove('hidden');
            setTimeout(() => {
                imageElement.classList.add('visible');
            }, 10); // Ensures the transition effect kicks in
        } else if (clickCount === 12) {
            imageElement.classList.remove('visible');
            setTimeout(() => {
                imageElement.classList.add('hidden');
            }, 2000); // Waits for the scale down animation to complete
            clickCount = 0; // Resets the click counter
        }
    });
});
