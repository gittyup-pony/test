const questions = [
    { 
        question: "Do you prefer decentralization over efficiency?", 
        options: ["Yes", "No"], 
        scores: [1, 0] 
    },
    { 
        question: "Are you more of a developer or a businessman?", 
        options: ["Developer", "Businessman"], 
        scores: [1, 0] 
    },
    { 
        question: "Do you embrace regulation or avoid it?", 
        options: ["Embrace", "Avoid"], 
        scores: [0, 1] 
    }
];

const results = [
    { title: "Vitalik Buterin", description: "You're a visionary developer who values decentralization.", image: "https://via.placeholder.com/150" },
    { title: "CZ (Changpeng Zhao)", description: "You're a business-minded leader who values efficiency.", image: "https://via.placeholder.com/150" }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const progressBar = document.getElementById("progress-bar");

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    questionText.innerText = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = "";

    questions[currentQuestionIndex].options.forEach((option, index) => {
        const radioBtn = document.createElement("input");
        radioBtn.type = "radio";
        radioBtn.name = "answer";
        radioBtn.value = questions[currentQuestionIndex].scores[index];
        radioBtn.id = `option${index}`;

        const label = document.createElement("label");
        label.htmlFor = `option${index}`;
        label.innerText = option;

        const br = document.createElement("br");

        optionsContainer.appendChild(radioBtn);
        optionsContainer.appendChild(label);
        optionsContainer.appendChild(br);
    });

    // Update progress bar
    progressBar.innerHTML = `<div id="progress-fill" style="width: ${(currentQuestionIndex / questions.length) * 100}%"></div>`;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    
    if (selectedOption) {
        score += parseInt(selectedOption.value);
        currentQuestionIndex++;
        loadQuestion();
    } else {
        alert("Please select an answer!");
    }
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const result = score >= 2 ? results[0] : results[1];

    document.getElementById("result-title").innerText = result.title;
    document.getElementById("result-description").innerText = result.description;
    document.getElementById("result-image").src = result.image;
}

window.onload = loadQuestion;
