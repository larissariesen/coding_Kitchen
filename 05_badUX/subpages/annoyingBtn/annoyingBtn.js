document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('annoyingBtn');
    btn.addEventListener('mouseover', () => {
        const height = Math.floor(Math.random() * window.innerHeight);
        const width = Math.floor(Math.random() * window.innerWidth);
        btn.style.left = `${width}px`;
        btn.style.top = `${height}px`;
    });
});