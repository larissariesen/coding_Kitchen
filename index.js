let subPages = [
    {title: "Seven Segment Display", href: "sevenSegmentDisplay/sevenSegmentDisplay,html"},
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
    const cardDiv = document.createElement('div');
    const aElement = document.createElement('a');

    cardDiv.className = 'subPageCard';

    aElement.href = subPage.href;
    aElement.textContent = subPage.title;

    cardDiv.appendChild(aElement);

    return cardDiv;
}

window.onload = () => {
    showSubPageCard()
}