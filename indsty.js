let userScore = 0;
let computerScore = 0;
let choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg-start");

const usrScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");
//computer start
//generate  random number between 1 and 3

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

//draw game function
const drawgame = () => {

    msg.innerText = `game is draw play again`;
    msg.style.backgroundColor = "voilet";
};


//winner function
const showWinner = (usrWin, usrChoice, compChoice) => {
    if (usrWin) {
        userScore++;
        usrScorePara.innerText = userScore;

        msg.innerText = ` hurray ! You win `;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        compScorePara.innerText = computerScore;

        msg.innerText = `ohhhhh! you loose better luck next time `;
        msg.style.backgroundColor = "red";
    }
};

//play game function 
const playgame = (usrChoice) => {


    const compChoice = genCompChoice();

    //generate comp choiced
    if (usrChoice === compChoice) {
        drawgame();
        //draw
    } else {
        let usrWin = true;
        if (usrChoice === "rock") {

            usrWin = compChoice === "paper" ? false : true;
        } else if (usrChoice === "paper") {
            usrWin = compChoice === "scissors" ? false : true;
        } else {
            usrWin = compChoice === "rock" ? false : true;
        }
        showWinner(usrWin);
    }

};


//end 
choice.forEach((choice) => {
    choice.addEventListener("click", () => {
        const usrChoice = choice.getAttribute("id");

        playgame(usrChoice);

    });
});