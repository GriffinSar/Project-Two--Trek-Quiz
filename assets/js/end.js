const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const fName = document.querySelector(".fname");
const lName = document.querySelector(".lname");
const nameBTN = document.querySelector(".name-button");

finalScore.innerText = mostRecentScore;

const firstName = [
    "Sarah", "Oisin", "Saoirse", "Eanna", "Frodo"]

const lastName = [
    "Walsh", "Griffin", "Leahy", "Phelan", "Smith"
]

nameBTN.addEventListener('click', function() {
    fName.innerHTML =
    firstName[Math.floor(Math.random() * firstName.length)];

    lName.innerHTML = 
    lastName[Math.floor(Math.random() * lastName.length)];
});

let imageWin = document.querySelector(".win-image");
let scoreNum =  parseInt(mostRecentScore);
let winMsg = document.querySelector('.win-text');