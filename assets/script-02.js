
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



var deleteScoresEl = document.querySelector('.btn-clear');
// Function to clear highscores 
function clearScores() {
    console.log('clicked')
    
window.localStorage.clear()

    
};


deleteScoresEl.addEventListener("click", clearScores);


