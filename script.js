// Matrix Rain Effect - Setting up the canvas
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Characters to be displayed in the matrix rain
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charArray = characters.split('');
const fontSize = 20;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize drops array
for (let i = 0; i < columns; i++) {
    drops[i] = 1;
}

// Function to draw the rain effect
function drawMatrixRain() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#00FF00';
    ctx.font = `${fontSize}px monospace`;

    // Loop through the columns
    for (let i = 0; i < drops.length; i++) {
        const character = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(character, i * fontSize, drops[i] * fontSize);

        // Reset drops when it goes off the screen
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        // Move the drops down
        drops[i]++;
    }
}

// Update the canvas on every frame
function animate() {
    drawMatrixRain();
    requestAnimationFrame(animate);
}

animate();

// Resize the canvas for responsive design
window.addEventListener('resize', () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});
