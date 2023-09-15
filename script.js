const questions=[
    {
        question:"HTML full form?",
        answers:[
            {text:"hyper text markup launguage",correct:true},
            {text:"hyper text manipulate launguage",correct:false},
            {text:"hyper text manage launguage",correct:false},
            {text:"higer text markup launguage",correct:false}

        ]
    },
    {
        question:"CSS full form ?",
        answers:[
            {text:"Cascading style sheet",correct:false},
            {text:"Cascading style sheets",correct:true},
            {text:"Cascaded stroke style",correct:false},
            {text:"Cascading styling sheets",correct:false}

        ]
    },
    {
        question:"which is not a js framework ?",
        answers:[
            {text:"React",correct:false},
            {text:"vu",correct:false},
            {text:"Angular",correct:false},
            {text:"Bootstrap",correct:true}

        ]
    },
    {
        question:"API fullfrom ?",
        answers:[
            {text:"Application Programming Interface",correct:true},
            {text:"Application program interm",correct:false},
            {text:"App Programming Interfacing",correct:false},
            {text:"Application Programming Intermediate",correct:false}

        ]
    }
];
const q=document.getElementById("q");
const ansBtns=document.getElementById("options");
const next=document.getElementById("next");
let CI=0;
let score=0;

function startQuizz(){
    CI=0;
    score=0;
    next.innerHTML="Next";
    showQ();
}
function showQ(){
    resetq();
    let cq=questions[CI];
    let qn=CI+1;
    q.innerHTML=qn+":"+cq.question;
    cq.answers.forEach(a=>{
        const button=document.createElement("button");
        button.innerHTML=a.text;
        button.classList.add("btn");
        ansBtns.appendChild(button);
        if(a.correct){
            button.dataset.correct=a.correct;
            
        }
        button.addEventListener("click",selectanswer);
    })
}

function resetq(){
    next.style.display="none";
    while(ansBtns.firstChild)
    ansBtns.removeChild(ansBtns.firstChild);
}

function selectanswer(e){
    const sb=e.target;
    const cf=sb.dataset.correct === "true";
    if(cf){
        sb.classList.add("correct");
        score++;
    }
    else{
        sb.classList.add("incorrect");
    }
    Array.from(ansBtns.children).forEach(bt =>{
         if(bt.dataset.correct === "true"){
            bt.classList.add("correct");
         }
         bt.disabled=true;

    })
    next.style.display="block";

    
}
function handlebutton(){
    CI++;
    if(CI<questions.length)
    showQ();
    else{ 
    showScore();
    q.innerHTML="";
    }
}
function showScore(){
    resetq();
    ansBtns.innerHTML="you scored "+score+" out of "+questions.length;
    next.innerHTML="Play Again";
    next.style.display="block";
}
startQuizz();
next.addEventListener("click",()=>{
    if(CI<questions.length)
    handlebutton();
    else
    startQuizz();
})