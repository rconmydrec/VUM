// Game Data
const gameData = {
    HTML: [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "Home Tool Markup Language",
                "Hyperlinks and Text Markup Language",
                "Hyperlinking Text Marking Language"
            ],
            answer: 0
        },
        {
            question: "Where is the correct place to insert a JavaScript?",
            options: [
                "Both the <head> section and the <body> section are correct",
                "The <body> section",
                "The <head> section",
                "None of the above"
            ],
            answer: 0
        },
        {
            question: "Choose the correct HTML element for the largest heading:",
            options: [
                "<heading>",
                "<h6>",
                "<head>",
                "<h1>"
            ],
            answer: 3
        },
        {
            question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
            options: [
                "alt",
                "src",
                "title",
                "longdesc"
            ],
            answer: 0
        },
        {
            question: "How can you make a numbered list?",
            options: [
                "<ol>",
                "<ul>",
                "<dl>",
                "<list>"
            ],
            answer: 0
        },
        {
            question: "Which HTML element defines the title of a document?",
            options: [
                "<meta>",
                "<title>",
                "<head>",
                "<header>"
            ],
            answer: 1
        },
        {
            question: "Which HTML element is used to specify a footer for a document or section?",
            options: [
                "<footer>",
                "<section>",
                "<bottom>",
                "<aside>"
            ],
            answer: 0
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            options: [
                "<break>",
                "<lb>",
                "<br>",
                "<brk>"
            ],
            answer: 2
        }
    ],
    CSS: [
        {
            question: "What does CSS stand for?",
            options: [
                "Colorful Style Sheets",
                "Creative Style Sheets",
                "Cascading Style Sheets",
                "Computer Style Sheets"
            ],
            answer: 2
        },
        {
            question: "Which property is used to change the background color?",
            options: [
                "color",
                "bgcolor",
                "background-color",
                "backgroundColor"
            ],
            answer: 2
        },
        {
            question: "How do you add a background color for all <h1> elements?",
            options: [
                "h1 {background-color:#FFFFFF;}",
                "h1.all {background-color:#FFFFFF;}",
                "all.h1 {background-color:#FFFFFF;}",
                "h1:all {background-color:#FFFFFF;}"
            ],
            answer: 0
        },
        {
            question: "Which CSS property controls the text size?",
            options: [
                "font-size",
                "text-size",
                "font-style",
                "text-style"
            ],
            answer: 0
        },
        {
            question: "How do you select an element with id 'demo'?",
            options: [
                ".demo",
                "#demo",
                "*demo",
                "demo"
            ],
            answer: 1
        },
        {
            question: "Which property is used to change the font of an element?",
            options: [
                "font-style",
                "font-family",
                "text-style",
                "text-family"
            ],
            answer: 1
        },
        {
            question: "How do you make each word in a text start with a capital letter?",
            options: [
                "text-transform: capitalize;",
                "text-style: capitalize;",
                "transform: capitalize;",
                "style: capitalize;"
            ],
            answer: 0
        },
        {
            question: "Which CSS property is used to change the left margin of an element?",
            options: [
                "padding-left",
                "margin-left",
                "indent",
                "spacing-left"
            ],
            answer: 1
        }
    ],
    JS: [
        {
            question: "Inside which HTML element do we put the JavaScript?",
            options: [
                "<js>",
                "<scripting>",
                "<script>",
                "<javascript>"
            ],
            answer: 2
        },
        {
            question: "How do you write 'Hello World' in an alert box?",
            options: [
                "msgBox('Hello World');",
                "alertBox('Hello World');",
                "msg('Hello World');",
                "alert('Hello World');"
            ],
            answer: 3
        },
        {
            question: "How do you create a function in JavaScript?",
            options: [
                "function = myFunction()",
                "function myFunction()",
                "create myFunction()",
                "def myFunction()"
            ],
            answer: 1
        },
        {
            question: "How do you call a function named 'myFunction'?",
            options: [
                "call function myFunction()",
                "call myFunction()",
                "myFunction()",
                "Call.myFunction()"
            ],
            answer: 2
        },
        {
            question: "How to write an IF statement in JavaScript?",
            options: [
                "if i == 5 then",
                "if (i == 5)",
                "if i = 5",
                "if i = 5 then"
            ],
            answer: 1
        },
        {
            question: "How does a FOR loop start?",
            options: [
                "for (i = 0; i <= 5; i++)",
                "for i = 1 to 5",
                "for (i <= 5; i++)",
                "for (i = 0; i <= 5)"
            ],
            answer: 0
        },
        {
            question: "How do you add a comment in JavaScript?",
            options: [
                "<!--This is a comment-->",
                "//This is a comment",
                "'This is a comment",
                "**This is a comment**"
            ],
            answer: 1
        },
        {
            question: "Which operator is used to assign a value to a variable?",
            options: [
                "-",
                "*",
                "=",
                "x"
            ],
            answer: 2
        }
    ],
    Mixed: [
        {
            question: "Which language is used for styling web pages?",
            options: [
                "HTML",
                "JQuery",
                "CSS",
                "XML"
            ],
            answer: 2
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            options: [
                "font",
                "styles",
                "class",
                "style"
            ],
            answer: 3
        },
        {
            question: "Inside which HTML element do we put the JavaScript?",
            options: [
                "<js>",
                "<scripting>",
                "<script>",
                "<javascript>"
            ],
            answer: 2
        },
        {
            question: "What does DOM stand for in web development?",
            options: [
                "Document Object Model",
                "Digital Object Management",
                "Data Object Model",
                "Document Operations Manager"
            ],
            answer: 0
        },
        {
            question: "Which HTML tag is used to define an unordered list?",
            options: [
                "<ul>",
                "<ol>",
                "<li>",
                "<list>"
            ],
            answer: 0
        },
        {
            question: "How do you insert a comment in CSS?",
            options: [
                "// This is a comment",
                "/* This is a comment */",
                "<!-- This is a comment -->",
                "' This is a comment"
            ],
            answer: 1
        },
        {
            question: "Which property is used in CSS to change the text color of an element?",
            options: [
                "fgcolor",
                "color",
                "text-color",
                "font-color"
            ],
            answer: 1
        },
        {
            question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
            options: [
                "document.getElementByName('demo').innerHTML = 'Hello World!';",
                "document.getElementById('demo').innerHTML = 'Hello World!';",
                "#demo.innerHTML = 'Hello World!';",
                "document.getElement('p').innerHTML = 'Hello World!';"
            ],
            answer: 1
        }
    ]
};

// Game State
let state = {
    numPlayers: 0, // Set to 0 initially
    players: [],
    subject: '',
    numQuestions: 0,
    currentPlayerIndex: 0,
    currentQuestionIndex: 0,
    questions: [],
    scores: [],
    answers: [], // To store player answers for review
    timer: null,
    timeLeft: 15
};

// Player Colors
const playerColors = ['player1', 'player2', 'player3', 'player4'];

// DOM Elements
const screens = {
    'select-players': document.getElementById('select-players'),
    'select-subject': document.getElementById('select-subject'),
    'game-screen': document.getElementById('game-screen'),
    'end-screen': document.getElementById('end-screen'),
    'review-screen': document.getElementById('review-screen')
};

const playerButtons = document.querySelectorAll('.player-btn');
const numPlayersSpan = document.getElementById('num-players');
const toSubjectBtn = document.getElementById('to-subject-btn');
const subjectButtons = document.querySelectorAll('.subject-btn');
const difficultyButtons = document.querySelectorAll('.difficulty-btn');
const backToPlayersBtn = document.getElementById('back-to-players');
const toGameBtn = document.getElementById('to-game-btn');
const currentPlayerName = document.getElementById('current-player-name');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');
const submitAnswerBtn = document.getElementById('submit-answer');
const timerDisplay = document.getElementById('time-left');
const resultsList = document.getElementById('results-list');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const reviewContainer = document.getElementById('review-container');
const backToEndBtn = document.getElementById('back-to-end');

// Initialize Players
function initPlayers() {
    state.players = [];
    state.scores = [];
    for (let i = 1; i <= state.numPlayers; i++) {
        state.players.push(`Player ${i}`);
        state.scores.push(0);
    }
}

// Event Listeners for Player Selection
playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        state.numPlayers = parseInt(button.getAttribute('data-player'));
        numPlayersSpan.textContent = state.numPlayers;
        // Highlight selected button
        playerButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        // Enable Next button after selection
        toSubjectBtn.disabled = false;
    });
});

// Event Listeners for Subject Selection
subjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        state.subject = button.getAttribute('data-subject');
        // Highlight selected button
        subjectButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        // Show difficulty selection
        document.getElementById('difficulty-selection').style.display = 'flex';
        // Reset previous difficulty selection
        difficultyButtons.forEach(btn => btn.classList.remove('selected'));
        // Disable Start Game button until difficulty is selected
        toGameBtn.disabled = true;
    });
});

// Event Listeners for Difficulty Selection
difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        state.numQuestions = parseInt(button.getAttribute('data-difficulty'));
        // Highlight selected button
        difficultyButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        // Enable Start Game button after selection
        toGameBtn.disabled = false;
    });
});

// Navigate to Subject Selection
toSubjectBtn.addEventListener('click', () => {
    if (state.numPlayers >= 1 && state.numPlayers <= 4) {
        initPlayers();
        switchScreen('select-subject');
    } else {
        alert("Please select between 1 to 4 players.");
    }
});

// Navigate Back to Players Selection
backToPlayersBtn.addEventListener('click', () => {
    switchScreen('select-players');
    // Reset subject and difficulty selections
    subjectButtons.forEach(btn => btn.classList.remove('selected'));
    difficultyButtons.forEach(btn => btn.classList.remove('selected'));
    document.getElementById('difficulty-selection').style.display = 'none';
    // Disable Start Game button
    toGameBtn.disabled = true;
});

// Navigate to Game Screen
toGameBtn.addEventListener('click', () => {
    // Check if subject and number of questions are selected
    if (!state.subject) {
        alert("Please select a subject.");
        return;
    }
    if (!state.numQuestions) {
        alert("Please select the number of questions.");
        return;
    }
    // Initialize questions
    prepareQuestions();
    switchScreen('game-screen');
    loadNextQuestion();
});

// Submit Answer
submitAnswerBtn.addEventListener('click', () => {
    submitAnswer();
});

// Restart Game
restartBtn.addEventListener('click', () => {
    resetGame();
    switchScreen('select-players');
});

// Review Answers
reviewBtn.addEventListener('click', () => {
    displayReview();
    switchScreen('review-screen');
});

// Back to End Screen from Review
backToEndBtn.addEventListener('click', () => {
    switchScreen('end-screen');
});

// Switch Screen Function
function switchScreen(screen) {
    for (let key in screens) {
        screens[key].classList.remove('active');
    }
    if (screens[screen]) {
        screens[screen].classList.add('active');
    } else {
        console.error(`Screen "${screen}" does not exist.`);
    }
}

// Prepare Questions based on subject and number
function prepareQuestions() {
    state.questions = [];
    state.answers = [];
    const selectedSubject = state.subject;
    let availableQuestions = [];

    if (selectedSubject === 'Mixed') {
        // Combine all subjects
        for (let key in gameData) {
            availableQuestions = availableQuestions.concat(gameData[key]);
        }
    } else {
        availableQuestions = gameData[selectedSubject];
    }

    // Shuffle availableQuestions
    availableQuestions = shuffleArray(availableQuestions);

    // Select required number of questions per player
    const totalQuestions = state.numPlayers * state.numQuestions;
    for (let i = 0; i < totalQuestions; i++) {
        const question = availableQuestions[i % availableQuestions.length];
        state.questions.push(question);
        state.answers.push({
            player: `Player ${(i % state.numPlayers) + 1}`,
            question: question.question,
            selected: null,
            correct: question.answer,
            submitted: false // Added to track if answer has been submitted
        });
    }

    state.currentPlayerIndex = 0;
    state.currentQuestionIndex = 0;
}

// Shuffle Array Utility
function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex !== 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

// Load Next Question
function loadNextQuestion() {
    if (state.currentQuestionIndex >= state.questions.length) {
        endGame();
        return;
    }

    const playerIdx = state.currentPlayerIndex;
    const playerName = state.players[playerIdx];
    currentPlayerName.textContent = playerName;
    currentPlayerName.className = `player-color ${playerColors[playerIdx]}`;

    const question = state.questions[state.currentQuestionIndex];
    questionText.textContent = question.question;
    optionsDiv.innerHTML = '';
    submitAnswerBtn.disabled = true;
    clearInterval(state.timer);
    state.timeLeft = 15;
    timerDisplay.textContent = state.timeLeft;

    // Create Option Buttons
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => {
            // Deselect other options
            const allOptions = document.querySelectorAll('.option-btn');
            allOptions.forEach(opt => opt.classList.remove('selected', 'player1', 'player2', 'player3', 'player4'));
            // Select this option
            btn.classList.add('selected', playerColors[playerIdx]);
            // Store selected answer
            state.answers[state.currentQuestionIndex].selected = index;
            // Enable Submit Button
            submitAnswerBtn.disabled = false;
        });
        optionsDiv.appendChild(btn);
    });

    // Start Timer
    state.timer = setInterval(() => {
        state.timeLeft--;
        timerDisplay.textContent = state.timeLeft;
        if (state.timeLeft <= 0) {
            clearInterval(state.timer);
            submitAnswer();
        }
    }, 1000);
}

// Submit Answer Function
function submitAnswer() {
    // Check if already submitted
    if (state.answers[state.currentQuestionIndex].submitted) {
        return;
    }

    clearInterval(state.timer);
    const selectedOption = state.answers[state.currentQuestionIndex].selected;
    const correctOption = state.answers[state.currentQuestionIndex].correct;
    const playerIdx = state.currentPlayerIndex;

    // Mark as submitted
    state.answers[state.currentQuestionIndex].submitted = true;

    // Disable Submit button to prevent multiple submissions
    submitAnswerBtn.disabled = true;

    const optionButtons = document.querySelectorAll('.option-btn');
    optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === correctOption) {
            btn.classList.add('correct');
        }
        if (idx === selectedOption && selectedOption !== correctOption) {
            btn.classList.add('wrong');
        }
    });

    // Update Score
    if (selectedOption === correctOption) {
        state.scores[playerIdx] += 10;
    }

    // Move to next player and question after a short delay
    setTimeout(() => {
        state.currentQuestionIndex++;
        state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.numPlayers;
        loadNextQuestion();
    }, 1000);
}

// End Game Function
function endGame() {
    switchScreen('end-screen');
    displayResults();
}

// Display Results
function displayResults() {
    resultsList.innerHTML = '';
    const maxScore = Math.max(...state.scores);
    const winners = [];

    state.scores.forEach((score, idx) => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="player-color ${playerColors[idx]}">${state.players[idx]}</span>: ${score} points`;
        resultsList.appendChild(li);
        if (score === maxScore) {
            winners.push(state.players[idx]);
        }
    });

    // Highlight winners
    const resultItems = resultsList.querySelectorAll('li');
    resultItems.forEach((item, idx) => {
        if (state.scores[idx] === maxScore) {
            item.style.fontWeight = 'bold';
            item.style.color = '#28a745';
            item.textContent += ' - Winner!';
        }
    });
}

// Reset Game
function resetGame() {
    state = {
        numPlayers: 0, // Reset to 0
        players: [],
        subject: '',
        numQuestions: 0,
        currentPlayerIndex: 0,
        currentQuestionIndex: 0,
        questions: [],
        scores: [],
        answers: [],
        timer: null,
        timeLeft: 15
    };
    // Reset selections
    playerButtons.forEach(btn => btn.classList.remove('selected'));
    subjectButtons.forEach(btn => btn.classList.remove('selected'));
    difficultyButtons.forEach(btn => btn.classList.remove('selected'));
    // Hide difficulty selection
    document.getElementById('difficulty-selection').style.display = 'none';
    // Disable buttons
    toSubjectBtn.disabled = true;
    toGameBtn.disabled = true;
    // Reset selected players display
    numPlayersSpan.textContent = "None";
    // Ensure no default selections
    // No default selections are made
}

// Display Review
function displayReview() {
    reviewContainer.innerHTML = '';
    state.answers.forEach((ans, idx) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        // Получаем класс цвета игрока, если он существует
        const playerIndex = state.players.indexOf(ans.player);
        const playerColorClass = playerIndex !== -1 ? playerColors[playerIndex] : '';

        // Проверяем, правильный ли ответ
        const isCorrect = ans.selected === ans.correct;

        // Получаем текст выбранного ответа или устанавливаем "No Answer"
        const selectedOptionText = (ans.selected !== null && state.questions[idx].options[ans.selected] !== undefined)
            ? state.questions[idx].options[ans.selected]
            : 'No Answer';

        // Получаем текст правильного ответа или устанавливаем "N/A"
        const correctOptionText = (ans.correct !== null && state.questions[idx].options[ans.correct] !== undefined)
            ? state.questions[idx].options[ans.correct]
            : 'N/A';

        // Определяем статус ответа
        let answerStatus = '';
        if (ans.selected === null || ans.selected === undefined) {
            answerStatus = '';
        } else if (isCorrect) {
            answerStatus = '(Correct)';
        } else {
            answerStatus = '(Wrong)';
        }

        // Формируем HTML для каждого обзора ответа
        reviewItem.innerHTML = `
            <p><span class="player-color ${playerColorClass}">${ans.player}</span></p>
            <p><strong>Question:</strong> ${ans.question}</p>
            <p><strong>Your Answer:</strong> <span class="${isCorrect ? 'correct-answer' : 'wrong-answer'}">${selectedOptionText} ${answerStatus}</span></p>
            <p><strong>Correct Answer:</strong> ${correctOptionText}</p>
        `;
        reviewContainer.appendChild(reviewItem);
    });
}

// Initialize Default Selections
function initDefaults() {
    // No default selections are made
    // Ensure that all buttons are in their default state
    playerButtons.forEach(btn => btn.classList.remove('selected'));
    subjectButtons.forEach(btn => btn.classList.remove('selected'));
    difficultyButtons.forEach(btn => btn.classList.remove('selected'));
    // Hide difficulty selection initially
    document.getElementById('difficulty-selection').style.display = 'none';
    // Disable Next and Start Game buttons initially
    toSubjectBtn.disabled = true;
    toGameBtn.disabled = true;
    // Reset selected players display
    numPlayersSpan.textContent = "None";
}

// Start
initDefaults();
