function startQuiz() {
    document.getElementById("intro-container").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

const questions = [
    { 
        question: "While walking home, dark clouds gather and you can hear thunder in the distance. Within seconds, rain starts to pour and you look frantically in your bag for your trusty umbrella, but realise you left it at work. How to you react?",
        options: ["Crash out, then start hauling ass to anywhere but here", "Shrug and consider yourself unlucky and start looking for shelter."],
        scores: { guanYin: 2, buddha: 1, changEr: 2, erLang: 1, nezha: 2, wukong: 1, guanGong: 2, caiShenYe: 1 }
    },
    { 
        question: "You spot a gazebo in the distance and start making your way there. With the downpour obscuring your vision, you fall into a longkang and pass out. You wake up surrounded by an army of frogs. What do you do?",
        options: ["Put your fists up and dare these green slimeballs to come closer.", "Try to appear as non-threatening as possible."],
        scores: { guanYin: 1, buddha: 2, changEr: 2, erLang: 1, nezha: 1, wukong: 2, guanGong: 2, caiShenYe: 1 }
    },
    { 
        question: "Before you can act, you realise that your surroundings look different. It appears you're in some kind of a ancient kingdom. You're thinking:",
        options: ["Fuck, I must be dead. Why does heaven look like this?", "This is a hallucination, I must've hit my head pretty hard."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "In the midst of your thoughts, the biggest frog suddenly croaks to the others that the prophecy has come true: a weird-looking immortal frog has come to help them win their war against the flies! How do you react?",
        options: ["Protest the war and take issue about the weird-looking comment.", "Agree and start boasting about how you can take on any fly."],
        scores: { guanYin: 2, buddha: 2, changEr: 2, erLang: 2, nezha: 1, wukong: 1, guanGong: 1, caiShenYe: 1 }
    },
    { 
        question: "The big frog introduces himself as Frog-derick, the Frog General. He escorts you to the war room asks how you can contribute to their efforts. How do you respond?",
        options: ["I wanna throw hands. Point me to the flies", "I can help in other ways. I know CPR."],
        scores: { guanYin: 1, buddha: 2, changEr: 1, erLang: 2, nezha: 1, wukong: 2, guanGong: 1, caiShenYe: 2 }
    },
    { 
        question: "Before sending you out to the battlefield, Frog-derick wants equip you with a weapon so you can defend yourself. Which weapon do you pick?",
        options: ["The insect repellant, so the flies keep away", "The electric fly swatter so you go on the offense."],
        scores: { guanYin: 1, buddha: 1, changEr: 1, erLang: 1, nezha: 2, wukong: 2, guanGong: 2, caiShenYe: 2 }
    },
    { 
        question: "As you enter the battlefield, the Lord of the Flies sese you and immediately surrenders due to your gigantic size. With the war won, Frog-derick grants you a wish as a reward. What do you want most?",
        options: ["A magic bag that always has what you need", "An umbrella that doubles as a sword when you need it."],
        scores: { guanYin: 2, buddha: 2, changEr: 2, erLang: 2, nezha: 1, wukong: 1, guanGong: 1, caiShenYe: 1 }
    },
    { 
        question: "You celebrate with your frog buddies, but during the festivities you drink a bit too much and fall asleep. When you wake up, you find yourself back at the longkang and no frogs in sight. Your head hurts, but what could be the reason?",
        options: ["Must have hit my head after falling and had a dream while knocked out.", "I drank too much at the frog party and I'm having a terrible hangover."],
        scores: { guanYin: 2, buddha: 1, changEr: 1, erLang: 2, nezha: 2, wukong: 1, guanGong: 1, caiShenYe: 2 }
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
