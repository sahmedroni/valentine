let scaleFactor = 1;
let textIndex = 0;
let currentQuoteIndex = 1;
let firstClick = true;
const loveQuotes = [
    "I love you not only for what you are, but for what I am when I am with you.",
    "You are my today and all of my tomorrows.",
    "In your arms is right where I want to be, where no one else can ever find me.",
    "I saw that you were perfect, and so I loved you. Then I saw that you were not perfect and I loved you even more.",
    "If I had a flower for every time I thought of you, I could walk in my garden forever.",
    "I need you like a heart needs a beat.",
    "You're my paradise and I'd happily get stranded in you forever.",
    "I love you more than there are stars in the sky and fish in the sea.",
    "Every love story is beautiful, but ours is my favorite.",
    "I choose you. And I'll choose you over and over. Without pause. Without doubt. In a heartbeat."
];
const loveEmojis = ['❤️', '💖', '💕', '💞', '💘', '💝', '💓', '💗', '😍', '🥰'];

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('loveButton');
    const message = document.getElementById('mainMessage');
    const heart = document.getElementById('mainHeart');
    
    // Create floating hearts
    function createHearts() {
        const heartCount = 30;
        for (let i = 0; i < heartCount; i++) {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = loveEmojis[Math.floor(Math.random() * loveEmojis.length)];
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDelay = Math.random() * 3 + 's';
            heart.style.animationDuration = 2 + Math.random() * 5 + 's';
            heart.style.transform = `rotate(${Math.random() * 360}deg)`;
            heart.style.fontSize = Math.random() * 20 + 20 + 'px';
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
        
        if(firstClick) {
            const sorryPopup = document.createElement('div');
            sorryPopup.className = 'sorry-popup';
            sorryPopup.innerHTML = '💔<br><strong>SORRY</strong>';
            document.body.appendChild(sorryPopup);
            
            setTimeout(() => {
                sorryPopup.remove();
            }, 2000);
            
            firstClick = false;
        }
        
        triggerConfetti();
        heart.style.animation = 'none';
        setTimeout(() => heart.style.animation = 'float 3s ease-in-out infinite', 10);
    });

    button.addEventListener('click', () => {
        const quoteDisplay = document.getElementById('quoteDisplay');
        
        // Get current quote and increment index
        const currentQuote = loveQuotes[currentQuoteIndex];
        currentQuoteIndex = (currentQuoteIndex % (loveQuotes.length - 1)) + 1;
        
        quoteDisplay.textContent = currentQuote;
        quoteDisplay.classList.remove('hidden');
        quoteDisplay.classList.add('visible');
        
        triggerConfetti();
        createHearts();
    });

    // Initial hearts
    createHearts();

    // Add this at the bottom of the DOMContentLoaded event
    document.addEventListener('click', (e) => {
        // Only prevent on heart and button
        if(!e.target.closest('#mainHeart, #loveButton')) {
            const sorryPopup = document.createElement('div');
            sorryPopup.className = 'sorry-popup';
            sorryPopup.style.left = e.clientX + 'px';
            sorryPopup.style.top = e.clientY + 'px';
            sorryPopup.innerHTML = '💔<br><strong>SORRY</strong>';
            document.body.appendChild(sorryPopup);
            
            setTimeout(() => {
                sorryPopup.remove();
            }, 1500);
        }
    });
});
