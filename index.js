const readlineSync = require('readline-sync');
const chalk = require('chalk');
var score = 0;

var nameofPlayer = readlineSync.question("Please enter your name: ");
console.log("Welcome " + chalk.bgYellow(nameofPlayer) + "!");
console.log("Lets begin the game!")


function quiz(ques, ans){
  var answer = readlineSync.question(chalk.yellow(ques));

  if (answer.toLowerCase() == ans.toLowerCase()){
    console.log(chalk.bgGreen("Correct Choice!"))
    score += 1;
  }
  else{
    console.log(chalk.bgRed("Wrong Choice!"))
  }
  console.log("-------------------------------")
}

var high_score_data = [
  {name: "Hrishi", score: 5}, {name: "Su", score: 4}
]

var questionsArr = [
  {
    question: `
    The swoosh is associated with which of the brand? 
    a) Nike
    b) Adidas
    c) Reebok
    d) Puma\n`,

    answer: "a"
  },
  {
    question: `
    The recent Travis scott AJ1 collab is with which brand? 
    a) Nike
    b) Adidas
    c) Reebok
    d) Puma\n`,

    answer: "a"
  },
  {
    question: `
    James Harden endorses which brand? 
    a) Nike
    b) Adidas
    c) Reebok
    d) Puma\n`,

    answer: "b"
  },
  {
    question: `
    Kyrie Irving endorses which brand? 
    a) Nike
    b) Adidas
    c) Reebok
    d) Puma\n`,

    answer: "a"
  },
  {
    question: `
    What does DSWT mean in the resell community? 
    a) Dead stock with tags
    b) Double stock with target
    c) Dead stock with target
    d) Double stock with tags\n`,

    answer: "a"
  },
  ]

for (i=0; i< questionsArr.length; i++ ){
  var qu = questionsArr[i]
  quiz(qu.question, qu.answer)
}


console.log(chalk.bgCyan("\nYour score:") + " " + score)
console.log("\nCheck the high scores and contact me if you scored greater than them!")
console.log("\nHigh Scores by others:\n")
for (i=0; i < high_score_data.length; i++){
  var n = high_score_data[i]
  console.log( chalk.yellow(n.name) + ": " + n.score)
}