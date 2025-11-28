const starsContainer = document.getElementById('stars');

for (let i = 0; i < 30; i++) {
    const star = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    star.setAttribute('width', '20');
    star.setAttribute('height', '20');
    star.setAttribute('viewBox', '0 0 20 20');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (2 + Math.random() * 2) + 's';

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M10 0 L12 8 L20 10 L12 12 L10 20 L8 12 L0 10 L8 8 Z');
    path.setAttribute('fill', '#fbbf24');
    path.setAttribute('opacity', '0.8');

    star.appendChild(path);
    starsContainer.appendChild(star);
}