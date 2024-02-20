function updateNumber(increase){
    let currentNum = parseInt(document.getElementById("display").innerText);
    if (currentNum === 9 && increase === true) {
        currentNum = 0;
    }
    else if (currentNum === 0 && increase === false) {
        currentNum = 9;
    }
    else if (increase === true) {
        currentNum++;
    }
    else {
        currentNum--;
    }
    switch (currentNum) {
        case 1:
            document.getElementById("display").innerText = 1;
            document.getElementById("box1").className = "one_1";
            document.getElementById("box2").className = "one_2";
            break;
        case 2:
            document.getElementById("display").innerText = 2;
            document.getElementById("box1").className = "two_1";
            document.getElementById("box2").className = "two_2";
            break;
        case 3:
            document.getElementById("display").innerText = 3;
            document.getElementById("box1").className = "three_1";
            document.getElementById("box2").className = "three_2";
            break;
        case 4:
            document.getElementById("display").innerText = 4;
            document.getElementById("box1").className = "four_1";
            document.getElementById("box2").className = "four_2";
            break;
        case 5:
            document.getElementById("display").innerText = 5;
            document.getElementById("box1").className = "five_1";
            document.getElementById("box2").className = "five_2";
            break;
        case 6:
            document.getElementById("display").innerText = 6;
            document.getElementById("box1").className = "six_1";
            document.getElementById("box2").className = "six_2";
            break;
        case 7:
            document.getElementById("display").innerText = 7;
            document.getElementById("box1").className = "seven_1";
            document.getElementById("box2").className = "seven_2";
            break;
        case 8:
            document.getElementById("display").innerText = 8;
            document.getElementById("box1").className = "eight_1";
            document.getElementById("box2").className = "eight_2";
            break;
        case 9:
            document.getElementById("display").innerText = 9;
            document.getElementById("box1").className = "nine_1";
            document.getElementById("box2").className = "nine_2";
            break;
        default:
            document.getElementById("display").innerText = 0;
            document.getElementById("box1").className = "zero_1";
            document.getElementById("box2").className = "zero_2";
            break;
    }
}

function showNumber(currentNum, box1, box2){
    switch (currentNum) {
        case 1:
            document.getElementById(box1).className = "one_1";
            document.getElementById(box2).className = "one_2";
            break;
        case 2:
            document.getElementById(box1).className = "two_1";
            document.getElementById(box2).className = "two_2";
            break;
        case 3:
            document.getElementById(box1).className = "three_1";
            document.getElementById(box2).className = "three_2";
            break;
        case 4:
            document.getElementById(box1).className = "four_1";
            document.getElementById(box2).className = "four_2";
            break;
        case 5:
            document.getElementById(box1).className = "five_1";
            document.getElementById(box2).className = "five_2";
            break;
        case 6:
            document.getElementById(box1).className = "six_1";
            document.getElementById(box2).className = "six_2";
            break;
        case 7:
            document.getElementById(box1).className = "seven_1";
            document.getElementById(box2).className = "seven_2";
            break;
        case 8:
            document.getElementById(box1).className = "eight_1";
            document.getElementById(box2).className = "eight_2";
            break;
        case 9:
            document.getElementById(box1).className = "nine_1";
            document.getElementById(box2).className = "nine_2";
            break;
        default:
            document.getElementById(box1).className = "zero_1";
            document.getElementById(box2).className = "zero_2";
            break;
    }
}

function showTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const firstHourNumber = parseInt(h.toString().charAt(0)) || 0;
    const secondHourNumber = parseInt(h.toString().charAt(1)) || 0;
    const firstMinuteNumber = parseInt(m.toString().charAt(0)) || 0;
    const secondMinuteNumber = parseInt(m.toString().charAt(1)) || 0;
    showNumber(firstHourNumber, "box1", "box2");
    showNumber(secondHourNumber, "box3", "box4");
    showNumber(firstMinuteNumber, "box5", "box6");
    showNumber(secondMinuteNumber, "box7", "box8");
}

// External - ChatGPT for window.onload -> had a cannot set className on undefined error
window.onload = function () {
    setInterval(showTime, 2000);
    showTime();
}