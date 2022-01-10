let squirrel = document.getElementById("squirrel");
let container = document.getElementById("container");
let smallIcon = document.getElementById("mini-icon");
let icon = document.querySelector(".icon");
let iconmini = document.querySelector("#iconmini");
const randLeft = () => Math.floor(Math.random() * 800)+175;
const randTop = () => Math.floor(Math.random() * 525)+175;
let rndWord = () => Math.floor(Math.random() * funnyWorlds.length)
start = () => {
    icon.style.display = "none";
    smallIcon.style.display = "block";
    container.style.position = "absolute";
    squirrel.style.width = "100px";
}
let dayiclass = document.querySelector("#taksimDayi")
move = () => {
    squirrel.style.position = "relative";
    squirrel.style.top = `${randTop()}px`
    squirrel.style.left = `${randLeft()}px`
    squirrel.innerHTML = `
    <div class="cumleler"><p>${funnyWorlds[rndWord()]}</p></div>
    <div id="mini-icon" style="top:${randTop()}px;left:${randLeft()}px" onmouseover="move(randTop(),randLeft())"><img src="squirrel.png" id="iconmini"></div>
    `

}



