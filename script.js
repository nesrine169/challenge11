const questions = [
  {
    question: "What is SpongeBob's pet snail's name?",
    answers : [
      { text: "Gary" , correct: true},
      { text: "Larry" , correct: false },
      { text: "Barry" , correct: false},
      { text: "Jerry" , correct: false},
    ]
  },

  {
    question: "What is SpongeBob's favorite hobby?",
    answers : [
      { text: "Karate" , correct: false },
      { text: "Playing the clarinet" , correct: false},
      { text: "Reading books" , correct: false},
      { text: "Jellyfishing" , correct: true},
    ]
  },

  {
    question: "What instrument does Squidward play?",
    answers : [
      { text: "Flute" , correct: false},
      { text: " Tuba" , correct: false },
      { text: "Clarinet" , correct: true},
      { text: "Guitar" , correct: false},
    ]

  },

  {
    question: "What is the name of the ocean in which Bikini Bottom is located?",
    answers : [
      { text: "Pacific Ocean" , correct: false},
      { text: " Bikini Atoll" , correct: true},
      { text: "Atlantic Ocean" , correct: false },
      { text: " Indian Ocean" , correct: false},
    ]

  },

  {
    question: "What is the Krabby Patty secret formula?",
    answers : [
      { text: "Love" , correct: true},
      { text: "Pickles" , correct: false },
      { text: "Krabby Patty is a vegetarian burger" , correct: false},
      { text: "Krusty Krab's special sauce" , correct: false},
    ]

  },

  {
    question: "What is the name of the boat that Mrs. Puff drives in her boating school?",
    answers : [
      
      { text: "The Salty Spittoon" , correct: false },
      { text: "The S.S. Anne" , correct: false},
      { text: "SS Guppy" , correct: true},
      { text: "The Invisible Boatmobile" , correct: false},
    ]

  },

  {
    question: "What is the name of SpongeBob's pet snail?",
    answers : [
      { text: "Larry" , correct: false},
      { text: "Gary" , correct: true },
      { text: "Jerry" , correct: false},
      { text: "Barry" , correct: false},
    ]

  },

  {
    question: "Where does Sandy Cheeks come from?",
    answers : [
      { text: "Texas" , correct: true},
      { text: "California" , correct: false},
      { text: "Hawaii" , correct: false},
      { text: "Florida" , correct: false},
    ]

  },

  {
    question: "Who is SpongeBob's best friend?",
    answers : [
      { text: "Squidward" , correct: false},
      { text: "Patrick" , correct: true },
      { text: "Sandy" , correct: false},
      { text: "Jerry" , correct: false},
    ]

  },

  


];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex =  0;
let score = 0;

function startQuiz(){
  currentQuestionIndex =  0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();

}

function showQuestion (){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + "." + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState (){
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
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length} !` ;
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



