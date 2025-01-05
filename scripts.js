// Matrix Rain Animation
const canvas = document.getElementById('matrixRain');
const ctx = canvas.getContext('2d');

// Adjust the canvas size
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

// Character set for the matrix rain
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charArray = characters.split('');

const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = [];

// Initialize the drops
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

// Function to draw the matrix rain
function drawMatrix() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; // Transparent background to create a trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00'; // Green color for the matrix rain
    ctx.font = `${fontSize}px monospace`;

    for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

// Animate the matrix rain
setInterval(drawMatrix, 33);
