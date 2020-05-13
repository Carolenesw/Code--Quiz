
// Create required variables based on quiz criteria:

// store quiz questions 
var question = quiQuestions;

// store current answers and questions as strings
var currentQuestion = "";
var answer = "";
var correctAnswers = "";

var startEl = document.getElementById("start");
var timerEl = document.getElementById("count");
var scoreEl = document.getElementById("score");
var intialEl = document.getElementById("initial");
var submitEl = document.getElementById("submit");
var counter = 50;
var intCount = 0;
var questionIndex = 0;

console.log(question)

// set startTimer to show quiz count down 
function startTimer() {
    timerEl.textContent = counter;

}

// add event listener on start button 
startEl.addEventListener("click", function (event) {
    event.preventDefault();

    intCount = setInterval(function () {
        counter--;
        startTimer();

        if (counter <= 0) {
            counter = 0;
            startTimer();
            endQuiz();
        }
    }, 1000)

});

// render questions after while looping through array
function displayQuestions () {
    var questionEl = document.createElement("h2"); 

questionIndex = Math.floor(Math.random() * questions.length)
questionEl.textContent(questions[questionIndex].question);

console.log*(questionIndex);

// for(i = 0; ){

// }

}

// questionIndex = Math.floor(Math.random() * questions.length);
//   questionEl.text(questions[questionIndex].question);
//   for(i=0; i< choice.length; i++){
//     choice[i].innerHTML = questions[questionIndex].choices[i];
//   }

