let userScore=0; 
let compScore=0; 

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");


const genCompChoice=()=>
{
  const option=["rock", "paper", "scissors"]; 
  const randIdx=Math.floor(Math.random()*3);

  return option[randIdx];


}
function drawGame()
{
  console.log("Game is drawn");
  msg.innerText="You draw"
  msg.style.backgroundColor="blue";
}

const showWinner=(userWin, userchoice, compChoice)=>
{
  if(userWin)
  {
    userScore++;
    userScorePara.innerText=userScore;
    console.log("You won");
    msg.innerText=`You win ${userchoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
  }
  else 
  {
    compScore++;
    compScorePara.innerText=compScore;
    console.log("You lost");
    msg.innerText=`You lost! ${compChoice} beats your ${userchoice}`; 
    msg.style.backgroundColor="red";


  }
  
  
}

const playGame=(userchoice)=>
{
   console.log("User Choice is=", userchoice);
   const compChoice=genCompChoice();
   console.log("Computer choice =:", compChoice);
   if(userchoice==compChoice)
   {
    drawGame();
   }
   else
   {
    let userWin=true; 
    if(userchoice=="rock")
    {
      userWin= compChoice==="paper" ? false:true;
    }
    else if(userchoice="paper")
    {
      userWin=compChoice==="scissors"? false:true;
    }
    else 
    {
      userWin= compChoice=="rock" ? false:true; 
    }

    showWinner(userWin, userchoice, compChoice);
    
   }


};
choices.forEach((choice)=>
{
   
  choice.addEventListener("click", ()=>{

    const userchoice=choice.getAttribute("id");
    playGame(userchoice);
  })
});