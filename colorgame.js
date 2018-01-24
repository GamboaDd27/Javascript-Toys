var numSq=6;
var colors=generateColors(numSq);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var messageDisplay=document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var modeButtons=document.querySelectorAll(".mode");

for(var i=0;i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent===modeButtons[0].textContent? numSq=3:numSq=6;
		reset();
	})
}
resetButton.addEventListener("click",function(){
	colors=generateColors(numSq);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	messageDisplay.textContent="";
	for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
}
	resetButton.textContent="New Colors";
	h1.style.backgroundColor="steelBlue";
})
colorDisplay.textContent=pickedColor;
for(var i=0;i<squares.length;i++){
	squares[i].style.backgroundColor=colors[i];
	squares[i].addEventListener("click", function(){
		var bg=this.style.backgroundColor;
		if(bg==pickedColor){
			messageDisplay.textContent="Correct!";
			resetButton.textContent="Play Again?";
			changeColor(pickedColor);
			h1.style.backgroundColor=pickedColor;
		}else{
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	})
}

function changeColor(color){
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
}
function pickColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateColors(num){
	var arr=[]
	for(var i=0; i<num;i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var red=Math.floor(Math.random()*256);
	var green=Math.floor(Math.random()*256);
	var blue=Math.floor(Math.random()*256);
	var rgb="rgb("+red+", "+green+", "+blue+")";
	return rgb;
}
