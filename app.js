let userScore=0;
let compScore =0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("bot-score");

const scoreboard_div = document.querySelector(".scoreboard");

const result_p = document.querySelector(".result>p");

const round_p = document.querySelector(".round>p");
const faceoff_p = document.querySelector(".faceoff>p");
const about_p = document.querySelector(".about>p");

var img1 = document.createElement("img");
var img2 = document.createElement("img");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("l");
const spock_div = document.getElementById("k");

let about = false;

var win_audio = new Audio('Audios/win.mp3');
var lose_audio = new Audio('Audios/lose.mp3');
var draw_audio = new Audio('Audios/draw.mp3');
var button_audio = new Audio('Audios/button.mp3');

function aboutGame(){
    button_audio.play();
    button_audio.volume=0.1;
    if(about==false){
        about_p.innerHTML= "Rock, Paper, Scissors, Lizard, Spock is a game of chance that expands. It is first used to settle a dispute about what to watch on TV between Sheldon and Raj in 'The Lizard-Spock Expansion' in the TV Show 'The Big Bang Theory'.<br/>The game was originally created by Sam Kass with Karen Bryla. According to an interview with Kass, the series producers did not originally ask for permission to use the game, but Kass was officially referenced by Sheldon as the creator of the game during the 'The Rothman Disintegration', after which he states,'Hail Sam Kass!' to which Leonard, Howard, Raj, and Sheldon all then chant 'Hail!' while raising their hands.<br/>The game is an expansion on the game Rock, Paper, Scissors. Each player picks a variable and reveals it at the same time. The winner is the one who defeats the others.<br/>In a tie, the process is repeated until a winner is found.<br/>Scissors cuts Paper <br/>Paper covers Rock <br/>Rock crushes Lizard<br/>Lizard poisons Spock <br/>Spock smashes Scissors <br/>Scissors decapitates Lizard <br/>Lizard eats Paper<br/>Paper disproves Spock<br/>Spock vaporizes Rock <br/>(and as it always has) Rock crushes Scissors ";
        about = true;
    }
   else{
    about_p.innerHTML="";
    about=false;
   }
    
}

function icon1Round(userChoice){
    
    if(userChoice ==="r"){ img1.src="Images/ROCK.png"};
    if(userChoice ==="p"){ img1.src="Images/Paper.png"};
    if(userChoice ==="s"){ img1.src="Images/Scissors.png"};
    if(userChoice ==="l"){ img1.src="Images/Lizard.png"};
    if(userChoice ==="k"){ img1.src="Images/Spock.png"};
}
function icon2Round(userChoice){
    
    if(userChoice ==="r"){ img2.src="Images/ROCK.png"};
    if(userChoice ==="p"){ img2.src="Images/Paper.png"};
    if(userChoice ==="s"){ img2.src="Images/Scissors.png"};
    if(userChoice ==="l"){ img2.src="Images/Lizard.png"};
    if(userChoice ==="k"){ img2.src="Images/Spock.png"};
}
function toName(userChoice){

    if(userChoice ==="r"){ return "Rock"};
    if(userChoice ==="p"){ return "Paper"};
    if(userChoice ==="s"){ return "Scissors"};
    if(userChoice ==="l"){ return "Lizard"};
    if(userChoice ==="k"){ return "Spock"};
}
function caseRound(userChoice,compChoice){

    faceoff_p.innerHTML="";
    icon1Round(userChoice);
    icon2Round(compChoice);

    faceoff_p.append(img1);
    faceoff_p.append("           Versus           ");
    faceoff_p.append(img2);

}

function caseResult(userChoice,compChoice){
    switch (userChoice +compChoice){
        case "rs":
            return "Rock crushes Scissors."
            break;
        case "rl":
            return "Rock crushes Lizard."
            break;
        case "pr":
            return "Paper covers Rock."
            break;
        case "pk":
            return "Paper disproves Spock."
            break;
        case "sp":
            return "Scissors cuts Paper."
            break;
        case "sl":
            return "Scissors decapitates Lizard."
            break;
        case "lk":
            return "Lizard poisons Spock."
            break;
        case "lp":
            return "Lizard eats Paper."
            break;
        case "kr":
            return "Spock vaporizes Rock."
            break;
        case "ks":
            return "Spock smashes Scissors."
            break;
        
    }
}

function getCompChoice(){

    const choices = ['r','p','s','l','k'];
    const randomNum=Math.floor(Math.random() * 5); 
    return  choices[randomNum];
}

function reset(){
    button_audio.play();
    button_audio.volume=0.1;
    userScore=0;
    compScore=0;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML= "Begin The Match!";
    about_p.innerHTML="";
    round_p.innerHTML="";
    faceoff_p.innerHTML="";
}

function win(userChoice,compChoice){
    win_audio.play();
    win_audio.volume=0.5;
    userScore++;
    userScore_span.innerHTML=userScore;
    result_p.innerHTML= `${caseResult(userChoice,compChoice)} You Win !`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() =>document.getElementById(userChoice).classList.remove('green-glow'),300);
}

function lose(userChoice,compChoice){
    lose_audio.play();
    lose_audio.volume=1;
    compScore++;
    compScore_span.innerHTML=compScore;
    result_p.innerHTML= `${caseResult(compChoice,userChoice)} You Lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(()=>document.getElementById(userChoice).classList.remove('red-glow'),300);
}

function draw(userChoice,compChoice){
    draw_audio.play();
    draw_audio.volume=0.3;
    result_p.innerHTML= "Its a Draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(()=>document.getElementById(userChoice).classList.remove('grey-glow'),300);

}

function game(userChoice){

    const compChoice = getCompChoice();
    console.log(userChoice);
    console.log(compChoice);
    caseRound(userChoice,compChoice);
    switch (userChoice +compChoice) {

        case "rs":
        case "rl":
        case "pr":
        case "pk":
        case "sp":
        case "sl":
        case "lk":
        case "lp":
        case "kr":
        case "ks":
            win(userChoice,compChoice);
            break;
        
        case "rp":
        case "rk":
        case "ps":
        case "pl":
        case "sk":
        case "sr":
        case "lr":
        case "ls":
        case "kp":
        case "kl":
            lose(userChoice,compChoice);
            break;
        
        case "rr":
        case "pp":
        case "ss":
        case "ll":
        case "kk":
            draw(userChoice,compChoice);
            break;


    }

}

function main(){

    rock_div.addEventListener('click',() =>game("r"));
    
    paper_div.addEventListener('click',() =>game("p"));

    scissors_div.addEventListener('click',()=>game("s"));

    lizard_div.addEventListener('click',()=>game("l"));

    spock_div.addEventListener('click',()=>game("k"));

}

main();
