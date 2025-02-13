let scaleFactor = 1;
let textIndex = 0;
const consequences = [
    "A butterfly flaps its wings...",
    "Creating tiny changes in the atmosphere...",
    "Leading to altered weather patterns...",
    "Resulting in a hurricane weeks later...",
    "Changing the course of history..."
];

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('loveButton');
    const message = document.getElementById('mainMessage');
    const heart = document.getElementById('mainHeart');
    
    // Create floating hearts
    function createHearts() {
        const heartCount = 20;
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.animationDuration = 3 + Math.random() * 5 + 's';
            document.querySelector('.hearts-container').appendChild(heart);
        }
    }

    // Confetti effect
    function triggerConfetti() {
        const count = 200;
        const defaults = {
            origin: { y: 0.7 },
            colors: ['#ff0066', '#ff69b4', '#ff1493', '#ffffff']
        };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }

    heart.addEventListener('click', () => {
        message.classList.remove('hidden');
        message.classList.add('visible');
        triggerConfetti();
        heart.style.animation = 'none';
        setTimeout(() => heart.style.animation = 'float 3s ease-in-out infinite', 10);
    });

    button.addEventListener('click', () => {
        message.classList.toggle('visible');
        message.classList.remove('hidden');
        button.textContent = message.classList.contains('visible') 
            ? 'My Heart is Yours Forever ❤️' 
            : 'Click to See My Love';
        triggerConfetti();
        createHearts();
    });

    // Initial hearts
    createHearts();
});

function resetEffect() {
    scaleFactor = 1;
    textIndex = 0;
    document.querySelector('.butterfly').style.transform = 'scale(1)';
    document.querySelector('.effect-text').style.opacity = 0;
}