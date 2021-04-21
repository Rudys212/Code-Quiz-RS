//var for questions is needed. can set up in an array. how many questions??
//var for answer to questions
//var for choices to questions
//var for timer. how much time???
//var for penalized time
//var for score
//numerical variables
var index = 0;
var score = 0;
var currentQstn = 0;
var finalQstn = qstns.length;
var highScore;
//time * questions--> 15 sec * 5 questions=75 sec
var timeCount = 75;
var timer;
// variables being set for questions
var qstns = [
  {
    question: "Question 1: How many HTML heading levels exist?",
    choices: ["a. 9", "b. 10", "c. 7", "d. 8"],
    answer: "c. 7",
  },
  {
    question: "Question 2: How many expressions/parts makeup a for loop?",
    choices: ["a. 3", "b. 2", "c. 4", "d. 5"],
    answer: "a. 3",
  },
  {
    question: "Question 3: What CSS property makes text bold?",
    choices: [
      "a. font-style",
      "b. font-weight",
      "c. font-family",
      "d. font-variant",
    ],
    answer: "b. font-weight",
  },
  {
    question:
      "Question 4: Which of the following HTML element does not require a closing end tag?",
    choices: ["a. <header>", "b. <div>", "c. <br>", "d. <p>"],
    answer: "c. <br>",
  },
  {
    question:
      "Question 5: When an array contains another array, it is known as what?",
    choices: [
      "a. double array",
      "b. array:array",
      "c. array++",
      "d. nested array",
    ],
    answer: "d. nested array",
  },
];
// variables for HTML elements

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

//function to start quiz
function displayQ() {
  highScoreEl.style.display = "none";
  if (currentQstn === finalQstn) {
    return highScoreEl();
  }
  var currentQuestion = qstns[currentQuestion];
  qs.innerHTML = qstns[currentQuestion].question;
  btnA.innerHTML = currentQuestion.choices[0];
  btnB.innerHTML = currentQuestion.choices[1];
  btnC.innerHTML = currentQuestion.choices[2];
  btnD.innerHTML = currentQuestion.choices[3];
}

//eventlistent to buttons
startBtn.addEventListener("click", displayQ);
submitScoreBtn.addEventListener("click", submit);
