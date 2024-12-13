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

let state = {
    numPlayers: 0,
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

const playerColors = ['player1', 'player2', 'player3', 'player4'];

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
const timerBar = document.getElementById('timer-bar');
const resultsList = document.getElementById('results-list');
const restartBtn = document.getElementById('restart-btn');
const reviewBtn = document.getElementById('review-btn');
const reviewContainer = document.getElementById('review-container');
const backToEndBtn = document.getElementById('back-to-end');

function initPlayers() {
    state.players = [];
    state.scores = [];
    for (let i = 1; i <= state.numPlayers; i++) {
        state.players.push(`Player ${i}`);
        state.scores.push(0);
    }
}

playerButtons.forEach(button => {
    button.addEventListener('click', () => {
        state.numPlayers = parseInt(button.getAttribute('data-player'));
        numPlayersSpan.textContent = state.numPlayers;
        playerButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        toSubjectBtn.disabled = false;
    });
});

subjectButtons.forEach(button => {
    button.addEventListener('click', () => {
        state.subject = button.getAttribute('data-subject');
        subjectButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        document.getElementById('difficulty-selection').style.display = 'flex';
        difficultyButtons.forEach(btn => btn.classList.remove('selected'));
        toGameBtn.disabled = true;
    });
});

difficultyButtons.forEach(button => {
    button.addEventListener('click', () => {
        state.numQuestions = parseInt(button.getAttribute('data-difficulty'));
        difficultyButtons.forEach(btn => btn.classList.remove('selected'));
        button.classList.add('selected');
        toGameBtn.disabled = false;
    });
});

toSubjectBtn.addEventListener('click', () => {
    if (state.numPlayers >= 1 && state.numPlayers <= 4) {
        initPlayers();
        switchScreen('select-subject');
    } else {
        alert("Please select between 1 to 4 players.");
    }
});

backToPlayersBtn.addEventListener('click', () => {
    switchScreen('select-players');
    subjectButtons.forEach(btn => btn.classList.remove('selected'));
    difficultyButtons.forEach(btn => btn.classList.remove('selected'));
    document.getElementById('difficulty-selection').style.display = 'none';
    toGameBtn.disabled = true;
});

toGameBtn.addEventListener('click', () => {
    if (!state.subject) {
        alert("Please select a subject.");
        return;
    }
    if (!state.numQuestions) {
        alert("Please select the number of questions.");
        return;
    }
    prepareQuestions();
    switchScreen('game-screen');
    loadNextQuestion();
});

submitAnswerBtn.addEventListener('click', () => {
    submitAnswer();
});

restartBtn.addEventListener('click', () => {
    resetGame();
    switchScreen('select-players');
});

reviewBtn.addEventListener('click', () => {
    displayReview();
    switchScreen('review-screen');
});

backToEndBtn.addEventListener('click', () => {
    switchScreen('end-screen');
});

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

function prepareQuestions() {
    state.questions = [];
    state.answers = [];
    const selectedSubject = state.subject;
    let availableQuestions = [];

    if (selectedSubject === 'Mixed') {
        for (let key in gameData) {
            availableQuestions = availableQuestions.concat(gameData[key]);
        }
    } else {
        availableQuestions = gameData[selectedSubject];
    }

    availableQuestions = shuffleArray(availableQuestions);

    const totalQuestions = state.numPlayers * state.numQuestions;
    for (let i = 0; i < totalQuestions; i++) {
        const question = availableQuestions[i % availableQuestions.length];
        state.questions.push(question);
        state.answers.push({
            player: `Player ${(i % state.numPlayers) + 1}`,
            question: question.question,
            selected: null,
            correct: question.answer,
            submitted: false
        });
    }

    state.currentPlayerIndex = 0;
    state.currentQuestionIndex = 0;
}

function shuffleArray(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array;
}

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
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#28a745';
    document.getElementById('timer').classList.remove('end');

    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.addEventListener('click', () => {
            const allOptions = document.querySelectorAll('.option-btn');
            allOptions.forEach(opt => opt.classList.remove('selected', 'player1', 'player2', 'player3', 'player4'));
            btn.classList.add('selected', playerColors[playerIdx]);
            state.answers[state.currentQuestionIndex].selected = index;
            submitAnswerBtn.disabled = false;
        });
        optionsDiv.appendChild(btn);
    });

    state.timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    state.timeLeft--;
    timerDisplay.textContent = state.timeLeft;
    const percentage = (state.timeLeft / 15) * 100;
    timerBar.style.width = `${percentage}%`;
    if (state.timeLeft <= 5) {
        timerBar.style.backgroundColor = '#dc3545';
    }
    if (state.timeLeft <= 0) {
        clearInterval(state.timer);
        document.getElementById('timer').classList.add('end');
        submitAnswer();
    }
}

function submitAnswer() {
    if (state.answers[state.currentQuestionIndex].submitted) {
        return;
    }

    clearInterval(state.timer);
    const selectedOption = state.answers[state.currentQuestionIndex].selected;
    const correctOption = state.answers[state.currentQuestionIndex].correct;
    const playerIdx = state.currentPlayerIndex;

    state.answers[state.currentQuestionIndex].submitted = true;

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

    if (selectedOption === correctOption) {
        state.scores[playerIdx] += 10;
    }

    setTimeout(() => {
        state.currentQuestionIndex++;
        state.currentPlayerIndex = (state.currentPlayerIndex + 1) % state.numPlayers;
        loadNextQuestion();
    }, 1000);
}

function endGame() {
    switchScreen('end-screen');
    displayResults();
}

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

    const resultItems = resultsList.querySelectorAll('li');
    resultItems.forEach((item, idx) => {
        if (state.scores[idx] === maxScore) {
            item.style.fontWeight = 'bold';
            item.style.color = '#28a745';
            item.textContent += ' - Winner!';
        }
    });
}

function resetGame() {
    state = {
        numPlayers: 0,
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
    playerButtons.forEach(btn => btn.classList.remove('selected'));
    subjectButtons.forEach(btn => btn.classList.remove('selected'));
    difficultyButtons.forEach(btn => btn.classList.remove('selected'));
    document.getElementById('difficulty-selection').style.display = 'none';
    toSubjectBtn.disabled = true;
    toGameBtn.disabled = true;
    numPlayersSpan.textContent = "None";
    currentPlayerName.textContent = "Player 1";
    currentPlayerName.className = `player-color player1`;
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#28a745';
    document.getElementById('timer').classList.remove('end');
}

function displayReview() {
    reviewContainer.innerHTML = '';
    state.answers.forEach((ans, idx) => {
        const reviewItem = document.createElement('div');
        reviewItem.classList.add('review-item');

        const playerP = document.createElement('p');
        const playerSpan = document.createElement('span');
        playerSpan.classList.add('player-color', playerColors[state.players.indexOf(ans.player)]);
        playerSpan.textContent = ans.player;
        playerP.appendChild(playerSpan);

        const questionP = document.createElement('p');
        const questionStrong = document.createElement('strong');
        questionStrong.textContent = 'Question: ';
        questionP.appendChild(questionStrong);
        questionP.appendChild(document.createTextNode(ans.question));

        const yourAnswerP = document.createElement('p');
        const yourAnswerStrong = document.createElement('strong');
        yourAnswerStrong.textContent = 'Your Answer: ';
        yourAnswerP.appendChild(yourAnswerStrong);

        const yourAnswerSpan = document.createElement('span');
        if (ans.selected !== null) {
            yourAnswerSpan.textContent = state.questions[idx].options[ans.selected] + (ans.selected === ans.correct ? ' (Correct)' : ' (Wrong)');
            yourAnswerSpan.classList.add(ans.selected === ans.correct ? 'correct-answer' : 'wrong-answer');
        } else {
            yourAnswerSpan.textContent = 'No Answer';
            yourAnswerSpan.classList.add('wrong-answer');
        }
        yourAnswerP.appendChild(yourAnswerSpan);

        const correctAnswerP = document.createElement('p');
        const correctAnswerStrong = document.createElement('strong');
        correctAnswerStrong.textContent = 'Correct Answer: ';
        correctAnswerP.appendChild(correctAnswerStrong);
        correctAnswerP.appendChild(document.createTextNode(state.questions[idx].options[ans.correct]));

        reviewItem.appendChild(playerP);
        reviewItem.appendChild(questionP);
        reviewItem.appendChild(yourAnswerP);
        reviewItem.appendChild(correctAnswerP);

        reviewContainer.appendChild(reviewItem);
    });
}

function initDefaults() {
    playerButtons.forEach(btn => btn.classList.remove('selected'));
    subjectButtons.forEach(btn => btn.classList.remove('selected'));
    difficultyButtons.forEach(btn => btn.classList.remove('selected'));
    document.getElementById('difficulty-selection').style.display = 'none';
    toSubjectBtn.disabled = true;
    toGameBtn.disabled = true;
    numPlayersSpan.textContent = "None";
    currentPlayerName.textContent = "Player 1";
    currentPlayerName.className = `player-color player1`;
    timerBar.style.width = '100%';
    timerBar.style.backgroundColor = '#28a745';
    document.getElementById('timer').classList.remove('end');
}

initDefaults();
