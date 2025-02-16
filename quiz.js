const questions = [
    { question: "Do you like working in teams?", options: ["Yes", "No"], scores: [1, 0] },
    { question: "Do you prefer logic over emotions?", options: ["Yes", "No"], scores: [1, 0] }
];

let answers = [];

function loadQuiz() {
    const quizDiv = document.getElementById("quiz");
    questions.forEach((q, index) => {
        let html = `<div class="question"><p>${q.question}</p>`;
        q.options.forEach((option, i) => {
            html += `<button onclick="selectAnswer(${index}, ${q.scores[i]})">${option}</button>`;
        });
        html += "</div>";
        quizDiv.innerHTML += html;
    });
}

function selectAnswer(index, score) {
    answers[index] = score;
}

function calculateResult() {
    let total = answers.reduce((acc, val) => acc + (val || 0), 0);
    document.getElementById("result").innerText = total > 1 ? "You are a Leader!" : "You are an Innovator!";
}

window.onload = loadQuiz;
