let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;
let highscore=1;
let h3=document.querySelector("h3");
h3.innerText=`Start game to view highscore.`;
let btns=["yellow","red","purple","green"];

let h2=document.querySelector("h2");
document.addEventListener("keypress",function(){
    
    if(started==false){
        console.log("Event started");
        started=true;
        levelUp();
    }
})



function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);

    gameSeq.push(randColor);
    console.log(gameSeq);
    //random btn choose
    btnFlash(randBtn);
}

function checkAns(idx){
    
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp(),1000);
        }
    }else{
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        },150);
        if(level>highscore){
            highscore=level;
            h3.innerText=` Congratulations, new high score : ${highscore}`
        }
        else{
            h3.innerHTML=`Highscore : ${highscore}`;
        }
        h2.innerHTML=`Game Over, your score was <b>${level}</b> <br>press any key to start!`;
        reset();
    }
}
function btnPress(){
    let btn=this;
    userFlash(btn);
    userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    // console.log(this);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){

    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
}