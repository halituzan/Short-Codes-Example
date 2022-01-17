yes.onclick = (e) => {
    answ1.innerHTML = "- Tabi ki"
    answ1.style.color = "white"
    sentence2.style.display = "block"
    e.target.parentElement.style.display = "none"
    answer2.style.display = "block"
}

understand.onclick = (e) => {
    e.target.parentElement.style.display = "none"
    answ2.innerHTML = "- Evet Biliyorum"
    answ2.style.color = "white"
    answ2.style.display = "block"
    answer3.style.display = "block"

}
start.onclick = (e) => {
    e.target.parentElement.style.display = "none"
    sentence3.style.display = "block"
    game.style.filter = "none"
    sentence1.style.display = "none"
    sentence2.style.display = "none"
    answ1.style.display = "none"
    answ2.style.display = "none"
}


rand = (arr) => Math.floor(Math.random() * arr.length)
let randO = rand(trButton);
let indexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8]
clickEvent = (e) => {
    let xyz = Array.from(trButton)
    let asd = xyz.indexOf(e.target)
    
    indexArr = indexArr.filter(i => i !== asd)
    
    console.log(asd)
    if (e.target.innerHTML === "") {
        e.target.innerHTML = "X"
    }

    if ((tdTop1.innerText === "X" && tdTop2.innerText === "X" && tdTop3.innerText === "X") ||
        (tdCenter1.innerText === "X" && tdCenter2.innerText === "X" && tdCenter3.innerText === "X") ||
        (tdBottom1.innerText === "X" && tdBottom2.innerText === "X" && tdBottom3.innerText === "X") ||
        (tdTop1.innerText === "X" && tdCenter2.innerText === "X" && tdBottom3.innerText === "X") ||
        (tdTop1.innerText === "X" && tdCenter1.innerText === "X" && tdBottom1.innerText === "X") ||
        (tdTop2.innerText === "X" && tdCenter2.innerText === "X" && tdBottom2.innerText === "X") ||
        (tdTop3.innerText === "X" && tdCenter3.innerText === "X" && tdBottom3.innerText === "X") ||
        (tdTop3.innerText === "X" && tdCenter2.innerText === "X" && tdBottom1.innerText === "X")) {

        sentence4.style.display = "block";
        sentence3.style.display = "none";
        game.style.filter = "blur(7px)";
        game.style.zIndex = "-9999";
        again.style.display = "block"

        return;
    }



    if (trButton[randO].innerHTML !== "X" && trButton[randO].innerHTML !== "O") {
        trButton[randO].innerHTML = "O"
        indexArr = indexArr.filter(i => i !== randO)
        console.log(randO) // 8 
    } else {

        console.log("buraya girdi")
        let randIndex = rand(indexArr)
        console.log(randIndex) // 
        console.log(indexArr[randIndex]) // 
        console.log(indexArr)
        if (indexArr[0]=== undefined) {
            game.style.filter = "blur(7px)";
            game.style.zIndex = "-9999";
            again.style.display = "block";
            sentence3.style.display = "none";
            sentence6.style.display = "block";
        } else {
            trButton[indexArr[randIndex]].innerHTML = "O"
        }
       
        indexArr = indexArr.filter(i => i !== indexArr[randIndex])
        console.log(indexArr)
        console.log(indexArr[randIndex])

    }

    if ((tdTop1.innerText === "O" && tdTop2.innerText === "O" && tdTop3.innerText === "O") ||
        (tdCenter1.innerText === "O" && tdCenter2.innerText === "O" && tdCenter3.innerText === "O") ||
        (tdBottom1.innerText === "O" && tdBottom2.innerText === "O" && tdBottom3.innerText === "O") ||
        (tdTop1.innerText === "O" && tdCenter2.innerText === "O" && tdBottom3.innerText === "O") ||
        (tdTop1.innerText === "O" && tdCenter1.innerText === "O" && tdBottom1.innerText === "O") ||
        (tdTop2.innerText === "O" && tdCenter2.innerText === "O" && tdBottom2.innerText === "O") ||
        (tdTop3.innerText === "O" && tdCenter3.innerText === "O" && tdBottom3.innerText === "O") ||
        (tdTop3.innerText === "O" && tdCenter2.innerText === "O" && tdBottom1.innerText === "O")) {
        sentence5.style.display = "block";
        sentence3.style.display = "none";
        game.style.filter = "blur(7px)";
        game.style.zIndex = "-9999";
        again.style.display = "block";
        return;
    }



}
for (let i = 0; i < trButton.length; i++) {
    trButton[i].addEventListener("click", clickEvent);
}






// button.addEventListener("click", clickEvent);

