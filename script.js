window.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('welcome-audio');
    
    // Play audio every time the user clicks anywhere on the page
    document.body.addEventListener('click', () => {
        audio.currentTime = 0; // Reset audio to the start
        audio.play();
    });

    const nameBubble = document.querySelector('.name-bubble');
  
    nameBubble.addEventListener('click', () => {
        nameBubble.classList.add('exploded');
        setTimeout(() => {
            nameBubble.classList.remove('exploded');
        }, 500); // Remove the exploded class after the animation ends
    });

    const body = document.querySelector('body');
    const textElements = document.querySelectorAll('h1, p, h2, .social-link, footer');

    function updateTextColor() {
        const bgPosition = window.getComputedStyle(body).backgroundPositionX;
        let textColor;
  
        // Determine text color based on background position
        if (bgPosition.includes('0%')) {
            textColor = '#000'; // Black text color
        } else if (bgPosition.includes('100%')) {
            textColor = '#FFF'; // White text color
        } else {
            textColor = '#000'; // Default black
        }
  
        textElements.forEach(element => {
            element.style.color = textColor;
        });
    }
  
    setInterval(updateTextColor, 1000); // Update text color every second
});
