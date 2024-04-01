document.addEventListener('DOMContentLoaded', () => {
    console.log('loaded');
    const btn = document.querySelector('button');
    btn.addEventListener('mouseover', () => {
        console.log('mouseOver');
        const height = Math.floor(Math.random() * window.innerHeight);
        const width = Math.floor(Math.random() * window.innerWidth);
        btn.style.left = `${width}px`;
        btn.style.top = `${height}px`;
    });
});