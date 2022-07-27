//buttons Id's
var button1 = document.querySelector ("#button1");
var button2 = document.querySelector ("#button2");
var button3 = document.querySelector("#button3");
var button4 = document.querySelector ("#button4");


//get element by ID

//need an array with different correct answers (A, B, C, D)


//need for loop to cycle through when they get the wrong or correct answer


//call the H1 tag to append the question
//call the Li tag to append the answer options
//alert game over triggered once timer runs out 
//needs to store the scores




//timer section
var time =document.querySelector("#timer");
var secondsleft= 60;

function setTime() {

var timerInterval =setInterval (function() {
    secondsLeft--;
timeEl.textContent =secondsLeft + "seconds left until you are unable to answer the question";
 if(secondsLeft === 0) {

    clearInterval(timerInterval);
    sendMessage ();
 }
 1000);
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

