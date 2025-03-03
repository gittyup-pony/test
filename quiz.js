function startQuiz() {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    currentQuestionIndex = 0;

    // ✅ Reset scores to 0
    scores = { 
        guanYin: 0, nezha: 0, wukong: 0, buddha: 0, 
        changEr: 0, erLang: 0, guanGong: 0, caiShenYe: 0 
    };

    loadQuestion();
}

const questions = [
    { 
        question: "While walking home, dark clouds gather and you can hear thunder in the distance. Within seconds, rain starts to pour and you look frantically in your bag for your trusty umbrella, but realise you left it at work. How do you react?",
        options: ["Crash out, then start hauling ass to anywhere but here", "Shrug and consider yourself unlucky and start looking for shelter."],
        gif: "https://media.giphy.com/media/xT9DPldJHzZKtOnK8U/giphy.gif",
        scores: [
            { guanYin: 1, nezha: 8, wukong: 3, buddha: 7, changEr: 6, erLang: 4, guanGong: 5, caiShenYe: 2 }, 
            { guanYin: 2, nezha: 7, wukong: 4, buddha: 6, changEr: 8, erLang: 5, guanGong: 3, caiShenYe: 1 }
        ]
    },
    { 
        question: "You spot a gazebo in the distance and start making your way there. With the downpour obscuring your vision, you fall into a longkang and pass out. You wake up surrounded by an army of frogs. What do you do?",
        options: ["Put your fists up and dare these green slimeballs to come closer.", "Try to appear as non-threatening as possible."],
        gif: "https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif",
        scores: [
            { guanYin: 9, nezha: 16, wukong: 11, buddha: 14, changEr: 12, erLang: 10, guanGong: 13, caiShenYe: 15 }, 
            { guanYin: 10, nezha: 15, wukong: 12, buddha: 13, changEr: 16, erLang: 11, guanGong: 14, caiShenYe: 9 }
        ]
    },
    { 
        question: "Before you can act, you realise that your surroundings look different. It appears you're in some kind of an ancient kingdom. You're thinking:",
        options: ["Fuck, I must be dead. Why does heaven look like this?", "This is a hallucination, I must've hit my head pretty hard."],
        gif: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
        scores: [
            { guanYin: 17, nezha: 24, wukong: 19, buddha: 22, changEr: 20, erLang: 18, guanGong: 21, caiShenYe: 23 }, 
            { guanYin: 18, nezha: 23, wukong: 20, buddha: 21, changEr: 24, erLang: 19, guanGong: 22, caiShenYe: 17 }
        ]
    },
    { 
        question: "The biggest frog suddenly croaks that the prophecy has come true: a weird-looking immortal frog has come to help them win their war against the flies! How do you react?",
        options: ["Protest the war and take issue about the weird-looking comment.", "Agree and start boasting about how you can take on any fly."],
        gif: "https://media.giphy.com/media/Q81NcsY6YxK7jxnr4v/giphy.gif",
        scores: [
            { guanYin: 25, nezha: 32, wukong: 27, buddha: 30, changEr: 28, erLang: 26, guanGong: 29, caiShenYe: 31 }, 
            { guanYin: 26, nezha: 31, wukong: 28, buddha: 29, changEr: 32, erLang: 27, guanGong: 30, caiShenYe: 25 }
        ]
    },
    { 
        question: "The big frog introduces himself as Frog-derick, the Frog General. He escorts you to the war room and asks how you can contribute to their efforts. How do you respond?",
        options: ["I wanna throw hands. Point me to the flies", "I can help in other ways. I know CPR."],
        gif: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
        scores: [
            { guanYin: 33, nezha: 40, wukong: 37, buddha: 34, changEr: 36, erLang: 38, guanGong: 35, caiShenYe: 39 }, 
            { guanYin: 34, nezha: 39, wukong: 38, buddha: 35, changEr: 40, erLang: 37, guanGong: 36, caiShenYe: 33 }
        ]
    },
    { 
        question: "Before sending you out to the battlefield, Frog-derick wants to equip you with a weapon so you can defend yourself. Which weapon do you pick?",
        options: ["The insect repellant, so the flies keep away", "The electric fly swatter so you go on the offense."],
        gif: "https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif",
        scores: [
            { guanYin: 41, nezha: 48, wukong: 45, buddha: 42, changEr: 44, erLang: 46, guanGong: 43, caiShenYe: 47 }, 
            { guanYin: 42, nezha: 47, wukong: 46, buddha: 43, changEr: 48, erLang: 45, guanGong: 44, caiShenYe: 41 }
        ]
    },
    { 
        question: "As you enter the battlefield, the Lord of the Flies sees you and immediately surrenders due to your gigantic size. With the war won, Frog-derick grants you a wish as a reward. What do you want most?",
        options: ["A magic bag that always has what you need", "An umbrella that doubles as a sword when you need it."],
        gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
        scores: [
            { guanYin: 49, nezha: 56, wukong: 53, buddha: 50, changEr: 52, erLang: 54, guanGong: 51, caiShenYe: 55 }, 
            { guanYin: 50, nezha: 55, wukong: 54, buddha: 51, changEr: 56, erLang: 53, guanGong: 52, caiShenYe: 49 }
        ]
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
    document.getElementById("page-counter").innerText = `Question ${currentQuestionIndex + 1} / ${questions.length}`;

    let questionGif = document.getElementById("question-gif");
    questionGif.src = currentQ.gif;
    questionGif.style.display = "block";

    let optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    currentQ.options.forEach((option, index) => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => nextQuestion(index);
        optionsContainer.appendChild(btn);
    });
}

function nextQuestion(choiceIndex) {
    let currentQ = questions[currentQuestionIndex];

    Object.keys(currentQ.scores).forEach((persona) => {
        scores[persona] += currentQ.scores[persona] || 0;
    });

    currentQuestionIndex++;
    loadQuestion();
}


function showResult() {
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("result-container").style.display = "block";

    let highestPersona = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    document.getElementById("result-title").innerText = highestPersona;
    document.getElementById("result-description").innerText = `You are most like ${highestPersona}!`;
    document.getElementById("restart-btn").style.display = "block";
}
function restartQuiz() {
    currentQuestionIndex = 0;
    
    // ✅ Reset scores to prevent previous results from affecting the new quiz
    scores = { 
        guanYin: 0, nezha: 0, wukong: 0, buddha: 0, 
        changEr: 0, erLang: 0, guanGong: 0, caiShenYe: 0 
    };

    // ✅ Hide the result container
    document.getElementById("result-container").style.display = "none";

    // ✅ Show the intro page again
    document.getElementById("intro-container").style.display = "block";

    // ✅ Ensure the restart button is hidden until the next quiz ends
    document.getElementById("restart-btn").style.display = "none";
}
