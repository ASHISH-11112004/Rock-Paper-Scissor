let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorepara = document.querySelector("#user-score");
const computerScorepara = document.querySelector("#computer-score");

const showWinner = (userWins, userChoice, compChoice) => {
  if (userWins) {
    userscore++;
    userScorepara.innerText = userscore;
    msg.innerText = `You win! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerscore++;
    computerScorepara.innerText = computerscore;
    msg.innerText = `Computer wins! ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const gencompchoices = () => {
  const options = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return options[randomNumber];
};

const drawGame = () => {
  msg.innerText = "It's a draw!, play again!";
  msg.style.backgroundColor = "#081b31";
};

const userWins = () => {
  console.log("You win!");
};

const playGame = (userChoice) => {
  const compChoice = gencompchoices();

  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWins = true;
    if (userChoice === "rock") {
      userWins = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWins = compChoice === "scissors" ? false : true;
    } else if (userChoice === "scissors") {
      userWins = compChoice === "rock" ? false : true;
    }
    showWinner(userWins, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
