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

//create questions
var quizQuestions = [
  {
    question:"Click HTML?", 
    a:["HTML", true],
    b:["CSS", false],
    c:["Javascript", false], 
    d:["jQuery", false]
  },
  {
    question:"Click CSS?",
    a:["HTML", false],
    b:["CSS", true],
    c:["Javascript", false],
    d:["jQuery", false]
  },
  {
    question:"Click Javascript?", 
    a:["HTML", false] ,
    b:["CSS,", false],
    c:["jQuery", false], 
    d:["Javascript", true] 
  },
  {
    question:"Click jQuery?", 
    a:["HTML", false], 
    b:["CSS", false],
    c:["Javascript", false],
    d:["jQuery", true]
  },
  {
    question:"Who makes bootstrap", 
    a:["Twitter", true], 
    b:["I do", false],
    c:["No one?", false],
    d:["I'm not sure", false]
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


console.log(quizQuestions.length);
console.log(quizQuestions[2]);

//create countdown function for highscore
function countdown() {
  
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
    console.log(startTime);
  }, 1000)
};

var num = 0;

function quiz() {
    questionEl.appendChild(questionP);
    questionP.textContent = quizQuestions[num].question;
    answerEl.appendChild(aLi1);
    answerEl.appendChild(aLi2);
    answerEl.appendChild(aLi3);
    answerEl.appendChild(aLi4);
    aLi1.innerHTML = "<button class='button-answer'>" + quizQuestions[num].a[0] + "</button>";
    aLi2.innerHTML = "<button class='button-answer'>" + quizQuestions[num].b[0] + "</button>";
    aLi3.innerHTML = "<button class='button-answer'>" + quizQuestions[num].c[0] + "</button>";
    aLi4.innerHTML = "<button class='button-answer'>" + quizQuestions[num].d[0] + "</button>";
    answerEl.addEventListener("click", function (event) {
      console.log(event.target.textContent);
    return num;
    });
  };
console.log(num);


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


