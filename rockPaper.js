let usernumber=0;
let cmpnumber=0;


function scoreboard(scoreupdate,userscore,cmpscore){
    if(scoreupdate===1){
        usernumber++;
        userscore.innerText=usernumber;
    }else if(scoreupdate===0){
        cmpnumber++;
        cmpscore.innerText=cmpnumber;
    }
}




function choiceCompare(userchoice,cmpchoice,msg){
        if(userchoice==cmpchoice){
            console.log("match draw");
            msg.innerText="match draw";
            return 2;
        }else if(userchoice!=cmpchoice){
            if((userchoice=="rock"&&cmpchoice=="scissor")||(userchoice=="scissor"&&cmpchoice=="paper")||(userchoice=="paper"&&cmpchoice=="rock")){
                console.log("user win");
                msg.innerText=`your ${userchoice} defeated ${cmpchoice}`;
                return 1;

            }else if((cmpchoice=="rock"&&userchoice=="scissor")||(cmpchoice=="scissor"&&userchoice=="paper")||(cmpchoice=="paper"&&userchoice=="rock")){
                console.log("cmp win");
                msg.innerText=`computer ${cmpchoice} defeated ${userchoice}`;
                return 0;

            }
        }

}

function cmpplay(cmpchoice){
    console.log("computer choice ",cmpchoice);
}

 function playgame(userchoice){
    console.log("user choose ",userchoice);
}
let choices = document.querySelectorAll(".choice");
let msg=document.querySelector("#msgbox p");
let userscore=document.querySelector("#myscore-1");
let cmpscore=document.querySelector("#compscore-1");

// let msg=msgbox.querySelector("p");


choices.forEach(choice => {
    choice.addEventListener("click", function() {
        // console.log("User selected:", choice.id);
        let userchoice=choice.id;
        playgame(userchoice);
        let cmpchoice=choices[Math.floor(Math.random()*3)].id
        cmpplay(cmpchoice);
        let scoreupdate=choiceCompare(userchoice,cmpchoice,msg);
        scoreboard(scoreupdate,userscore,cmpscore);
        });
});


