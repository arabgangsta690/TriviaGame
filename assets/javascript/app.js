$(document).ready(function(){
	$("#start").click(function(){
    function initialScreen() {
	startScreen = "<p class= timer><p class= answer><p class= answer><p class= answer>";
	$(".mainArea").html(startScreen);
}

initialScreen();


$("body").on("#start", function(event){
	 

	generateHTML();

	timerWrapper();

}); 

$("body").on("click", ".answer", function(event){
	

	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {
		

		clearInterval(theClock);
		generateWin();
	}
	else {
		
		clearInterval(theClock);
		generateLoss();
	}
}); 

$("body").on("click", ".reset-button", function(event){

	resetGame();
}); 

});  

function generateLossDueToTimeOut() {
	unansweredTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Too Much Time!  The correct answer was: " + correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/facepalm.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateWin() {
	correctTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Yup! The answer is: " + correctAnswers[questionCounter] + "</p>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateLoss() {
	incorrectTally++;
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Wrong! The correct answer is: "+ correctAnswers[questionCounter] + "</p>" + "<img class='center-block img-wrong' src='assets/images/facepalm.jpg'>";
	$(".mainArea").html(gameHTML);
	setTimeout(wait, 4000);
}

function generateHTML() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
	$(".mainArea").html(gameHTML);
}

function wait() {
	if (questionCounter < 7) {
	questionCounter++;
	generateHTML();
	counter = 30;
	timerWrapper();
	}
	else {
		finalScreen();
	}
}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
	function thirtySeconds() {
		if (counter === 0) {
			clearInterval(theClock);
			generateLossDueToTimeOut();
		}
		if (counter > 0) {
			counter--;
		}
		$(".timer").html(counter);
	}
}

function finalScreen() {
	gameHTML = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + counter + "</span></p>" + "<p class='text-center'>Here is your score!" + "</p>" + "<p class='summary-correct'>Correct Answers: " + correctTally + "</p>" + "<p>Wrong Answers: " + incorrectTally + "</p>" + "<p>Unanswered: " + unansweredTally + "</p>";
	$(".mainArea").html(gameHTML);
}

function resetGame() {
	questionCounter = 0;
	correctTally = 0;
	incorrectTally = 0;
	unansweredTally = 0;
	counter = 30;
	generateHTML();
	timerWrapper();
}

var startScreen;
var gameHTML;
var counter = 30;
var questionArray = ["What is my favorite color?", "What is my favorite food?", "What is my favorite country?", "What is my favorite car brand?", "What is my favorite activity?", "What is my favorite computer brand?", "What is my favorite city?", "What is my favorite weather?"];
var answerArray = [["White", "Black", "Blue", "Yellow"], ["Pizza","Hamburger","Spaghetti","Breadsticks"], ["Germany", "Sweeden", "Merica", "Pakistan"], ["Toyota","Mitsubshi","Bmw","Mercedes"], ["Sleeping", "Driving", "Eating", "Coding"], ["Apple","Asus","Tree","lightbulb"], ["Columbus", "Cleveland", "Cincinati", "Cali"], ["Thunderstorms","Cloudy","Sun","Rain"]];
var correctAnswers = ["A. White", "B. Hambuger", "C. Merica", "C. Bmw", "D. Coding", "A. Apple", "B. Cleveland", "D. Rain"];
var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctTally = 0;
var incorrectTally = 0;
var unansweredTally = 0;
});

