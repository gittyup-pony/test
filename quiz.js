function startQuiz() {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

const questions = [
    { 
        question: "How do you handle challenges?",
        options: ["Stay calm and think it through.", "Push through with energy and determination."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "What motivates you most?",
        options: ["Wisdom, balance, and peace.", "Success, power, and action."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "What’s your style of decision-making?",
        options: ["Careful and strategic.", "Fast and spontaneous."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "How do others see you?",
        options: ["Calm and mysterious.", "Intense and energetic."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "Do you prefer stability or adventure?",
        options: ["Stability and wisdom.", "Excitement and risk-taking."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "How do you react to authority?",
        options: ["Respect it and work within it.", "Challenge it and find my own way."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "Which best describes you?",
        options: ["Stoic and composed.", "Energetic and bold."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "What do you value most?",
        options: ["Honor and discipline.", "Freedom and creativity."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    }
];

let scores = { guanYin: 0, nezha: 0, wukong: 0, buddha: 0, changEr: 0, erLang: 0, guanGong: 0, caiShenYe: 0 };
let currentQuestionIndex = 0;

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        let choiceIndex = parseInt(selectedOption.value);
        let currentQ = questions[currentQuestionIndex];
        Object.keys(currentQ.scores).forEach(persona => {
            if (choiceIndex === 0) scores[persona] += currentQ.scores[persona] === 1 ? 1 : 0;
            else scores[persona] += currentQ.scores[persona] === 2 ? 1 : 0;
        });
        currentQuestionIndex++;
        loadQuestion();
    }
}
