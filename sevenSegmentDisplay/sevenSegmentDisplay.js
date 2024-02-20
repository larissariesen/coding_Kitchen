function incrementNum(){
    // todo - updateNumber with input if decrease or increase button is clicked
    let currentNum = parseInt(document.getElementById("display").innerText);
    if (currentNum !== 9){
        currentNum++;
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

function decrementNum(){
    const currentNum = parseInt(document.getElementById("display").innerText);
    if(currentNum !== 0){
        document.getElementById("display").innerText = currentNum -1;
    }
}