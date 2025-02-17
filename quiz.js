const questions = [
    { 
        question: "Do you prefer decentralization over efficiency?", 
        options: ["Strongly Prefer Decentralization", "Somewhat Prefer Decentralization", "Neutral", "Somewhat Prefer Efficiency", "Strongly Prefer Efficiency"], 
        scores: [2, 1, 0, -1, -2] 
    },
    { 
        question: "Are you more of a developer or a businessman?", 
        options: ["Full-Time Developer", "Part-Time Developer", "Balanced", "Part-Time Businessman", "Full-Time Businessman"], 
        scores: [2, 1, 0, -1, -2] 
    },
    { 
        question: "Do you embrace regulation or avoid it?", 
        options: ["Fully Embrace", "Mostly Embrace", "Neutral", "Mostly Avoid", "Completely Avoid"], 
        scores: [-2, -1, 0, 1, 2] 
    },
    { 
        question: "What’s your approach to funding?", 
        options: ["ICO / Token Sale", "Venture Capital", "Self-Funded", "Crowdfunding", "Grant-based"], 
        scores: [2, 1, 0, -1, -2] 
    }
];

const results = [
    { title: "Vitalik Buterin", description: "You're a visionary developer who values decentralization.", image: "https://via.placeholder.com/150" },
    { title: "CZ (Changpeng Zhao)", description: "You're a business-minded leader who values efficiency.", image: "https://via.placeholder.com/150" },
    { title: "Satoshi Nakamoto", description: "You're an enigmatic and decentralized thinker.", image: "https://via.placeholder.com/150" },
    { title: "Sam Bankman-Fried", description: "You're a risk-taking entrepreneur in the crypto world.", image: "https://via.placeholder.com/150" }
];


let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const pageCounter = document.getElementById("page-counter");
    const nextButton = document.getElementById("next-btn");

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    // Update question text
    questionText.innerText = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = ""; // Clear previous options

    // Update the page counter (e.g., "1/12")
    pageCounter.innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    // Dynamically create radio buttons for all options
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

        // Add event listener to enable "Next" button when an option is selected
        radioBtn.addEventListener("change", () => {
            nextButton.disabled = false; 
        });
    });

    // Disable "Next" button until an option is selected
    nextButton.disabled = true;
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (selectedOption) {
        score += parseInt(selectedOption.value);
        currentQuestionIndex++;
        loadQuestion();
    }
}

function showResult() {
    document.getElementById("question-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    const result = score >= 2 ? results[0] : results[1];

    document.getElementById("result-title").innerText = result.title;
    document.getElementById("result-description").innerText = result.description;
    document.getElementById("result-image").src = result.image;

    // Show restart button
    document.getElementById("restart-btn").style.display = "block";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    document.getElementById("result-container").style.display = "none";
    document.getElementById("question-container").style.display = "block";

    loadQuestion();
}

window.onload = loadQuestion;
