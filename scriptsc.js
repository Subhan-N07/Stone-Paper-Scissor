let userscore = 0;
let compscore = 0;
let uscr = document.getElementById("user-score");
let cscr = document.getElementById("comp-score");
let choice = document.querySelectorAll(".choice");
let m = document.getElementById("msg");

const getcompschoice = () => { //Computer's random choice is generated.
    const options = ["rock", "paper", "scissor"]
    let rand = Math.floor(Math.random() * 3)
    return options[rand]
}

choice.forEach((ch) => { //User's choice is stored.
    ch.addEventListener("click", () => {
        const userchoice = ch.getAttribute("id");
        playgame(userchoice)
    })
})

const draw = () => { // If both have same condition.
    m.innerHTML = "It's a draw , Try again...";
    console.log("It's a draw")
    m.style.backgroundColor = "yellow";
}

const playgame = (userchoice) => {
    console.log("User choice = ", userchoice);
    //Generate computer choice
    const compchoice = getcompschoice()
    console.log("Comp choice = ", compchoice);

    let uwin = "true" //tracking the progress , here we assume that user is winning.

    if (userchoice === compchoice) {//Draw Game
        return draw()
    } else if (userchoice === "rock") {
        //scissor paper
        uwin = (compchoice === "paper") ? false : true;
    }
    else if (userchoice === "paper") {
        //scissor rock
        uwin = (compchoice === "scissor") ? false : true;
    } else {
        if (userchoice === "scissor") {
            //rock paper
            uwin = (compchoice === "rock") ? false : true;
        }
    }
    winner(uwin);
}

const winner = (uwin) => {
    if (uwin) {
        userscore += 1;
        uscr.innerText = userscore;
        uscr.style.color = "green"
        m.innerText = "You Win! :-)";
        m.style.backgroundColor = "green";
        console.log("You Win! :-) ");
    }
    else {
        compscore += 1;
        cscr.innerText = compscore;
        cscr.style.color = "green"
        m.innerHTML = "You loose :-(";
        m.style.backgroundColor = "red";
        console.log("You loose :-( ")
    }
}