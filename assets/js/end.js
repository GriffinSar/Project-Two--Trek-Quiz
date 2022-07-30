const finalScore = document.getElementById('final-score');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const fName = document.querySelector(".fname");
const lName = document.querySelector(".lname");
const rSpecies = document.querySelector(".species");
const nameBTN = document.querySelector(".name-button");

/*Sets the users score on the end page*/
finalScore.innerText = mostRecentScore;

/*array of names and species for name generator*/
const firstName = [
    "Spock", "Nyota", "Jean-Luc", "Data", "Troy", "Odo", "Quark", "Jadzia", "B'Elanna" , "Chakotay" , "Saru" , "Michael" , "Brad" , "Shaxs"]

const lastName = [
    "Kirk", "Janeway", "Picard", "Dax", "Torres", "Sisko", "O'Brien", "Nerys", "Troi", "Pike" , "Lorca" , "Pike" ,  "Tendi" , "Boimler" , "Mariner"
]

const speciesList = ["Human", "Klingon", "Ferengi", "Trill", "Vulcan", "Andorian", "Bajoran", "Romulan", "Borg", "Q", "Kelpien", "Orion", "Bolian", "Breen", "Betazoid"]

/*function to pull in name and species to name generator on end page*/
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
    winMsg.innerText = "'There is a way out of every box, a solution to every puzzle; it’s just a matter of finding it.' - Captain Jean-Luc Picard. Take the wise words of Picard and find your way out of this score, go back watch more Trek and you will surely prevail on your next try.";
  } else if (scoreNum < 110) {
      imageWin.src="assets/images/riker2.webp";
      winMsg.innerText = "'Logic is the beginning of wisdom, not the end.'–Spock. Great score but there is room for improvement, go watch some more trek and give this quiz another go you are sure to succeed next time.";
  } else {
      imageWin.src="assets/images/barclay.webp";
      winMsg.innerText = "If winning is not important, why keep score? - Worf. Amazing you are clearly a true Trekkie, go celebrate your great win by watching another episode of Star Trek";
  }