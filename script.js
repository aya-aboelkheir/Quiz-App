const questions = [
    {
        question: "which is largest animal in the world?",
        answer: [
            {text: "shark", correct: false},
            {text: "Blue Whale", correct: true},
            {text: "Elephant", correct: false},
            {text: "Giraffe", correct: false}
        ]
    },
    {
    question: "Which planet is known as the Red Planet?",
    answer: [
        {text: "Earth", correct: false},
        {text: "Mars", correct: true},
        {text: "Jupiter", correct: false},
        {text: "Venus", correct: false}
    ]
},
{
    question: "How many days are there in a week?",
    answer: [
        {text: "5", correct: false},
        {text: "6", correct: false},
        {text: "7", correct: true},
        {text: "8", correct: false}
    ]
},
{
    question: "What is the capital of France?",
    answer: [
        {text: "London", correct: false},
        {text: "Berlin", correct: false},
        {text: "Madrid", correct: false},
        {text: "Paris", correct: true}
    ]
},
{
    question: "Which language is used to style web pages?",
    answer: [
        {text: "HTML", correct: false},
        {text: "CSS", correct: true},
        {text: "Python", correct: false},
        {text: "SQL", correct: false}
    ]
},
{
    question: "What is 5 + 3?",
    answer: [
        {text: "6", correct: false},
        {text: "7", correct: false},
        {text: "8", correct: true},
        {text: "9", correct: false}
    ]
},
{
    question: "Which is the largest ocean in the world?",
    answer: [
        {text: "Atlantic Ocean", correct: false},
        {text: "Indian Ocean", correct: false},
        {text: "Pacific Ocean", correct: true},
        {text: "Arctic Ocean", correct: false}
    ]
},
{
    question: "Which programming language is mainly used with React?",
    answer: [
        {text: "JavaScript", correct: true},
        {text: "C++", correct: false},
        {text: "Java", correct: false},
        {text: "SQL", correct: false}
    ]
},
{
    question: "Which animal is known as the King of the Jungle?",
    answer: [
        {text: "Tiger", correct: false},
        {text: "Lion", correct: true},
        {text: "Elephant", correct: false},
        {text: "Wolf", correct: false}
    ]
},
{
    question: "What does HTML stand for?",
    answer: [
        {text: "Hyper Text Markup Language", correct: true},
        {text: "High Text Machine Language", correct: false},
        {text: "Hyperlink Text Management Language", correct: false},
        {text: "Home Tool Markup Language", correct: false}
    ]
}

]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNum = currentQuestionIndex + 1 ;
    questionElement.innerHTML = questionNum + ". " + currentQuestion.question;
   
    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text;
        button.classList.add("btn")
        answerButtons.append(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    })
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block"
}

function showScore(){
    resetState();
    questionElement.innerHTML =  `You scored ${score} out of ${questions.length} !`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();
