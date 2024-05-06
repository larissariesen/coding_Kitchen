function openTab(id, el, color) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].id === id) {
            tabcontent[i].style.display = "block";
            tabcontent[i].style.background = color;
        } else {
            tabcontent[i].style.display = "none";
        }
    }

    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }

    el.style.backgroundColor = color;
}

window.onload = () => {
    document.getElementById("defaultOpen").click();
};
