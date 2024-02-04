var num1 = Math.floor(Math.random() * 6) + 1;
var num2 = Math.floor(Math.random() * 6) + 1;

var img1src = "images/dice"+num1+".png";
var img2src = "images/dice"+num2+".png";
document.querySelectorAll("img")[0].setAttribute("src", img1src);
document.querySelectorAll("img")[1].setAttribute("src", img2src);

if(num1 > num2){
    document.querySelector("h1").innerHTML = "Player 1 won!";
}
else if(num2 > num1){
    document.querySelector("h1").innerHTML = "Player 2 won!";
}
else
{
    document.querySelector("h1").innerHTML = "Its a Draw!";
}
