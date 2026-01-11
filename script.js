let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice"); //This create a collection - NodeList of all the divs with class choice
const msg = document.querySelector("#msg");
const user = document.querySelector("#userscore");
const comp = document.querySelector("#compscore");


// console.log(choices); //Gives the collection - NodeList

const genCompChoice = () => {
    //Let's Generate Computer choice
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);//Here there is a built in class - Math and rondom() is a built in method under Math class which gives any number between 0 and 1;//Math.floor() removes the decimals.

    return options[randIdx];

}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was draw. Play Again.";
    msg.style.backgroundColor = "#081b31";
}


const showWinner = (userWin,userChoice,compChoice) => {
    //This will help me print winner on screen 

    if(userWin){
        userscore++;
        user.innerText = userscore;
        // console.log("You Win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "#275136"
    }else{
        compscore++;
        comp.innerText = compscore;
        // console.log("You Lose");
        msg.innerText = `You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "#E43232"
    }
}

const playGame = (userChoice) => { //here userChoice is known to the playGame function
    // console.log(`User choice is ${userChoice}`);
    const compChoice = genCompChoice();
    // console.log(`Computer choice is ${compChoice}`);

    if (userChoice === compChoice) {
        //Draw Game
        drawGame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper

            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            //rock,scissor
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => { //iterating over the NodeList
    // console.log(choice); //Printing each element under the Nodelist
    ////Here while going in forEach Method, have added EventListener taking action and function as arguments.
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); //iterating over each choice(div) have used getAttribute() method which will return value of the id.
        // console.log("Choice was Clicked",userChoice);
        playGame(userChoice);
    });
}) 