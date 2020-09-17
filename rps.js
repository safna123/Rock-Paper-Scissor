
function ComputerPlay(){
    let gameArray = ["ROCK","PAPER","SCISSOR"];
     let Index = Math.floor(Math.random() * 3);
       return gameArray[Index];
}
function InputPlay(){
    let Player = prompt("Rock, paper or Scissor");
     let Selection = Player.toUpperCase();
       return Selection;
}
const choice1 = 0;
 const choice2 = 0;
     function game(choice1,choice2){
 for (i=0; i<5; i++){
    const PlayerSelection = InputPlay();
         const ComputerSelection = ComputerPlay();
function playRound(PlayerSelection,ComputerSelection){
     if(PlayerSelection === ComputerSelection){
         console.log(`It's a Tie 
             Player Score = ${choice1} 
                 Computer Score = ${choice2}`);
     } else if(( PlayerSelection ==="ROCK" && ComputerSelection === "SCISSOR") || (PlayerSelection === "PAPER" && ComputerSelection === "ROCK") || (PlayerSelection === "SCISSOR" && ComputerSelection === "PAPER")){
        choice1++;
         console.log(`You win ${PlayerSelection} Beats ${ComputerSelection} 
             Player Score = ${choice1} 
                 Computer Score = ${choice2}`);
         
     } else if((PlayerSelection === "ROCK" && ComputerSelection === "PAPER") || (PlayerSelection === "PAPER" && ComputerSelection === "SCISSOR") || (PlayerSelection === "SCISSOR" && ComputerSelection === "ROCK")){
        choice2++;
         console.log(`You lost ${ComputerSelection} Beats ${PlayerSelection} 
             Player Score = ${choice1} 
                 Computer Score = ${choice2}` );
        
     }else {
         console.log(`Check your input 
            Player Score = ${choice1} 
                 Computer Score = ${choice2}`);
     }
}
console.log(playRound(PlayerSelection,ComputerSelection));
}
if(choice1 < choice2){
        console.log(`Lost 
            Total Score: Player : ${choice1}  
                 Computer : ${choice2}`);
    }else if(choice1 > choice2){
        console.log(`Win 
              Total Score: Player : ${choice1} 
                  Computer : ${choice2}`);
    } else {
        console.log(`Tie
             Total Score: Player : ${choice1} 
                 Computer : ${choice2}`);
    }
}
(game(choice1,choice2));