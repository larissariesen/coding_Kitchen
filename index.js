let subPages = [
    {title: "Seven Segment Display", href: "sevenSegmentDisplay/sevenSegmentDisplay.html"},
    {title: "TaskList", href: "tasklist/taskList.html"}
]

const showSubPageCard = () => {
    let subPagesDiv = document.getElementsByClassName("subPages")[0];
    subPagesDiv.innerHTML = '';
    subPages.forEach(subPage => {
        const subPageElement = createSubPageCard(subPage);
        subPagesDiv.appendChild(subPageElement)
    })
}

const createSubPageCard = (subPage) => {
    const aElement = document.createElement('a');
    aElement.href = subPage.href;
    aElement.textContent = subPage.title;

    return aElement;
}

window.onload = () => {
    showSubPageCard()
}