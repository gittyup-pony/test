function startQuiz() {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    currentQuestionIndex = 0;
    scores = { guanYin: 0, nezha: 0, wukong: 0, buddha: 0, changEr: 0, erLang: 0, guanGong: 0, caiShenYe: 0 };
    loadQuestion();
}

const questions = [
    { 
        question: "While walking home, dark clouds gather and you can hear thunder in the distance. Within seconds, rain starts to pour and you look frantically in your bag for your trusty umbrella, but realise you left it at work. How do you react?",
        options: ["Crash out, then start hauling ass to anywhere but here", "Shrug and consider yourself unlucky and start looking for shelter."],
        scores: { guanYin: 2, buddha: 1, changEr: 2, erLang: 1, nezha: 2, wukong: 1, guanGong: 2, caiShenYe: 1 }
    },
    { 
        question: "You spot a gazebo in the distance and start making your way there. With the downpour obscuring your vision, you fall into a longkang and pass out. You wake up surrounded by an army of frogs. What do you do?",
        options: ["Put your fists up and dare these green slimeballs to come closer.", "Try to appear as non-threatening as possible."],
        scores: { guanYin: 1, buddha: 2, changEr: 2, erLang: 1, nezha: 1, wukong: 2, guanGong: 2, caiShenYe: 1 }
    },
    { 
        question: "Before you can act, you realise that your surroundings look different. It appears you're in some kind of ancient kingdom. You're thinking:",
        options: ["Fuck, I must be dead. Why does heaven look like this?", "This is a hallucination, I must've hit my head pretty hard."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "In the midst of your thoughts, the biggest frog suddenly croaks to the others that the prophecy has come true: a weird-looking immortal frog has come to help them win their war against the flies! How do you react?",
        options: ["Protest the war and take issue about the weird-looking comment.", "Agree and start boasting about how you can take on any fly."],
        scores: { guanYin: 2, buddha: 2, changEr: 2, erLang: 2, nezha: 1, wukong: 1, guanGong: 1, caiShenYe: 1 }
    }
];

let scores = { guanYin: 0, nezha: 0, wukong: 0, buddha: 0, changEr: 0, erLang: 0, guanGong: 0, caiShenYe: 0 };
let currentQuestionIndex = 0;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showResult();
        return;
    }

    let currentQ = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = currentQ.question;
    document.getElementById("label0").innerText = currentQ.options[0];
    document.getElementById("label1").innerText = currentQ.options[1];
    document.getElementById("page-counter").innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    let radioButtons = document.querySelectorAll('input[name="answer"]');
    
    // ✅ Clear previous selections
    radioButtons.forEach(input => {
        input.checked = false;
    });

    // ✅ Disable "Next" button until an option is selected
    document.getElementById("next-btn").disabled = true;

    // ✅ Add event listener to enable "Next" button when an option is selected
    radioButtons.forEach(input => {
        input.addEventListener("change", () => {
            document.getElementById("next-btn").disabled = false;
        });
    });
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) return; // ✅ Prevents errors if nothing is selected

    let choiceIndex = parseInt(selectedOption.value);
    let currentQ = questions[currentQuestionIndex];

    // ✅ Add scores based on choice
    Object.keys(currentQ.scores).forEach(persona => {
        if (choiceIndex === 0) {
            scores[persona] += currentQ.scores[persona];
        }
    });

    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    let highestPersona = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    // ✅ Update the result title & description
    document.getElementById("result-title").innerText = highestPersona;
    document.getElementById("result-description").innerText = `You are most like ${highestPersona}!`;

    // ✅ Ensure Restart Button is visible
    document.getElementById("restart-btn").style.display = "block";
}

function restartQuiz() {
    currentQuestionIndex = 0;
    scores = { guanYin: 0, nezha: 0, wukong: 0, buddha: 0, changEr: 0, erLang: 0, guanGong: 0, caiShenYe: 0 };

    document.getElementById("result-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("intro-container").style.display = "block";
}
