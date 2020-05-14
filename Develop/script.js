
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
var submitEl = document.getElementById("submit");
var finalScore = document.getElementById("final-Score");
var questionEl = document.getElementById("question");
var option = document.querySelectorAll(".option");
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

    // localStorage.setItem("time", "counter");
    intCount = setInterval(function () {
        counter--;
        startTimer();

        if (counter <= 0) {
            counter = 0;
            startTimer();
            endQuiz();
        }
    }, 1000)
    showQuestion();
});


// render questions after while looping through array
function showQuestion() {

    questionIndex = Math.floor(Math.random() * question.length)
    questionEl.textContent = question[questionIndex].question;

    for (i = 0; i < option.length; i++) {
        option[i].innerHTML = question[questionIndex].choices[i]
    }

};


// when user click submit button on quiz page with initial congrats message appears.
submitEl.addEventListener("click", function (event) {
    event.preventDefault();
    var intialEl = document.querySelector("#inputInitial").value

    if (intialEl === "") {
        alert("Please enter your initials!")
    } else {

        document.querySelector("#congrats").innerHTML = "Congratulation...! " + intialEl + " You score is " + counter + "!";

        localStorage.setItem("initial", intialEl);
        localStorage.setItem("score", counter);

        renderScoreCard();

        console.log(intialEl)
    }

});






// questionIndex = Math.floor(Math.random() * questions.length);
//   questionEl.text(questions[questionIndex].question);
//   for(i=0; i< choice.length; i++){
//     choice[i].innerHTML = questions[questionIndex].choices[i];
//   }

