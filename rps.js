/* TODO 
Make a function playRound(you,pc) that receives your choice between R.P.S and pits it against a random computer input
The function returns who won and appends score to corresponding score,div class left= you right = pc.
Bind choices to numbers
1=rock
2=paper
3=scissor

() => player,computer 
        conditionals
            return winner + 1 on tally;



*/


let playerBoard = document.querySelector('div.left-aside');
let compuBoard = document.querySelector('div.right-aside');
let rockBtn = document.querySelector(`button[data-hand ="rock"]`);
let paperBtn = document.querySelector(`button[data-hand ="paper"]`);
let scissorBtn = document.querySelector(`button[data-hand ="scissor"]`);
let playerScore = playerBoard.querySelector('div');
let compuScore = compuBoard.querySelector('div');


playerBoard.style.textAlign = 'center';
compuBoard.style.textAlign = 'center';
playerBoard.style.fontSize = '1rem';
compuBoard.style.fontSize ='1rem';

const score = {player:0,computer:0};




function computerPlay() {
    comChoice = Math.floor((Math.random() * 3) + 1);
    switch (comChoice) {
      case 1:
        return 'rock'
        break;
      case 2:
        return 'paper'
        break;
      case 3:
        return 'scissor'
        break;
  
      default:
        break;
    }
  }


rockBtn.addEventListener('click',playGame);
paperBtn.addEventListener('click',playGame);
scissorBtn.addEventListener('click',playGame);

function playGame(){
    let choiceHm = this.getAttribute('data-hand');
    let choicePc = computerPlay();
    let goal = 5;

    if(score.player < goal || score.computer < goal ){
    switch(true){
      case ((choiceHm == 'rock' && choicePc == 'scissor') || (choiceHm == 'paper' && choicePc == 'rock') || (choiceHm == 'scissor' && choicePc == 'paper')):
        score.player +=1; 
        playerScore.textContent = score.player;
        break;
      case ((choicePc == 'rock' && choiceHm == 'scissor') || (choicePc == 'paper' && choiceHm == 'rock') || (choicePc == 'scissor' && choiceHm == 'paper')):
        score.computer += 1 ;
        compuScore.textContent = score.computer;
        break;
      default:
        alert('Draw');
        break;
    }
  }
     if (score.player === goal){
        score.player = 0;
        score.computer = 0;
        playerScore.textContent = score.player;
        compuScore.textContent = score.computer;
        return alert(`Winner is Player`);      
    }

    else if (score.computer === goal){
        score.player = 0;
        score.computer = 0;
        playerScore.textContent = score.player;
        compuScore.textContent = score.computer;
        return alert(`Winner is Computer`);
    }
}