const questions = [
    {
        question: "Which of the following is a common sign of a phishing email?",
        answers: [
            "A message from a trusted contact",
            "Urgent language asking you to act quickly",
            "A normal newsletter",
            "A saved contact number"
        ],
        correct: 1
    },
    {
        question: "What should you do before clicking a suspicious link?",
        answers: [
            "Click it quickly",
            "Forward it to friends",
            "Check the link destination",
            "Enter your password"
        ],
        correct: 2
    },
    {
        question: "What is spear phishing?",
        answers: [
            "A targeted phishing attack against a specific person or organization",
            "A type of antivirus",
            "A secure email service",
            "A firewall technique"
        ],
        correct: 0
    },
    {
        question: "Which action can help protect your online accounts from phishing?",
        answers: [
            "Using the same password everywhere",
            "Disabling security alerts",
            "Using multi-factor authentication",
            "Sharing passwords with friends"
        ],
        correct: 2
    },
    {
        question: "You receive an unexpected email asking you to verify your bank account through a link. What is the safest action?",
        answers: [
            "Click the link immediately",
            "Reply with your account details",
            "Ignore the warning signs",
            "Access the bank through its official website or app instead"
        ],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionNumber = document.getElementById("question-number");
const questionText = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");

const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result");
const scoreText = document.getElementById("score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");

function loadQuestion() {
    const current = questions[currentQuestion];

    questionNumber.textContent = currentQuestion + 1;
    questionText.textContent = current.question;

    answersContainer.innerHTML = "";
    answered = false;

    current.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.className = "answer";
        button.textContent = answer;

        button.addEventListener("click", () => selectAnswer(index, button));

        answersContainer.appendChild(button);
    });

    nextButton.textContent =
        currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question";

    nextButton.disabled = true;
}

function selectAnswer(selectedIndex, selectedButton) {
    if (answered) {
        return;
    }

    answered = true;

    const correctIndex = questions[currentQuestion].correct;
    const answerButtons = document.querySelectorAll(".answer");

    answerButtons.forEach((button, index) => {
        button.disabled = true;

        if (index === correctIndex) {
            button.classList.add("correct");
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }

    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    if (!answered) {
        return;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    quizContainer.classList.add("hidden");
    resultContainer.classList.remove("hidden");

    scoreText.textContent = score;

    if (score === 5) {
        resultMessage.textContent =
            "Excellent! You have a strong understanding of phishing awareness.";
    } else if (score >= 3) {
        resultMessage.textContent =
            "Good work! Keep practicing to improve your phishing awareness.";
    } else {
        resultMessage.textContent =
            "Keep learning. Understanding phishing red flags can help you stay safer online.";
    }
}

restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;

    resultContainer.classList.add("hidden");
    quizContainer.classList.remove("hidden");

    loadQuestion();
});

loadQuestion();
function toggleExplanation(id) {
    const explanation = document.getElementById(id);

    explanation.classList.toggle("hidden");
}
const checklistItems = document.querySelectorAll(
    '.check-item input[type="checkbox"]'
);

const checkedCount = document.getElementById("checked-count");

checklistItems.forEach((item) => {
    item.addEventListener("change", () => {
        const checkedItems = document.querySelectorAll(
            '.check-item input[type="checkbox"]:checked'
        ).length;

        checkedCount.textContent = checkedItems;
    });
});
