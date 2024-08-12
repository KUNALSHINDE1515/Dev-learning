const quiz = [
  {
    question: "What is the most used programming language in 2021?",
    ans1text: "Java",
    ans2text: "C",
    ans3text: "Python",
    ans4text: "JavaScript",
    answer: "JavaScript",
  },
  {
    question: "Who is the President of US?",
    ans1text: "Joe Biden",
    ans2text: "Donald Trump",
    ans3text: "Barack Obama",
    ans4text: "George Bush",
    answer: "Joe Biden",
  },
  {
    question: "What does HTML stand for?",
    ans1text: "Hypertext Markup Language",
    ans2text: "Cascading Style Sheet",
    ans3text: "Jason Object Notation",
    ans4text: "Helicopters Terminals Motorboats Lamborginis",
    answer: "Hypertext Markup Language",
  },
  {
    question: "What year was JavaScript launched?",
    ans1text: "1996",
    ans2text: "1995",
    ans3text: "1994",
    ans4text: "none of the above",
    answer: "1995",
  },
];

const questions = document.getElementById("quiz-question");
console.log(questions);
console.log(questions.textContent);

const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answer = document.querySelectorAll(".answer");

console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const button = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz);
console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

questions.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

console.log(answer);

button.addEventListener("click", () => {
  const checkedAnswer = document.querySelector('input[type="radio"]:checked');
  console.log(checkedAnswer);
  // console.log(checkedAnswer.nextElementSibling.textContent);

  if (checkedAnswer === null) {
    alert("Please select the answer option");
  } else {
    if (
      checkedAnswer.nextElementSibling.textContent ===
      quiz[currentQuestion].answer
    ) {
      score++;
    } else {
      checkedAnswer.checked = false;
      currentQuestion++;
      if (currentQuestion < quiz.length) {
        questions.textContent = quiz[currentQuestion].question;
        option_a.textContent = quiz[currentQuestion].ans1text;
        option_b.textContent = quiz[currentQuestion].ans2text;
        option_c.textContent = quiz[currentQuestion].ans3text;
        option_d.textContent = quiz[currentQuestion].ans4text;
        checkedAnswer.checked = false;
      }else{
        alert(`Your score is ${score} out of ${quiz.length}`)
        location.reload()
      }
    }
  }
});