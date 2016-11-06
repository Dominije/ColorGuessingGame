var numberOfSquares = 6;
var colors = generateRandomColors(numberOfSquares);
var squares = document.querySelectorAll('.square')
var pickedColor = pickColor();
var colorDisplay = document.querySelector('#picked');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	for(var i = 0; i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent === "Easy"){
				numberOfSquares = 3;
			} else {
				numberOfSquares = 6;
			}
			reset();
		})
	}
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].addEventListener('click', function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				resetButton.textContent = "Play Again?";
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	};
	resetButton.addEventListener('click', function(){
		reset();
	});
	colorDisplay.textContent = pickedColor;
	reset();
}

for(var i = 0; i<modeButtons.length;i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy"){
			numberOfSquares = 3;
		} else {
			numberOfSquares = 6;
		}
		reset();
	})
}

for(var i=0;i<squares.length;i++){
	squares[i].style.background = colors[i];
	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.background;
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again!";
		}
	});
};

resetButton.addEventListener('click', function(){
	reset();
});

colorDisplay.textContent = pickedColor;

function reset(){
	colors = generateRandomColors(numberOfSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	for(var i = 0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
}	

function changeColors(color){
	//loop through all squares, change each color to match given color;
	for(var i = 0;i<squares.length;i++){
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
};

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i=0;i<num;i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
};

function randomColor(){
	//pick three random values between 0 and 255
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return 'rgb('+red+', '+green+', '+blue+')';
};