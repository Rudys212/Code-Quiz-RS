//var for questions is needed. can set up in an array. how many questions??
//var for answer to questions
//var for choices to questions
//var for timer. how much time???
//var for penalized time
//var for score
//numerical variables

// variables being set for questions
var qstns = [
  {
    question: "Question 1: How many HTML heading levels exist?",
    choices: ["9", "10", "7", "8"],
    answer: "2",
  },
  {
    question: "Question 2: How many expressions/parts makeup a for loop?",
    choices: ["3", "2", "4", "5"],
    answer: "0",
  },
  {
    question: "Question 3: What CSS property makes text bold?",
    choices: ["Font-style", "Font-weight", "Font-family", "Font-variant"],
    answer: "1",
  },
  {
    question:
      "Question 4: Which of the following HTML element does not require a closing end tag?",
    choices: ["<header>", "<div>", "<br>", "<p>"],
    answer: "2",
  },
  {
    question:
      "Question 5: When an array contains another array, it is known as what?",
    choices: ["Double Array", "Array:Array", "Array++", "Nested Array"],
    answer: "3",
  },
];

// variables for HTML elements/DOM

var mainSection = document.getElementById("main");
var startPg = document.getElementById("start-pg");
var startPgTxt = document.getElementById("start-pg-txt");
var startBtn = document.getElementById("start-button");
var qsSection = document.getElementById("qs-section");
var qs = document.getElementById("qs");
var btnA = document.getElementById("button-a");
var btnB = document.getElementById("button-b");
var btnC = document.getElementById("button-c");
var btnD = document.getElementById("button-d");
var highScoreEl = document.getElementById("highscore");
var highScoreSec = document.getElementById("highscore-sec");
var initialEl = document.getElementById("initials");
var submitScoreBtn = document.getElementById("submitScore");
var resetBtn = document.getElementById("resetBttn");
var timerEl = document.getElementById("timer");
var timerTxt = document.getElementById("timer-text");
var timerCount = document.getElementById("timer-count");
var scoreSection = document.getElementById("scoreDisplay");

var finalQstn = qstns.length;
var index = 0;
var score = 0;
var currentQstn = 0;
var highScore;
//time * questions--> 15 sec * 5 questions=75 sec
var timeTotal = 75;
var timer;

//function that loads page with just the start pg intro
function init() {}
qsSection.style.display = "none";
// highScoreSec.style.display = "none";
timerEl.style.display = "none";
highScoreEl.style.display = "none";

//function to get quiz to display on click of start button
function displayQ() {
  qsSection.style.display = "block";
  timerEl.style.display = "block";
  highScoreSec.style.display = "none";
  startPg.style.display = "none";
  if (currentQstn === finalQstn) {
    return highScoreEl();
  }
  var currentQuestion = qstns[currentQstn];
  qs.innerHTML = currentQuestion.question;
  btnA.innerHTML = currentQuestion.choices[0];
  btnB.innerHTML = currentQuestion.choices[1];
  btnC.innerHTML = currentQuestion.choices[2];
  btnD.innerHTML = currentQuestion.choices[3];
}
function checkAnswer(event) {
  event.preventDefault();
  scoreSection.style.display = "block";
  var p = document.createElement("p");
  scoreSection.appendChild(p);

  if (qstns[currentQstn].answer === event.target.value) {
    p.textContent = "Correct!";
  } else if (qstns[currentQstn].answer !== event.target.value) {
    timerCount = timerCount - 10;
    p.textContent = "Wrong!";

    if (currentQstn < qstns.length) {
      currentQstn++;
    }
    qsSection(currentQstn);
  }
}
//adds function for quiz timer to begin on the click of start button
function startQuizTimer() {
  highScoreSec.style.display = "none";
  startPg.style.display = "none";
  displayQ();
  timer = setInterval(function () {
    timeTotal--;
    timerCount.textContent = "Time Left: " + timeTotal;

    if (timeTotal === 0) {
      clearInterval(timer);
      scoreDisplay();
    }
  }, 1000);
  timerEl.style.display = "block";
}

function scoreDisplay() {
  // timerEl.style.display = "none";
  highScoreEl.style.display = "flex";
  clearInterval(timer);
  initialEl.value = "";
  highScoreEl.innerHTML = score + " out of " + qstns.length + " correct!";
}

submitScoreBtn.addEventListener("click", startQuizTimer);
//eventlistent to buttons

startBtn.addEventListener("click", startQuizTimer);
