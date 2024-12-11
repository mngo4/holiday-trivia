const questions = [
  {
    question: "If Santa had to choose who was on the naughty list this year, who do you think he would choose?",
    options: [
      "MONKEY",
      "Michelle",
      "Nav, for always calling Michelle a faggot and lame",
      "Michelle, be honest with yourself now..."
    ],
    correctAnswer: "Nav, for always calling Michelle a faggot and lame"
  },
  {
    question: "Let’s say one of us got into a fight with an elf. Who do you think would win?",
    options: [
      "Michelle",
      "Navid Hasan",
      "Nav",
      "Navid"
    ],
    correctAnswer: "Michelle"
  },
  {
    question: "It's Christmas Eve and everyone is gathered around the table for the Christmas feast. There are fries on the table, so who do you think has the biggest back and is going to reach for them first?",
    options: [
      "Definitely Michelle",
      "Without a doubt Nav",
      "Clearly, the Monkey",
      "Mich"
    ],
    correctAnswer: "Without a doubt Nav"
  },
  {
    question: "It’s Christmas Eve, and the stock market is closed. But if Santa were trading on the market, what would he be buying or selling?",
    options: [
      "Santa would be selling stocks in toy companies because, let’s face it, kids are getting too picky.",
      "He’d be buying shares in candy companies, because he knows the sugar high is never going out of style.",
      "He’d invest in holiday decorations, because apparently, people will keep buying them no matter how tacky they get.",
      "Santa’s got his eye on meme coins"
    ],
    correctAnswer: "Santa’s got his eye on meme coins"
  },
  {
    question: "Was this trivia lame?",
    options: [
      "Definitely",
      "More lame than Michelle",
      "Nah",
      "LAME and fruity"
    ],
    correctAnswer: "Nah"
  }
];

let currentQuestionIndex = 0;

// Start Trivia
function startTrivia() {
  document.getElementById('start-container').style.display = "none";
  document.getElementById('quiz-container').style.display = "block";
  loadQuestion();
}

// Restart Quiz
function restartTrivia() {
  currentQuestionIndex = 0;
  document.getElementById('end-container').style.display = "none";
  document.getElementById('start-container').style.display = "block";
}

// Load Question
function loadQuestion() {
  const question = questions[currentQuestionIndex];
  const questionText = document.getElementById("question");
  const optionsContainer = document.getElementById("options-container");
  const resultContainer = document.getElementById("result-container");

  // Reset UI
  questionText.textContent = question.question;
  optionsContainer.innerHTML = "";
  resultContainer.style.display = "none";

  question.options.forEach(option => {
    const optionLabel = document.createElement("label");
    optionLabel.className = "option";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = option;

    optionLabel.appendChild(input);
    optionLabel.appendChild(document.createTextNode(option));
    optionsContainer.appendChild(optionLabel);
  });

  // Handle option selection and change button color
const options = document.querySelectorAll('.option');
const submitButton = document.querySelector('.submit-button');

// Add event listener to each option
options.forEach(option => {
  option.addEventListener('click', () => {
    // Remove 'selected' class from all options
    options.forEach(o => o.classList.remove('selected'));

    // Add 'selected' class to the clicked option
    option.classList.add('selected');

    // Change the button color when an option is selected
  });
});

  // Toggle buttons
  document.querySelector('.submit-button').style.display = "block";
  document.querySelector('.next-button').style.display = "none";
}

// Check Answer
function checkAnswer() {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  const resultContainer = document.getElementById("result-container");
  const resultText = document.getElementById("result");

  if (!selectedAnswer) {
    resultText.textContent = "Quick, pick one!";
    resultContainer.style.display = "block";
    return;
  }

  const correctAnswer = questions[currentQuestionIndex].correctAnswer;
  if (selectedAnswer.value === correctAnswer) {
    resultText.textContent = "YAYYY, you got it right!";
    resultContainer.style.display = "block";
    document.querySelector('.submit-button').style.display = "none";
    document.querySelector('.next-button').style.display = "block";
  } else {
    resultText.textContent = "Really, Nav? Let's not lie now.";
    resultContainer.style.display = "block";
    document.querySelector('.next-button').style.display = "none";
  }

  resultContainer.style.display = "block";
  
}

// Next Question
function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    loadQuestion();
  } else {
    document.getElementById('quiz-container').style.display = "none";
    document.getElementById('end-container').style.display = "block";
  }
}

