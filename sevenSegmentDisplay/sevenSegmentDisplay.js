function incrementNum(){
    const currentNum = parseInt(document.getElementById("display").innerText);
    if (currentNum !== 9){
        document.getElementById("display").innerText = currentNum +1;
    }
}

function decrementNum(){
    const currentNum = parseInt(document.getElementById("display").innerText);
    if(currentNum !== 0){
        document.getElementById("display").innerText = currentNum -1;
    }
}