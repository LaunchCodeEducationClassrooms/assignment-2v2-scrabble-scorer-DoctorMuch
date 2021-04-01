// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(entry) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
	  }
	}
	return letterPoints;

 };

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  word = input.question("Let's play some scrabble!\n\nEnter a word to score: ");
   
   /*console.log('\n' + scrabbleScore.scoring);
   console.log('\n' + 'Simple Score: ' + simpleScore.scoring());
   console.log('\n' + 'Vowel Bonus Score: ' + vowelBonusScore.scoring());*/
  
};

let simpleScore = {
  name: "Simple Scorer",
  description: "Each letter is worth 1 point.",
  scoring: function (entry) {
    word = word.toUpperCase();
    let pointTotal = 0;
      for (i = 0; i < word.length; i++) {
      pointTotal++;
      }
      return pointTotal;
  }
};

const vowelBonusStructure = {
  1: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],
  3: ['A', 'E', 'I', 'O', 'U']
};

let vowelBonusScore = { 
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scoring: function (entry) {
    word = word.toUpperCase();
      let vowelBonusScore = 0;
      for (let i=0; i < word.length; i++) {
        for (const pointValue in vowelBonusStructure){
        if (vowelBonusStructure[pointValue].includes (word[i])) {
          vowelBonusScore += Number(pointValue);
          }
        } 
      } return vowelBonusScore;  
    }
};


let scrabbleScore = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoring: function(entry){
    word = word.toLowerCase();
    let scrabblePoints = 0;
    for (let i=0;i<word.length;i++){
      scrabblePoints += newPointStructure[word[i]];
    }return scrabblePoints;
  }
};

const scoringAlgorithms = [simpleScore, vowelBonusScore, scrabbleScore];

function scorerPrompt() {
  let scorerChoice = input.question(`Which scorer would you like to use?
  
0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
Enter 0, 1, or 2: `);
  scorerChoice = Number(scorerChoice);

  while (scorerChoice <0 || scorerChoice >2){
    scorerChoice = input.question("Invalid entry. Please enter 0, 1, or 2. ");
    scorerChoice = Number(scorerChoice);
  }
    if (scorerChoice === 0){
      console.log(`Your score for ${word} is ${scoringAlgorithms[0].scoring()} points.`);
    }
    else if (scorerChoice === 1){
      console.log(`Your score for ${word} is ${scoringAlgorithms[1].scoring()} points.`);
    }
    else{
      console.log(`Your score for ${word} is ${scoringAlgorithms[2].scoring()} points.`);
    }
}

function transform(object) {
    let PointsObject = {};
    for (item in object){
      for(i=0;i<object[item].length;i++){
        let key = object[item][i].toLowerCase();
        PointsObject[`${key}`]= Number(item);
      }
    }
    return PointsObject;
};

let newPointStructure = transform(oldPointStructure);

function runProgram() {
   initialPrompt();
    scorerPrompt();
    //console.log(newPointStructure);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};

