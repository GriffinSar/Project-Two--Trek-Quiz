const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const fName = document.querySelector(".fname");
const lName = document.querySelector(".lname");
const rSpecies = document.querySelector(".species");
const nameBTN = document.querySelector(".name-button");

finalScore.innerText = mostRecentScore;

const firstName = [
    "Spock", "Nyota", "Jean-Luc", "Data", "Troy", "Odo", "Quark", "Jadzia", "B'Elanna" , "Chakotay"]

const lastName = [
    "Kirk", "Janeway", "Picard", "Dax", "Torres", "Sisko", "O'Brien", "Nerys", "Troi", "Pike"
]

const speciesList = ["Human", "Klingon", "Ferengi", "Trill", "Vulcan", "Andorian", "Bajoran", "Romulan", "Borg", "Q"]

nameBTN.addEventListener('click', function() {
    fName.innerHTML =
    firstName[Math.floor(Math.random() * firstName.length)];

    lName.innerHTML = 
    lastName[Math.floor(Math.random() * lastName.length)];

    rSpecies.innerHTML = 
    speciesList[Math.floor(Math.random() * lastName.length)];
});

let imageWin = document.querySelector(".win-image");
let scoreNum =  parseInt(mostRecentScore);
let winMsg = document.querySelector('.win-text');

/* Sets text and image*/
if (scoreNum < 50) {
    imageWin.src="assets/images/picard-dissapointed.webp";
    winMsg.innerText = "Not good";
  } else if (scoreNum < 110) {
      imageWin.src="assets/images/riker2.webp";
      winMsg.innerText = "Good";
  } else {
      imageWin.src="assets/images/barclay.webp";
      winMsg.innerText = "Brilliant";
  }