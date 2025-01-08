let boxes=document.querySelectorAll(".box");
let restBtn=document.querySelector("#reset_btn");
let turnO=true; 
const winPattern=[[0,1,2],[0,3,6], [0, 4, 8], [1,4,7], [2, 5, 8], [2,4,6], [3,4,5],[6,7,8]];

const restGame=()=>
{
    turnO=true;
    for(let box of boxes)
    {
        box.disabled=false;
    } 
}

const multArray=[[0,2, 4], [4, 5, 8], [9, 8, 7], [14, 16, 18]];

for(dimarray of multArray)
{
    console.log(dimarray[0], dimarray[1], dimarray[2]); 
}


boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        

        if(turnO)
        {
            box.innerText="O";
            turnO=false;
        } else
        {
            box.innerText="X";
            turnO=true;

        }
        box.disabled=true;

        checkWinner();
    });
});

const checkWinner=()=>
{

  for(let pattern of winPattern)
  {
     let posVal1=boxes[pattern[0]].innerText;
     let posVal2=boxes[pattern[1]].innerText; 
     let posVal3=boxes[pattern[2]].innerText; 

     if(posVal1!="" && posVal2!="" && posVal3!="")
     {
        if (posVal1===posVal2 && posVal2===posVal3 && posVal3===posVal1 )
        {
            console.log("Winner"); 
        }
     }
  }
}