import readlineSync from 'readline-sync';
import chalk from 'chalk';
import chalkRainbow from 'chalk-rainbow';
var score = 0;

function welcome() {
  var userName = readlineSync.question("What is your name? ");
  console.log(chalkRainbow("Welcome " + userName + ", Let's play a musical quiz! "));
}


var highScores = [
  {
    name: chalk.hex('#FFA500').bold("Vaishnavi"),
    score: 12
  },
  {
    name: chalk.hex('#FFA500').bold("Yash"),
    score: 10
  }
]


function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("you are right!"));
    score++;
  }
  else {
    console.log(chalk.red("sorry, you are wrong! "));
  }
  console.log(chalk.yellow("your current score is: ", score));
  console.log("~~~~~~~~~~~~~~");
}


//music quiz
var questions = [
  {
    question: chalk.black("Is 'Aashayein' song sung by KK? "),
    answer: "yes"
  },
  {
    question: chalk.magenta("Is 'Kesariya' song sung by Arijit Singh? "),
    answer: "yes"
  },
  {
    question: chalk.cyan("Is 'I Guess' rap sung by KR$NA? "),
    answer: "yes"
  },
  {
    question: chalk.rgb(15, 180, 20)("Is 'Rap God' rap sung by Eminem? "),
    answer: "yes"
  },
  {
    question: chalk.blue("Is 'Drag Me Down' song sung by One Direction? "),
    answer: "yes"
  },
  {
    question: chalk.rgb(255, 136, 0)("Is 'Madhubala' song sung by Amit Trivedi? "),
    answer: "yes"
  },
  {
    question: chalk.rgb(255, 0, 255)("Is 'Ranchana' song sung by Pandavaas? "),
    answer: "yes"
  },
  {
    question: chalk.rgb(0, 55, 245)("Is 'Teri Mitti' song sung by B Praak? "),
    answer: "yes"
  },
  {
    question: chalk.rgb(111, 111, 111)("Is 'O Sanam' song sung by Lucky Ali? "),
    answer: "yes"
  },
  {
    question: chalk.rgb(255, 255, 255)("Is 'Shiv Sama Rahe' song sung by Hansraj Raghuvanshi? "),
    answer: "yes"
  },
  {
    question: chalk.rgb(11, 11, 11)("Is 'Dooba Dooba' song sung by Silk Route? "),
    answer: "yes"
  },
  {
    question: chalk.rgb(0, 110, 0)("Is 'Attention' song sung by Charlie Puth? "),
    answer: "yes"
  },
];

function game() {
  for (var i = 0; i < questions.length; i++) {
    var nextQuestion = questions[i];
    play(nextQuestion.question, nextQuestion.answer)
  }
}

function scores() {
  console.log(chalk.bgHex('#FFA500').inverse.bold("Congrats! Your total score is :", score));
  console.log(chalk.underline("Here are the high scores ==>"));
  highScores.map(score => console.log(score.name, ":", score.score))
  console.log(chalk.bgAnsi256(120)("If your score is more than highscore, send me the screenshot. I'll update the highscore."));
  console.log(chalkRainbow('Have a musical day :)'));
}

welcome();
game();
scores();