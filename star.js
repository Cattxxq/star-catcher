
const gameOverId = document.querySelector("#gameOver");
const scoreId = document.querySelector("#score");
const stars = document.querySelector("#stars");

let score = 0;
// move stars function 
function moveStars() {
    stars.style.top = Math.random()*200+'px';
    stars.style.left = Math.random()*500+'px';
    console.log(stars);
}
// after every second movestars function gets callled
setInterval(moveStars, 1000);


// add score
function addScore() {
    score = score + 1;
    scoreId.innerText = score;
}
// game over function
function gameOver() {
    gameOverId.style.display = "block";
    stars.style.display = "none";
}
// after 10 seconds game over function called
setTimeout(gameOver, 10000);
stars.addEventListener("click", addScore);