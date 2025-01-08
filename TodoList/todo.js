const intputBox=document.getElementById("inputtxt");
const addtbtn=document.getElementById("btn");
const todoList=document.getElementById("todo");

let edittodo=null;


const  updateToDo=(e)=>{

    if(e.target.innerHTML=="Remove")
    {
      todoList.removeChild(e.target.parentElement);
    }
    if(e.target.innerHTML==="Edit")
    {
       intputBox.value= e.target.previousElementSibling.innerHTML;
       intputBox.focus();
       addtbtn.value="Edit";
       edittodo=e; 

    }

}

const additem=()=>{
    const inputtxt=intputBox.value;

    if(inputtxt.length<=0)
    {
        alert("Enter your To-Do-List text again");   
    }

    if(addtbtn.value==="Edit")
    {
        
        edittodo.target.previousElementSibling.innerHTML=inputtxt;
        addtbtn.value="Add";
        inputtxt.value=" ";
    }

    else{


    const li=document.createElement("li");
    const p=document.createElement("p"); 

    p.innerHTML=inputtxt;
    li.appendChild(p);

  
 
    const editbtn=document.createElement("button");
    editbtn.innerHTML="Edit";
    editbtn.classList.add("btn", "edit"); 
    li.appendChild(editbtn); 
  
   
    const deletebtn=document.createElement("button");
    deletebtn.innerHTML="Remove";
    deletebtn.classList.add("btn", "delete"); 
    li.appendChild(deletebtn);
    
    todoList.append(li);
    intputBox.value=" "; 

    saveLocalTodoes(inputtxt);
    }
    
}
addtbtn.addEventListener("click", additem);

todoList.addEventListener("click", updateToDo); 

const saveLocalTodoes=(todoes)=>{
    let todoList; 

    if(localStorage.getItem("todokey")==null)
    {
      todoList=[];
    }
    else
    {
        todoList=JSON.parse(localStorage.getItem("todokey"));
    }

    todoList.push(todoes);
    localStorage.setItem("todokey", JSON.stringify(todoList));

}

const getLocalTdoes=()=>{
    let todoList;
    if(localStorage.getItem("todoList")==null )
    {

    }
}
