var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomDiceImage="./images/dice"+randomNumber1+".png";
document.querySelector(".img1").setAttribute("src",randomDiceImage);  // OR you can directly use the location "./images/dice"+randomNumber1+".png"

var randomNumber2=Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "./images/dice"+randomNumber2+".png");

if(randomNumber1 === randomNumber2){
    document.querySelector(".container h1").innerHTML="Draw!";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector(".container h1").innerHTML="🚩Player 1 Wins!";
}
else{
    document.querySelector(".container h1").innerHTML="Player 2 Wins!🚩";
}