const questions = [
    {
        question: "Quel ingrédient est essentiel pour une ratatouille ?",
        options: ["Tomate", "Banane", "Poulet", "Pomme de terre"],
        correct: 0
    },
    {
        question: "Quel type de cuisine utilise principalement du riz ?",
        options: ["Italienne", "Japonaise", "Mexicaine", "Indienne"],
        correct: 1
    },
    {
        question: "Quelle épice est utilisée dans le curry ?",
        options: ["Cumin", "Cannelle", "Piment", "Safran"],
        correct: 0
    },
    {
        question: "Quel ingrédient est la base du guacamole ?",
        options: ["Avocat", "Tomate", "Concombre", "Poivron"],
        correct: 0
    },
    {
        question: "Quel plat est typique de la cuisine italienne ?",
        options: ["Sushi", "Tacos", "Pizza", "Couscous"],
        correct: 2
    },
    {
        question: "Quelle céréale est utilisée pour faire du couscous ?",
        options: ["Blé", "Riz", "Maïs", "Avoine"],
        correct: 0
    },
    {
        question: "Quel fruit est connu pour être riche en vitamine C ?",
        options: ["Pomme", "Orange", "Banane", "Raisin"],
        correct: 1
    },
    {
        question: "Quelle herbe est utilisée dans le pesto ?",
        options: ["Menthe", "Persil", "Coriandre", "Basilic"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionButtons = document.querySelectorAll('.option-btn');
const nextButton = document.getElementById('next-btn');
const scoreElement = document.getElementById('score');
const totalElement = document.getElementById('total');
const resultContainer = document.getElementById('result-container');

function showQuestion() {
    const question = questions[currentQuestion];
    questionElement.innerText = question.question;
    optionButtons.forEach((button, index) => {
        button.innerText = question.options[index];
        button.onclick = () => selectAnswer(index);
        button.disabled = false;
        button.style.backgroundColor = '#8B4513'; // Réinitialiser la couleur après chaque question
    });
    nextButton.style.display = 'none';
}

function selectAnswer(index) {
    const isCorrect = index === questions[currentQuestion].correct;
    optionButtons.forEach(button => button.disabled = true); // Désactiver tous les boutons après une sélection
    if (isCorrect) {
        optionButtons[index].style.backgroundColor = '#66BB6A';
        score++;
    } else {
        optionButtons[index].style.backgroundColor = '#EF5350';
        optionButtons[questions[currentQuestion].correct].style.backgroundColor = '#66BB6A';
    }
    nextButton.style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.querySelector('.quiz-box').style.display = 'none';
    resultContainer.style.display = 'block';
    scoreElement.innerText = score;
    totalElement.innerText = questions.length;

    let emoji = '';
    let message = '';

    if (score === questions.length) {
        emoji = '🎉';
        message = 'Excellent travail!';
    } else if (score > questions.length / 2) {
        emoji = '😊';
        message = 'Bien joué!';
    } else if (score > 0) {
        emoji = '😐';
        message = 'Peut mieux faire!';
    } else {
        emoji = '😞';
        message = 'Essaye encore!';
    }

    const emojiElement = document.createElement('div');
    emojiElement.style.display = 'flex';
    emojiElement.style.alignItems = 'center';
    emojiElement.style.justifyContent = 'center';
    emojiElement.style.fontSize = '2rem';
    emojiElement.style.marginTop = '1rem';
    
    // Texte marron avec emoji à droite
    emojiElement.innerHTML = `<span style="color: #8B4513; margin-right: 10px;">${message}</span> <span>${emoji}</span>`;
    
    // Ajouter l'emoji et le message avant le bouton recommencer
    resultContainer.insertBefore(emojiElement, document.getElementById('restart-btn'));
}


function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.querySelector('.quiz-box').style.display = 'block';
    resultContainer.style.display = 'none';
    resultContainer.innerHTML = `
        <h2>Votre score : <span id="score">0</span> / <span id="total">0</span></h2>
        <button id="restart-btn" onclick="restartQuiz()">Recommencer</button>
    `;
    showQuestion();
}

showQuestion();
