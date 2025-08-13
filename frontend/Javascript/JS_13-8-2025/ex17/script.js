let quizData = [
  {
    q: "What is the chemical symbol for water?",
    options: ["O2", "H2O", "CO2", "H2O2"],
    ans: "H2O",
  },
  {
    q: "Which is a Red Planet?",
    options: ["Earth", "Jupiter", "Mars", "Saturn"],
    ans: "Mars",
  },
  {
    q: "What is the capital of India?",
    options: ["Mumbai", "Kolkata", "New Delhi", "Bengaluru"],
    ans: "New Delhi",
  },
];

let index = 0,
  score = 0;

function loadQuestion() {
  let qData = quizData[index];
  document.getElementById("question").textContent = qData.q;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  qData.options.forEach((opt) => {
    let btn = document.createElement("div");
    btn.textContent = opt;
    btn.className = "option";
    btn.onclick = () => checkAnswer(opt);
    optionsDiv.appendChild(btn);
  });
  document.getElementById("feedback").textContent = "";
}

function checkAnswer(selected) {
  if (selected === quizData[index].ans) {
    document.getElementById("feedback").textContent = "Correct!";
    document.getElementById("feedback").style.color = "green";
    score++;
  } else {
    document.getElementById("feedback").textContent = "Wrong!";
    document.getElementById("feedback").style.color = "red";
  }
  document.getElementById("score").textContent = score;
}

function nextQuestion() {
  index++;
  if (index < quizData.length) {
    loadQuestion();
  } else {
    document.body.innerHTML = `<h2>Quiz Finished!</h2><p>Your score: ${score}/${quizData.length}</p>`;
  }
}

loadQuestion();
