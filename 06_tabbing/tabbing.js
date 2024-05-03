function openTab(cityName, el, color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].id === cityName) {
            tabcontent[i].style.opacity = "1"; // Set opacity to 1 for selected tab content
            tabcontent[i].style.display = "block"; // Show selected tab content
        } else {
            tabcontent[i].style.opacity = "0"; // Set opacity to 0 for other tab contents
            tabcontent[i].style.display = "none"; // Hide other tab contents
        }
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = ""; // Reset background color of all tab links
    }

    el.style.backgroundColor = color; // Set background color of selected tab link
}

window.onload = () => {
    document.getElementById("defaultOpen").click();
};
