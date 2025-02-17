function startQuiz() {
    // Hide the intro page
    document.getElementById("intro-container").style.display = "none";

    // Show the quiz container
    document.getElementById("quiz-container").style.display = "block";

    // Load the first question
    loadQuestion();
}

const questions = [
    { 
        question: "Do you prefer decentralization over efficiency?", 
        options: ["Strongly Prefer Decentralization", "Somewhat Prefer Decentralization", "Neutral", "Somewhat Prefer Efficiency", "Strongly Prefer Efficiency"], 
        scores: [2, 1, 0, -1, -2],
        image: "https://raw.githubusercontent.com/your-username/your-repo/main/images/decentralization.gif" // Example
    },
    { 
        question: "Are you more of a developer or a businessman?", 
        options: ["Full-Time Developer", "Part-Time Developer", "Balanced", "Part-Time Businessman", "Full-Time Businessman"], 
        scores: [2, 1, 0, -1, -2],
        image: "https://raw.githubusercontent.com/your-username/your-repo/main/images/developer.gif"
    },
    { 
        question: "Do you embrace regulation or avoid it?", 
        options: ["Fully Embrace", "Mostly Embrace", "Neutral", "Mostly Avoid", "Completely Avoid"], 
        scores: [-2, -1, 0, 1, 2],
        image: "https://raw.githubusercontent.com/your-username/your-repo/main/images/regulation.gif"
    },
    { 
        question: "What’s your approach to funding?", 
        options: ["ICO / Token Sale", "Venture Capital", "Self-Funded", "Crowdfunding", "Grant-based"], 
        scores: [2, 1, 0, -1, -2],
        image: "https://raw.githubusercontent.com/your-username/your-repo/main/images/funding.gif"
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
    const questionImage = document.getElementById("question-image");
    const nextButton = document.getElementById("next-btn");

    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    // Update question text
    questionText.innerText = questions[currentQuestionIndex].question;
    optionsContainer.innerHTML = ""; // Clear previous options

    // Update the page counter (e.g., "1/4")
    pageCounter.innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    // ✅ Update question image dynamically
    questionImage.src = questions[currentQuestionIndex].image;
    questionImage.style.display = "block"; // Make sure it appears

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

        // Enable "Next" button only when an option is selected
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
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    // Determine personality based on score
    let result;
    if (score >= 5) {
        result = results[0]; // Vitalik
    } else if (score >= 2) {
        result = results[1]; // CZ
    } else if (score >= -1) {
        result = results[2]; // Satoshi
    } else {
        result = results[3]; // Sam Bankman-Fried
    }

    // Show result
    document.getElementById("result-title").innerText = result.title;
    document.getElementById("result-description").innerText = result.description;
    document.getElementById("result-image").src = result.image;

    // ✅ Show restart button
    document.getElementById("restart-btn").style.display = "block";
}

// ✅ `restartQuiz()` is now correctly placed outside `showResult()`
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;

    // ✅ Hide the result and quiz containers
    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "none";

    // ✅ Show the introduction page again
    document.getElementById("intro-container").style.display = "block";

    // ✅ Hide the restart button again
    document.getElementById("restart-btn").style.display = "none";

    // ✅ Ensure the "Next" button is disabled at the start
    document.getElementById("next-btn").disabled = true;
}

