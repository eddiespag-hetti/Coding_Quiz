var index = -1

// Countdown timer 
var timerEl = document.getElementById('timer');
var secondsLeft = 45;

function setTime() {
    var timeLeft = 45;

    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);

            sendMessage();
        }

    }, 1000);
};


function sendMessage() {
    timerEl.textContent = "Times Up!";
}






// Starting the game function 

var startGameEl = document.querySelector(".btn-start");

function startGame(event) {
    showQuestions()
    setTime()
    document.querySelector(".questions-para").style = "display: none";
    document.querySelector(".btn-start").style = "display: none";
    document.querySelector(".rules-para").style = "display: none";
    document.querySelector(".quiz-questions").style = "display: block";

    document.querySelector("#btn-1").addEventListener("click", showQuestions);
    document.querySelector("#btn-2").addEventListener("click", showQuestions)
    document.querySelector("#btn-3").addEventListener("click", showQuestions)
    document.querySelector("#btn-4").addEventListener("click", showQuestions)
}
startGameEl.addEventListener('click', startGame);


// Quiz Questions
function showQuestions(event) {
    if(index!=-1){
        console.log(event.target.innerHTML)
        if(event.target.innerHTML != questions[index].correctanswer){
            secondsLeft-=10
        }
    }
    
    index++
    if(index==questions.length){
        console.log("test")
        document.querySelector(".quiz-questions").style = "display: none";
        document.querySelector(".initials-score").style = "display: block";
        return
    }
    document.querySelector(".question").textContent = questions[index].question;
    document.querySelector("#btn-1").textContent = questions[index].answer1;
    document.querySelector("#btn-2").textContent = questions[index].answer2;
    document.querySelector("#btn-3").textContent = questions[index].answer3;
    document.querySelector("#btn-4").textContent = questions[index].answer4;

}


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
        answer1: "Cascading Style Sheets",
        answer2: "Cats Chase Sheep",
        answer3: "Cool Cats Slide",
        answer4: "Code Cheat Sheet",
        correctanswer: "Cascading Style Sheets",
    }, {
        question: "What does HTML stand for?",
        answer1: "HyperText Markup Language",
        answer2: "Hide My Lunch",
        answer3: "HyperText Markdown Language",
        answer4: "Hitmonlee",
        correctanswer: "HyperText Markup Language",
    }
]







