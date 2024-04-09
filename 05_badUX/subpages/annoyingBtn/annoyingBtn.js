document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('annoyingBtn');
    btn.addEventListener('mouseover', () => {
        const height = Math.floor(Math.random() * (window.innerHeight - 100));
        const width = Math.floor(Math.random() * (window.innerWidth - 100));
        btn.style.left = `${width}px`;
        btn.style.top = `${height}px`;
    });
});