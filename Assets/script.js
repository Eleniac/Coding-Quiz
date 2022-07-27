var button1 = document.getElementById ("#button1");
var button2 = document.getElementById ("#button2");
var button3 = document.getElementById ("#button3");
var button4 = document.getElementById  ("#button4");









var timeEl =document.querySelector("#time");

var mainEl = document.getElementById("main");

var secondsleft= 10;

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

