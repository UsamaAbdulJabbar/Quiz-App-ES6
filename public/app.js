const quizDB = [
    {
        question: "Q1: What is the full of form of HTML ?",
        a:"Hello To My Land",
        b:"Hyper Text Markup Language",
        c:"Hyper Text Makeup Language",
        d:"Hello Text Markup Language",
        ans:"ans2",
    },
    {
        question: "Q2: What is the full of form of CSS?",
        a:"Commission Short Service",
        b:"Cascading Style Screen",
        c:"Cascading Style Sheet",
        d:"Computer Style Screen",
        ans:"ans3",

    },
    {
        question: "Q3: What is full form of HTTP?",
        a:"Hyper Text Transfer Protocol",
        b:"Hello To The Pakistan",
        c:"Hyper Typing Test Program",
        d:"Hot Testing Transfer Protocol",
        ans:"ans1",
    },
    {
        question: "Q4: What is full form of JS",
        a:"Junior Sorting",
        b:"Java Special",
        c:"JavaScript",
        d:"JangoScript",
        ans:"ans3",

    },
    
    

];


 








const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')
let questionCount = 0;
let score = 0;
const loadQuestion= ()  => {
    const questionList = quizDB[questionCount];
    question.innerText =  questionList.question;
    
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();


const getCheckAnswer= () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
        
    })
    return answer;
}
const deselect=()=>{
    answers.forEach((curAnsElem)=>{
        curAnsElem.checked = false;
    })
}


submit.addEventListener('click',() => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    console.log(score);
    questionCount++;
    
    deselect();
    if(questionCount < quizDB.length){
        loadQuestion();
        
    }
    
    else{
        showScore.innerHTML = `
        <h3>
        You Scored : ${score}/${quizDB.length} ✌️ </h3>
        <button class='btn' onclick='location.reload()'>Start Again </button>
        `;
        
        showScore.classList.remove('scoreArea');
    }
    
    
});


