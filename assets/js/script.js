//set starting question number
questionNumber = 0;

//element selector variables
var timerEl = document.getElementById('timer');
var mainEl = document.getElementById('quiz-content');
var questionEl = document.getElementById('question');
var answerEl = document.getElementById('answers');

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
mainEl.appendChild(divEl);
divEl.appendChild(welcomeEl);
divEl.appendChild(instructionEl);
divEl.appendChild(penaltyEl);
divEl.appendChild(buttonEl);

//text variables
var welcomeMessage = 'Coding Quiz Challenge'
var instructionMessage = 'Try to answer the following coding related questions within the time limit.'
var penaltyMessage = 'Keep in mind that incorrect answers will penalize your score/time by ten seconds!'
var startButton = "Start Quiz"
var startTime = 5;

//create questions array
var quizQuestions = [
  {
    "q":"Click HTML", 
    "a":"HTML",
    "b":"CSS",
    "c":"Javascript", 
    "d":"jQuery",
    "correct": "HTML"
  },
  {
    "q":"Click CSS", 
    "a":"HTML",
    "b":"CSS",
    "c":"Javascript", 
    "d":"jQuery",
    "correct": "CSS"
  },
  {
    "q":"Click Javascript", 
    "a":"HTML",
    "b":"CSS",
    "c":"Javascript", 
    "d":"jQuery",
    "correct": "Javascript"
  },
  {
    "q":"Click jQuery", 
    "a":"HTML",
    "b":"CSS",
    "c":"Javascript", 
    "d":"jQuery",
    "correct": "jQuery"
  },
  {
    "q":"Click It", 
    "a":"HTML",
    "b":"CSS",
    "c":"Javascript", 
    "d":"jQuery",
    "correct": "It"
  }
];

//add textContent to welcome message
welcomeEl.innerHTML = "<h2>" + welcomeMessage + "</h2>";
instructionEl.textContent = instructionMessage;
penaltyEl.textContent = penaltyMessage;
buttonEl.textContent = startButton;
timerEl.textContent = "Time: " + startTime;

//add css identifiers
divEl.setAttribute("id", "welcome-content")
buttonEl.setAttribute("data-name", "begin-button");

//start button functionality
mainEl.addEventListener("click", function(event) {
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

  var timeInterval = setInterval(function () {
    if(startTime > 0) {
      timerEl.textContent = 'Time: ' + startTime;
      startTime--;
    }
    else {
      timerEl.textContent = 'Time: ' + startTime;
      clearInterval(timeInterval);
      return startTime;
    }
  }, 1000)
};

var quiz = function() {
  questionEl.appendChild(questionP);
  questionP.textContent = quizQuestions[questionNumber].q;
  answerEl.appendChild(aLi1);
  answerEl.appendChild(aLi2);
  answerEl.appendChild(aLi3);
  answerEl.appendChild(aLi4);
  aLi1.innerHTML = "<button class='button-answer'>" + quizQuestions[questionNumber].a + "</button>";
  aLi2.innerHTML = "<button class='button-answer'>" + quizQuestions[questionNumber].b + "</button>";
  aLi3.innerHTML = "<button class='button-answer'>" + quizQuestions[questionNumber].c + "</button>";
  aLi4.innerHTML = "<button class='button-answer'>" + quizQuestions[questionNumber].d + "</button>";
};

answerEl.addEventListener("click", function() {
  if(questionNumber < quizQuestions.length) {
    questionNumber++;
    quiz();
  }
  else {
    answerEl.remove();
    questionP.textContent = "Thanks";
  }
});





