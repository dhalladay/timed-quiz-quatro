//set starting variables 
var questionNumber = 0;
var startTime = 60;
var timeInterval = startTime;
var currentScore = 0;
var savedHighscore = 0;

//set high score from local storage if it exists

var getHighscore = function() {
  if(JSON.parse(localStorage.getItem('high-score')) > 0) {
    savedHighscore = JSON.parse(localStorage.getItem('high-score'));
    console.log("getHighscore", savedHighscore);
    return savedHighscore;
  }
  else {
    savedHighscore = 0;
  }
};

//check local storage
getHighscore();

console.log("local storage", savedHighscore);

//create questions array
let quizQuestions = [
  {
    question:"Click HTML", 
    options: ["HTML", "CSS", "Javascript", "jQuery"],
    correct : "HTML"
  },
  {
    question:"Click CSS", 
    options: ["1", "2", "3", "4"],
    correct: "CSS"
  },
  {
    question:"Click Javascript", 
    options: ["a", "b", "n", "c"],
    correct: "Javascript"
  },
  {
    question:"Click jQuery", 
    options: ["HTML", "CSS", "Javascript", "jQuery"],
    correct: "jQuery"
  },
  {
    question:"Click It", 
    options: ["It", "CSS", "Javascript", "jQuery"],
    correct: "It"
  }
];

//element selector variables
var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('main');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers');
var quizContentEl = document.getElementById('quiz-content');

//element creator variables
var divEl = document.createElement('div');
var welcomeEl = document.createElement('p');
var instructionEl = document.createElement('p');
var questionP = document.createElement('h2');
var aLi1 = document.createElement('li');
var aLi2 = document.createElement('li');
var aLi3 = document.createElement('li');
var aLi4 = document.createElement('li');
var penaltyEl = document.createElement('p');
var buttonEl = document.createElement('button');

//add welcome message html
quizContentEl.appendChild(divEl);
divEl.appendChild(welcomeEl);
divEl.appendChild(instructionEl);
divEl.appendChild(penaltyEl);
divEl.appendChild(buttonEl);

//add css identifiers
divEl.setAttribute("id", "welcome-content")
buttonEl.setAttribute("data-name", "begin-button");
buttonEl.setAttribute("class", "button-answer");

//initial welcome text variables
var welcomeMessage = 'Coding Quiz Challenge'
var instructionMessage = 'Try to answer the following coding related questions within the time limit.'
var penaltyMessage = 'Keep in mind that incorrect answers will penalize your score/time by ten seconds!'
var startButton = "Start Quiz"

//add textContent to welcome message
welcomeEl.innerHTML = "<h2>" + welcomeMessage + "</h2>";
instructionEl.textContent = instructionMessage;
penaltyEl.textContent = penaltyMessage;
buttonEl.textContent = startButton;
timerEl.textContent = "Time: " + startTime;

//start button functionality
quizContentEl.addEventListener("click", function(event) {
  var element = event.target;
  if(element.querySelector("begin-button")) {
  };
  //clear main element content
  divEl.remove();
  //add functions to run
  countdown();
  quiz();
});

//create countdown function for highscore
var countdown = function() {
  timeInterval = setInterval(function () {
    if(startTime > 0) {
      timerEl.textContent = 'Time: ' + startTime;
      startTime--;
    }
    else {
      timerEl.textContent = 'Time: ' + startTime;
      stopTime();
      return startTime;
    }
  }, 1000)
};

//user answers question by clicking button
answerEl.addEventListener("click", function(event) {
  console.log("button click")
  var element = event.target;
  if(questionNumber < quizQuestions.length -1 && element.textContent === quizQuestions[questionNumber].correct) {
    questionNumber++;
    quiz();
  }
  else if (questionNumber < quizQuestions.length -1 && element.textContent != quizQuestions[questionNumber].correct) {
    startTime = startTime - 10;
    questionNumber++
    quiz();
  }
  else if (questionNumber === quizQuestions.length -1) {
    currentScore = startTime;
    stopTime();
    deleteQuiz();
    highStore();
    return currentScore;
  }
});

var quiz = function() {
  questionEl.appendChild(questionP);
  questionP.innerHTML = '<div">' + quizQuestions[questionNumber].question +'</div>';
  //maybe do a for loop in case different numbers of options are wanted
  // for (var i = 0, i < quizQuestions[questionNumber].options.length), i++)
  answerEl.appendChild(aLi1);
  answerEl.appendChild(aLi2);
  answerEl.appendChild(aLi3);
  answerEl.appendChild(aLi4);
  aLi1.innerHTML = '<button class="button-answer">' + quizQuestions[questionNumber].options[0] +'</button>';
  aLi2.innerHTML = "<button class='button-answer'>" + quizQuestions[questionNumber].options[1] + "</button>";
  aLi3.innerHTML = "<button class='button-answer'>" + quizQuestions[questionNumber].options[2] + "</button>";
  aLi4.innerHTML = "<button class='button-answer'>" + quizQuestions[questionNumber].options[3] + "</button>";
};

var deleteQuiz = function() {
  questionEl.remove();
  answerEl.remove();
};

var stopTime = function() {
  currentScore = startTime;
  console.log(currentScore);
  clearInterval(timeInterval);
  return currentScore;
};

var highStore = function() {
  console.log("from highStore", currentScore)
  console.log("highscore from hstore", savedHighscore)
  if (!savedHighscore) {
    mainEl.innerHTML = '<div class="high-score-text">Good job! No one else has played yet so you get the highscore!</div><div class="high-score-text">Your Score: ' + currentScore + '</div>';

    localStorage.setItem("high-score", currentScore);
    return savedHighscore;
  }
  else if (currentScore > savedHighscore) {
    mainEl.innerHTML = '<div class="high-score-text">Good job! You beat the high score!</div><div class="high-score-text">Your Score: ' + currentScore + '</div>';
    localStorage.setItem("high-score", currentScore);
    console.log("highstore scenario 1", JSON.parse(localStorage.getItem("high-score")));
  }
  else {
    mainEl.innerHTML = '<div class="high-score-text">Thanks for playing! You did not get the highscore.</div><div class="high-score-text">Your Score: ' + currentScore + '</div>';
    console.log("highstore scenario 2", JSON.parse(localStorage.getItem("high-score")));
  }
};

//view high scores
var button = document.getElementById("high-score-button");

button.addEventListener("click", function(event) {
  startTime = 0;
  currentScore = 0;
  deleteQuiz();
  divEl.remove();
  mainEl.innerHTML = '<div class="score">Current Highscore:</div><div class="score">'+ JSON.parse(localStorage.getItem('name')) + ' : ' + JSON.parse(localStorage.getItem('high-score')) + '</div><button class="button-answer" id="return">Return</button>';
});

//return to quiz

mainEl.addEventListener("click", function(event) {
  element = event.target
  if(element.querySelector("#return")) {
    console.log('trogdor');
    location.reload();
  };
});

