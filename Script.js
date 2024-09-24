let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");


    choices.forEach((choice)=>{
    choice.addEventListener('click',()=>{
    let userchoice = choice.getAttribute("id");
    playgames(userchoice);
   })
})

const gencompchoice =  ()=>{
    const option = ["rock","paper","scissor"];
    const ind = Math.floor(Math.random() * 3);
     return option[ind];
}
const playgames =(userchoice)=>{
    const compchoice = gencompchoice();

    document.getElementById("select").innerHTML = "<h2>Computer choose "+ compchoice + "</h2>";
    const newTag = document.createElement('h2');
    newTag.innerText = "Your choose "+ userchoice;
    document.getElementById('select').appendChild(newTag);
    

        if(userchoice=="rock" && compchoice=="paper"){
            compscore++;         
        }else if(userchoice=="rock" && compchoice=="scissor"){
            userscore++;
        }else if(userchoice=="paper" && compchoice=="rock"){
            userscore++;
        }else if(userchoice=="paper" && compchoice=="scissor"){
            compscore++;
        }else if(userchoice=="scissor" && compchoice=="rock"){
            compscore++;
        }else if(userchoice=="scissor" && compchoice=="paper"){
            userscore++;
        }
        else if(userchoice === compchoice){
            alert("Match is draw...");
        }
        
    document.getElementById("user-score").innerText = userscore;
    document.getElementById("comp-score").innerText = compscore;
}