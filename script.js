// ===== TARGET DATE =====
const targetDate = new Date('2026-12-30T00:00:00').getTime();

// ===== DOM ELEMENTS =====
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const linkButton = document.getElementById('linkButton');
const buttonText = document.getElementById('buttonText');
const completionMessage = document.getElementById('completionMessage');
const sakuraContainer = document.getElementById('sakuraContainer');

// ===== COUNTDOWN LOGIC =====
function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance < 0) {
        // Countdown finished
        daysElement.textContent = '0';
        hoursElement.textContent = '0';
        minutesElement.textContent = '0';
        secondsElement.textContent = '0';

        // Unlock button
        linkButton.classList.remove('locked');
        linkButton.innerHTML = '<span>🔓</span> <span>Klik untuk menuju website tujuan</span>';
        completionMessage.style.display = 'block';

        // Set target URL here
        linkButton.href = 'https://example.com';

        clearInterval(countdownInterval);
        return;
    }

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Update display
    daysElement.textContent = days;
    hoursElement.textContent = hours;
    minutesElement.textContent = minutes;
    secondsElement.textContent = seconds;
}

// Start countdown
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

// ===== PREVENT CLICKING WHEN LOCKED =====
linkButton.addEventListener('click', function(e) {
    if (this.classList.contains('locked')) {
        e.preventDefault();
        alert('⏰ Tombol masih terkunci! Tunggu hingga waktu hitungan mundur selesai.');
    }
});

// ===== SAKURA LEAVES FALLING ANIMATION =====
function createSakuraLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'sakura-leaf';

    // Random position
    const startX = Math.random() * 100;
    leaf.style.left = startX + '%';

    // Random animation duration (3-6 seconds)
    const duration = Math.random() * 3 + 3;
    leaf.style.animationDuration = duration + 's';

    // Random size variation
    const size = Math.random() * 15 + 12;
    leaf.style.width = size + 'px';
    leaf.style.height = size + 'px';

    // Random color variation (pink shades)
    const colors = [
        '#FFB7D5', '#FF9EC4', '#FF6B9D', '#FFC2D1', '#FFA0B8', '#FF85A2'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    // SVG leaf shape
    leaf.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C12 2 6 6 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 6 12 2 12 2Z" 
                  fill="${color}" opacity="0.8"/>
            <path d="M12 6C12 6 9 9 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 9 12 6 12 6Z" 
                  fill="${color}" opacity="0.5"/>
            <line x1="12" y1="8" x2="12" y2="16" stroke="#FF6B9D" stroke-width="0.5" opacity="0.6"/>
        </svg>
    `;

    sakuraContainer.appendChild(leaf);

    // Remove leaf after animation
    setTimeout(() => {
        leaf.remove();
    }, duration * 1000);
}

// Create leaves periodically
setInterval(createSakuraLeaf, 400);

// Initial leaves
for (let i = 0; i < 8; i++) {
    setTimeout(createSakuraLeaf, i * 300);
}

// ===== PROFILE IMAGE HANDLER =====
const profileImage = document.getElementById('profileImage');
const profilePlaceholder = document.getElementById('profilePlaceholder');

function setProfileImage(url) {
    profileImage.src = url;
    profileImage.style.display = 'block';
    profilePlaceholder.style.display = 'none';
}

// Contoh penggunaan (uncomment dan ganti URL):
// setProfileImage('https://example.com/your-profile-image.jpg');