const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
console.log(mostRecentScore);

finalScore.innerText = mostRecentScore;