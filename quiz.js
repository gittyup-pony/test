function startQuiz() {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    document.getElementById("result-container").style.display = "none"; 


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
        scores: { guanYin: 1, nezha: 5, wukong: 3, buddha: 7, changEr: 6, erLang: 4, guanGong: 8, caiShenYe: 2 }
    },
    { 
        question: "You spot a gazebo in the distance and start making your way there. With the downpour obscuring your vision, you fall into a longkang and pass out. You wake up surrounded by an army of frogs. What do you do?",
        options: ["Put your fists up and dare these green slimeballs to come closer.", "Try to appear as non-threatening as possible."],
        gif: "https://media.giphy.com/media/l0HlNaQ6gWfllcjDO/giphy.gif",
        scores: { guanYin: 3, nezha: 8, wukong: 5, buddha: 6, changEr: 2, erLang: 7, guanGong: 4, caiShenYe: 1 }
    },
    { 
        question: "Before you can act, you realise that your surroundings look different. It appears you're in some kind of an ancient kingdom. You're thinking:",
        options: ["Fuck, I must be dead. Why does heaven look like this?", "This is a hallucination, I must've hit my head pretty hard."],
        gif: "https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif",
        scores: { guanYin: 7, nezha: 2, wukong: 6, buddha: 3, changEr: 8, erLang: 5, guanGong: 4, caiShenYe: 1 }
    },
    { 
        question: "The biggest frog suddenly croaks that the prophecy has come true: a weird-looking immortal frog has come to help them win their war against the flies! How do you react?",
        options: ["Protest the war and take issue about the weird-looking comment.", "Agree and start boasting about how you can take on any fly."],
        gif: "https://media.giphy.com/media/Q81NcsY6YxK7jxnr4v/giphy.gif",
        scores: { guanYin: 5, nezha: 4, wukong: 7, buddha: 8, changEr: 3, erLang: 2, guanGong: 1, caiShenYe: 6 }
    },
    { 
        question: "The big frog introduces himself as Frog-derick, the Frog General. He escorts you to the war room and asks how you can contribute to their efforts. How do you respond?",
        options: ["I wanna throw hands. Point me to the flies", "I can help in other ways. I know CPR."],
        gif: "https://media.giphy.com/media/3o6Zt481isNVuQI1l6/giphy.gif",
        scores: { guanYin: 6, nezha: 3, wukong: 1, buddha: 8, changEr: 2, erLang: 7, guanGong: 5, caiShenYe: 4 }
    },
    { 
        question: "Before sending you out to the battlefield, Frog-derick wants to equip you with a weapon so you can defend yourself. Which weapon do you pick?",
        options: ["The insect repellant, so the flies keep away", "The electric fly swatter so you go on the offense."],
        gif: "https://media.giphy.com/media/5VKbvrjxpVJCM/giphy.gif",
        scores: { guanYin: 3, nezha: 7, wukong: 2, buddha: 5, changEr: 6, erLang: 8, guanGong: 1, caiShenYe: 4 }
    },
    { 
        question: "As you enter the battlefield, the Lord of the Flies sees you and immediately surrenders due to your gigantic size. With the war won, Frog-derick grants you a wish as a reward. What do you want most?",
        options: ["A magic bag that always has what you need", "An umbrella that doubles as a sword when you need it."],
        gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
        scores: { guanYin: 8, nezha: 6, wukong: 5, buddha: 2, changEr: 7, erLang: 3, guanGong: 1, caiShenYe: 4 }
    },
    { 
        question: "You celebrate with your frog buddies, but during the festivities you drink a bit too much and fall asleep. When you wake up, you find yourself back at the longkang and no frogs in sight. Your head hurts, but what could be the reason?",
        options: ["Must have hit my head after falling and had a dream while knocked out.", "I drank too much at the frog party and I'm having a terrible hangover."],
        gif: "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif",
        scores: { guanYin: 4, nezha: 1, wukong: 8, buddha: 3, changEr: 5, erLang: 2, guanGong: 6, caiShenYe: 7 }
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
    document.getElementById("question-gif").src = currentQ.gif;

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

    // ✅ Corrected scoring calculation
    Object.keys(currentQ.scores).forEach(persona => {
        scores[persona] += currentQ.scores[persona] || 0;
    });

    currentQuestionIndex++;

    // ✅ Ensure last question transitions to result page
    if (currentQuestionIndex >= questions.length) {
        showResult();
    } else {
        loadQuestion();
    }
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
    startQuiz();
}(persona => {
        scores[persona] += currentQ.scores[persona] || 0;
    });

    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    let highestPersona = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    document.getElementById("result-title").innerText = highestPersona;
}
