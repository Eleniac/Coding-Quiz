//buttons Id's
var time = document.querySelector (".timeEl");
var startBtn = document.querySelector ("#start");
var choices = document.querySelector(".choices")
var questionsArray=document.querySelector("#question-text")
var timeleft= 45;

var choicesArray = ["A function", "An emoji", "List of Values", "Programming Language","An element", "A computer game", "A kind of coffee", "Programming Language","A variable", "used for all elements", "List of Values", "A tag","A program", "An attachment on a shoe", "List of Values", "A front-end framework"]

var questionsArray = ["What is an array","What is JavaScript", "What is a global attribute","What is Bootstrap"]

// //TIMER Function
// function time() {

// var timerInterval =setInterval() {
// timeLeft--; //counting backwards by 1
// time.textContent =timeLeft + //concat string
// "Seconds left until you are unable to answer the question";

// if(timeLeft === 0) {

// clearInterval(timerInterval);

// displayMessage ();

//  }1000;
//  }

// function displayMessage() {
//   time.textcontent = "";
//   alert("Game Over");
//  }


//Function #1 ,start timer,hide the start screen
//unhide questions
function codingStart(){
 
    startBtn.style.display = "none";
startBtn.textContent=questionsArray[0]
startBtn.textContent=choicesArray[0-3]
choicesArray++
    startBtn.style.display = "block";
}

//button startBtn available to click
startBtn.addEventListener('click', codingStart) 


//Function #2 getting the questions and choices to display (pulling questions and one index)
function questionsAppear() {
questions.style.display = "block";
   questionsArray.textContent=questionsArray[0]
   startBtn.textContent=choicesArray[0-3]
    choicesArray++
  
}
questions.addEventListener('click', questionsAppear) 


//Function #3 user selects choice and determines if it is right or wrong (where are you in the index) continue to next question through function 3 or end game
function userChoice() {

}

//an event listener has to be created to submit



//Function #4 end the game,  hide questions and display end screen, stop timer
function endGame () {

}



//Function #5 local storage of the user's information and scores
function saveScore () {

}

















// buttons.addEventListener ('click', codingStart() ) {
//     buttons.style.display = "none";

//     buttons = document.getElementById('buttons');
//     buttons.style.display = 'block';
// }



