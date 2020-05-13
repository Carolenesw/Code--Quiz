
// Create required variables based on quiz criteria:
var question = quiQuestions.length - 1;
var startEl = document.getElementById("start");
var timerEl = document.getElementById("count");
var scoreEl = document.getElementById("score");
var intialEl = document.getElementById("initial");
var submitEl = document.getElementById("submit");
var counter = 50;
var intCount = 0;

// set startTimer show quiz count down 
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


// document.addEventListener("click", startTimer()) 