var winner = document.querySelector(".container h1");

//for dice - one
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var player1 = document.querySelector("img.img1");
player1.setAttribute("src", "./images/dice" + randomNumber1 + ".png");

//for dice - two
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var player2 = document.querySelector("img.img2");
player2.setAttribute("src", "./images/dice" + randomNumber2 + ".png");

//winner case
if (randomNumber1 < randomNumber2) {
    winner.innerText = "Player 2 wins";
} else if (randomNumber2 < randomNumber1) {
    winner.innerText = "Player 1 wins";
} else {
    winner.innerText = "Draw";
}