const container=document.querySelector('.container'); 
const questionDetails=document.querySelector('.questions'); 
const choiceBox=document.querySelector('.choices');
const btnNext=document.querySelector('.btn');

let quiz=[

    {
        question: "Q. Whic of following is not CSS box model property",
        choices: ["margin", "padding", "border-raidus", "border-cross"], 
        answer:"border-cross"

    },
    {
        question: "Q. What is correct abberviation  forDOM",
        choices: ["margin", "padding", "border-raidus", "border-cross"], 
        answer:"Document Object Model"
    },
    {
        question: "Q.whic of following is valid of function decleration",
        choices: ["function() {}", "padding", "border-raidus", "border-cross"], 
        answer:"border-cross"
    },
    {
        question: "What is purpose of this keyword in javascript",
        choices: ["Q.margin", "padding", "border-raidus", "border-cross"], 
        answer:"border-cross"
    }
   

];

let currentquestnIndex=0;
const showQuestions=()=>{

    questionDetails.innerHTML=quiz[currentquestnIndex].question;


    for(let i=0; i<quiz[currentquestnIndex].choices.length; i++)
    {

        const currentChoice=quiz[currentquestnIndex].choices[i];
        const choicediv=document.createElement("div");
        choicediv.innerHTML=currentChoice;
        choicediv.classList.add("choice");
        choiceBox.appendChild(choicediv);


    }
    //choiceBox.innerHTML=quiz[currentquestnIndex].choices

}
btnNext.addEventListener('click', ()=>{

    showQuestions();
    
})