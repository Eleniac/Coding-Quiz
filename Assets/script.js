//buttons Id's
var button1 = document.querySelector ("#button1");
var button2 = document.querySelector ("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector ("#button4");
var buttons = document.querySelector (".buttons")
var time = document.querySelector (".timeEl")
var startButton = document.querySelector ("#start")
var time =document.querySelector("#timer");
var timeleft= 45;
var questionsArray = [
    {
        
    }
]

//function #1 the start of the quiz
//when you click start the page changes to show first set of questions
//function #2 first set of questions in an array 
//for loop with answers
//timer begins as soon as first set of questions appear
//timer counts down while user answers questions
//get element by ID
//need an array with different correct answers (A, B, C, D)
//need for loop to cycle through when they get the wrong or correct answer


//make questions text equal to questions array text

function codingStart(){
 
    startButton.style.display = "none";

    // startButton.style.display = "block";
console.log ("quiz start");
}

startButton.addEventListener('click', codingStart()) 


// buttons.addEventListener ('click', codingStart() ) {
//     buttons.style.display = "none";

//     buttons = document.getElementById('buttons');
//     buttons.style.display = 'block';
// }




//timer section
//if they get a question wrong time is subtracted from the timer


// function time() {

//     //timer function
// var timerInterval =setInterval (function() {
//     timeLeft--; //counting backwards by 1
// timeEl.textContent =timeLeft + //concat string
// "Seconds left until you are unable to answer the question";

// //when seconds left reaches zero 
//  if(timeLeft === 0) {

//     //stops timer
//     clearInterval(timerInterval);

//     //send message add alert here 
//     displayMessage ();

//  }1000);//shows we are counting in seconds
// }
function displayMessage() {
    timeEl.textcontent = "";
    alert("Game Over");
}






//README 

//AS A coding boot camp student
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

