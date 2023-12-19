var index = 0
var timerInterval

// Multiple choice questions array
var questions = [
    {
        question: "What does JS stand for?",
        answer1: "JavaScript",
        answer2: "JavaShop",
        answer3: "JavaShip",
        answer4: "JavaStuff",
        correctanswer: "JavaScript"
    }, {
        question: "What does CSS stand for?",
        answer1: "Cats Chase Sheep",
        answer2: "Cool Cats Slide",
        answer3: "Cascading Style Sheets",
        answer4: "Code Cheat Sheet",
        correctanswer: "Cascading Style Sheets",
    }, {
        question: "What does HTML stand for?",
        answer1: "Hide My Lunch",
        answer2: "HyperText Markup Language",
        answer3: "HyperText Markdown Language",
        answer4: "Hitmonlee",
        correctanswer: "HyperText Markup Language",
    }, {
        question: "How do you log something to the console?",
        answer1: "console.logged()",
        answer2: "log.console()",
        answer3: "console.log()",
        answer4: ".console(log)",
        correctanswer: "console.log()",
    }, {
        question: "Which of the following is an example of version-control?",
        answer1: "mit",
        answer2: "git",
        answer3: "wit",
        answer4: "fit",
        correctanswer: "git",
    }
]

// Global Variables
var startGameEl = document.querySelector(".btn-start");
var timerEl = document.getElementById('timer');
var secondsLeft = 45;

var scoresArray = JSON.parse(localStorage.getItem('high-scores')) || [];
var welcome = document.querySelector("#welcome")
var qContainer = document.querySelector(".quiz-questions")
var userScore = document.querySelector('.player-score');

// Countdown timer function
function setTime() {
    var timeLeft = 45;
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;
        if (secondsLeft === 0) {
            showScore()
        }
    }, 1000);
};


// Starting the game function 
function startGame(event) {
    setTime()
    welcome.classList.add('hideContainers');

    qContainer.classList.remove('hideContainers')

    showQuestions()
}

// Display the questions function
function showQuestions() {

    document.querySelector(".question").textContent = questions[index].question;
    document.querySelector("#btn-1").textContent = questions[index].answer1;
    document.querySelector("#btn-2").textContent = questions[index].answer2;
    document.querySelector("#btn-3").textContent = questions[index].answer3;
    document.querySelector("#btn-4").textContent = questions[index].answer4;

}


// Quiz Questions
function buttonClick(event) {
    // if/else conditional
    if (event.target.textContent !== questions[index].correctanswer) {
        secondsLeft -= 10
        timerEl.textContent = secondsLeft;
    }
    index++
    if (index === questions.length) {
        showScore()
    }
    else {
        showQuestions()
    }
}

// Show the players score function
function showScore() {
    // display the score. hide the qContainer, show the score container. and stop the timer
    clearInterval(timerInterval);
    qContainer.classList.add('hideContainers')
    userScore.classList.remove('hideContainers')
}



// Save Score function
function saveScore() {
    // // Using localStorage to save player initials and highscore
    var userInput = document.querySelector('#user').value
    var userScore = {
        user: userInput,
        score: secondsLeft,
    }
    scoresArray.push(userScore)

    localStorage.setItem('high-scores', JSON.stringify(scoresArray))
    window.location.href = 'index-02.html'
}

// Button Event listeners
startGameEl.addEventListener("click", startGame);

document.querySelector("#btn-1").addEventListener("click", buttonClick);
document.querySelector("#btn-2").addEventListener("click", buttonClick);
document.querySelector("#btn-3").addEventListener("click", buttonClick);
document.querySelector("#btn-4").addEventListener("click", buttonClick);
document.querySelector(".save-btn").addEventListener('click', saveScore);
































