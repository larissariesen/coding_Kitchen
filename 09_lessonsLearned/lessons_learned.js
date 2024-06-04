document.addEventListener('DOMContentLoaded', () => {
    const placeholderTexts = [
        "Placeholder text for the first container",
        "Placeholder text for the second container",
        "Placeholder text for the third container",
        // Add more placeholder texts as needed
    ];

    const colors = ['#FF6347', '#4682B4', '#3CB371', '#FFD700', '#FF69B4']; // Add more colors as needed

    const items = document.querySelectorAll('section');
    for (let i = 0; i < items.length; i++) {
        items[i].style.background = colors[i % colors.length];
    }
});

