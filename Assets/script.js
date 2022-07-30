//buttons Id's
var buttons = document.querySelector (".buttons");
var time = document.querySelector (".timeEl");
var startButton = document.querySelector ("#start");
var questionsContainer = document.querySelector(".questions-container")
var questionOneButton = document.querySelector ("#question-text");
var timeleft= 45;
var questionIndex = 0
var questionsArray = [
    {
        question: "What is an array",
        choices: ["A function", "An emoji", "List of Values", "Programming Language"],
        answer: 2
       
    },
    {
        question: "What is JavaScript",
        choices: ["An element", "A computer game", "A kind of coffee", "Programming Language"],
        answer: 4
       
    },
    {
        question: "What is a global attribute",
        choices: ["A function", "used for all elements", "List of Values", "A tag"],
        answer: 2
       
    },
    {
        question: "What is Bootstrap",
        choices: ["A function", "An attachment on a show", "List of Values", "A front-end framework"],
        answer: 4
       
    },
]
//function 5 local storage of the user's information and scores
function saveScore () {

}


//an event listener has to be created to submit



//function 4 end the game,  hide questions and display end screen, stop timer
function endGame () {

}




//function 3 user selects choice and determines if it is right or wrong (where are you in the index) continue to next question through function 3 or end game
function userChoice() {

}


//function 2 getting the questions and choices to display (pulling questions and one index)
function questionsAppear() {

}


//need a function for time
function time() {

var timerInterval =setInterval function() {
timeLeft--; //counting backwards by 1
time.textContent =timeLeft + //concat string
"Seconds left until you are unable to answer the question";

if(timeLeft === 0) {

clearInterval(timerInterval);

displayMessage ();

 }1000;
 }

function displayMessage() {
  time.textcontent = "";
  alert("Game Over");
 }


//start function one,start timer,hide the start screen
//unhide questions
function codingStart(){
 
    startButton.style.display = "none";
button1.textContent=questionsArray[questionIndex].choices[0]
questionIndex++

button2.textContent=questionsArray[questionIndex].choices[1]
questionIndex++

button3.textContent=questionsArray[questionIndex].choices[2]
questionIndex++

button4.textContent=questionsArray[questionIndex].choices[3]
questionIndex++

questionsContainer.style.display = "block";
}



//button start button available to click
startButton.addEventListener('click', codingStart) 




//function2 moving past the first set of questions
function questionOne(){
    questionOneButton.style.display = "block";
   button1.textContent=questionsArray[questionsIndex].choices [0]
    questionsIndex++
  
}
questionOneButton.addEventListener('click', questionOne) 






// buttons.addEventListener ('click', codingStart() ) {
//     buttons.style.display = "none";

//     buttons = document.getElementById('buttons');
//     buttons.style.display = 'block';
// }












//README 

//I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
//SO THAT I can gauge my progress compared to my peers
//GIVEN I am taking a code quiz
//WHEN I click the start button
//THEN a timer starts and I am presented with a question
//WHEN I answer a question
//THEN I am presented with another question
//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock
//WHEN all questions are answered or the timer reaches 0
//THEN the game is over
//WHEN the game is over
//THEN I can save my initials and my score

