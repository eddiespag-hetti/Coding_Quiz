
var ulElement = document.getElementById('high-scores');

// Function to show highscores in ul
function showPlayerScore() {
    var displayHighscore = JSON.parse(localStorage.getItem('high-scores'));
    for (let index = 0; index < displayHighscore.length; index++) {
        var newElement = document.createElement('li');
        newElement.textContent = 'Name :' + displayHighscore[index].user + ' High Score :' + displayHighscore[index].score;
        ulElement.append(newElement);
    }
}

showPlayerScore();


var deleteScores = document.querySelector('.btn-clear');

// function to clear highscores 
function clearScores(event) {
    localStorage.removeItem('high-scores');
};

document.querySelector('.btn-clear').addEventListener("click", clearScores);







