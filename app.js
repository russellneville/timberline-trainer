// ================================
// Timberline Trail Quiz Application
// ================================

// Quiz Data - Map ID to Run/Feature Name
const quizData = [
    { id: 'A', name: 'ILLUMINATION ROCK' },
    { id: 'B', name: 'SILCOX HUT' },
    { id: 'C', name: 'PHLOX POINT CABIN', altNames: ['PHLOX CABIN'] },
    { id: 'D', name: 'SALMON CANYON' },
    { id: 'E', name: 'WHITE RIVER' },
    { id: 'F', name: 'BIG ZIG ZAG' },
    { id: 'G', name: 'LITTLE ZIG ZAG' },
    { id: '1', name: 'Outer West' },
    { id: '2', name: 'Palmer lift', altNames: ['Palmer'] },
    { id: '3', name: 'Willis' },
    { id: '4', name: "Bean's Run", altNames: ['Beans Run', "Bean's"] },
    { id: '5', name: "Coffel's Run", altNames: ['Coffels Run', "Coffel's"] },
    { id: '6', name: "Kipp's Run", altNames: ['Kipps Run', "Kipp's"] },
    { id: '7', name: 'Magic Mile' },
    { id: '8', name: "Gordo's Mile", altNames: ['Gordos Mile', "Gordo's"] },
    { id: '9', name: 'Otto Lang' },
    { id: '10', name: 'Lodge Getback' },
    { id: '11', name: 'Spraypaint' },
    { id: '12', name: 'Kruser' },
    { id: '13', name: "Norm's", altNames: ['Norms'] },
    { id: '14', name: "Stormin' Normin Lift", altNames: ['Stormin Normin', 'Stormin Normin Lift'] },
    { id: '15', name: "Conway's", altNames: ['Conways'] },
    { id: '16', name: 'The Bonezone', altNames: ['Bonezone', 'Freestyle Terrain Gully'] },
    { id: '17', name: 'Blossom' },
    { id: '18', name: 'Paintbrush' },
    { id: '19', name: 'Glade' },
    { id: '20', name: 'Mustang Sally' },
    { id: '21', name: "Christine's Run", altNames: ['Christines Run', "Christine's"] },
    { id: '22', name: 'Thunder' },
    { id: '23', name: 'Lift Line' },
    { id: '24', name: 'Alpine Run', altNames: ['Alpine'] },
    { id: '25', name: 'West Leg Road' },
    { id: '26', name: "Nona's Bologna", altNames: ['Nonas Bologna', "Nona's"] },
    { id: '27', name: 'Jojami' },
    { id: '28', name: 'Jeff Flood Lift', altNames: ['Jeff Flood'] },
    { id: '29', name: 'Phlox' },
    { id: '30', name: 'Main Run Pucci', altNames: ['Main Run', 'Pucci'] },
    { id: '31', name: 'Joszi' },
    { id: '32', name: 'Pucci Lift', altNames: ['Pucci'] },
    { id: '33', name: 'Bob Elmer' },
    { id: '34', name: "Wingle's Wiggle", altNames: ['Wingles Wiggle', "Wingle's"] },
    { id: '35', name: "Wy'East", altNames: ['WyEast', 'Wy East'] },
    { id: '36', name: 'Schoolyard' },
    { id: '37', name: "Bruno's Lift", altNames: ['Brunos Lift', "Bruno's"] },
    { id: '38', name: "Uncle Jon's Band", altNames: ['Uncle Jons Band', "Uncle Jon's"] },
    { id: '39', name: 'West Run' },
    { id: '40', name: "Molly's Run", altNames: ['Mollys Run', "Molly's"] },
    { id: '41', name: "Molly's Lift", altNames: ['Mollys Lift', "Molly's"] },
    { id: '42', name: "Vicky's Run", altNames: ['Vickys Run', "Vicky's"] },
    { id: '43', name: 'Back Way' },
    { id: '44', name: "Pete's Plunder", altNames: ['Petes Plunder', "Pete's"] },
    { id: '45', name: 'Brother Beau' },
    { id: '46', name: 'Waterline' },
    { id: '47', name: 'Cut Off' },
    { id: '48', name: 'West Pitch' },
    { id: '49', name: 'Huck Bowl' },
    { id: '50', name: 'Buzz Cut' },
    { id: '51', name: 'EZ Way' }
];

// Application State
let state = {
    questions: [],
    currentIndex: 0,
    answers: {},
    totalQuestions: 10
};

// DOM Elements
const elements = {
    // Screens
    startScreen: document.getElementById('start-screen'),
    quizScreen: document.getElementById('quiz-screen'),
    resultsScreen: document.getElementById('results-screen'),

    // Start screen
    questionCountInput: document.getElementById('question-count'),
    startBtn: document.getElementById('start-btn'),

    // Quiz screen
    questionNumber: document.getElementById('question-number'),
    progressFill: document.getElementById('progress-fill'),
    prevBtn: document.getElementById('prev-btn'),
    nextBtn: document.getElementById('next-btn'),
    scoreBtn: document.getElementById('score-btn'),
    answerInput: document.getElementById('answer-input'),
    featureName: document.getElementById('feature-name'),

    // Results screen
    resultsHeader: document.getElementById('results-header'),
    resultIcon: document.getElementById('result-icon'),
    resultTitle: document.getElementById('result-title'),
    resultSubtitle: document.getElementById('result-subtitle'),
    scoreText: document.getElementById('score-text'),
    scorePercent: document.getElementById('score-percent'),
    resultsList: document.getElementById('results-list'),
    retryBtn: document.getElementById('retry-btn'),
    celebrationContainer: document.getElementById('celebration-container'),

    // Reference buttons
    referenceBtn: document.getElementById('reference-btn'),
    quizReferenceBtn: document.getElementById('quiz-reference-btn'),
    resultsReferenceBtn: document.getElementById('results-reference-btn')
};

// ================================
// Utility Functions
// ================================

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function normalizeAnswer(answer) {
    return answer.toString().trim().toUpperCase();
}

function checkAnswer(userAnswer, correctId) {
    const normalized = normalizeAnswer(userAnswer);
    const normalizedCorrect = normalizeAnswer(correctId);
    return normalized === normalizedCorrect;
}

function showScreen(screenElement) {
    [elements.startScreen, elements.quizScreen, elements.resultsScreen].forEach(screen => {
        screen.classList.remove('active');
    });
    screenElement.classList.add('active');
}

// ================================
// Quiz Logic
// ================================

function initQuiz() {
    const count = parseInt(elements.questionCountInput.value) || 10;
    state.totalQuestions = Math.min(Math.max(count, 1), quizData.length);
    state.questions = shuffleArray(quizData).slice(0, state.totalQuestions);
    state.currentIndex = 0;
    state.answers = {};

    showScreen(elements.quizScreen);
    updateQuestion();
}

function updateQuestion() {
    const question = state.questions[state.currentIndex];
    const questionNum = state.currentIndex + 1;
    const total = state.totalQuestions;

    // Update progress
    elements.questionNumber.textContent = `Question ${questionNum} of ${total}`;
    elements.progressFill.style.width = `${(questionNum / total) * 100}%`;

    // Update question content
    elements.featureName.textContent = question.name;
    elements.answerInput.value = state.answers[state.currentIndex] || '';
    elements.answerInput.focus();

    // Update navigation buttons
    elements.prevBtn.disabled = state.currentIndex === 0;

    // Show/hide next vs score button
    if (state.currentIndex === state.totalQuestions - 1) {
        elements.nextBtn.classList.add('hidden');
        elements.scoreBtn.classList.remove('hidden');
    } else {
        elements.nextBtn.classList.remove('hidden');
        elements.scoreBtn.classList.add('hidden');
    }
}

function saveCurrentAnswer() {
    state.answers[state.currentIndex] = elements.answerInput.value;
}

function goToPrevQuestion() {
    if (state.currentIndex > 0) {
        saveCurrentAnswer();
        state.currentIndex--;
        updateQuestion();
    }
}

function goToNextQuestion() {
    if (state.currentIndex < state.totalQuestions - 1) {
        saveCurrentAnswer();
        state.currentIndex++;
        updateQuestion();
    }
}

function scoreQuiz() {
    saveCurrentAnswer();

    let correctCount = 0;
    const results = state.questions.map((question, index) => {
        const userAnswer = state.answers[index] || '';
        const isCorrect = checkAnswer(userAnswer, question.id);
        if (isCorrect) correctCount++;

        return {
            question,
            userAnswer,
            isCorrect
        };
    });

    const percentage = Math.round((correctCount / state.totalQuestions) * 100);
    const passed = percentage >= 80;

    displayResults(results, correctCount, percentage, passed);
}

// ================================
// Results Display
// ================================

function displayResults(results, correctCount, percentage, passed) {
    showScreen(elements.resultsScreen);

    // Update header styling
    elements.resultsHeader.className = `results-header ${passed ? 'passed' : 'failed'}`;

    // Update result info
    if (passed) {
        elements.resultIcon.textContent = '🎉';
        elements.resultTitle.textContent = 'Congratulations!';
        elements.resultSubtitle.textContent = 'You passed the quiz!';
        triggerCelebration();
    } else {
        elements.resultIcon.textContent = '😞';
        elements.resultTitle.textContent = 'Not Quite...';
        elements.resultSubtitle.textContent = 'You need 80% to pass. Try again!';
    }

    elements.scoreText.textContent = `${correctCount}/${state.totalQuestions}`;
    elements.scorePercent.textContent = `(${percentage}%)`;

    // Build results list
    elements.resultsList.innerHTML = results.map(result => {
        const mark = result.isCorrect ? '✓' : '✗';
        const markClass = result.isCorrect ? 'correct' : 'incorrect';
        const displayAnswer = result.userAnswer || '(blank)';
        const correction = !result.isCorrect
            ? `<span class="result-correction">→ ${result.question.id}</span>`
            : '';

        return `
            <li class="${markClass}">
                <span class="result-mark ${markClass}">${mark}</span>
                <span class="result-answer">${displayAnswer}</span>
                <span class="result-feature">${result.question.name}</span>
                ${correction}
            </li>
        `;
    }).join('');
}

// ================================
// Celebration Effects
// ================================

function triggerCelebration() {
    elements.celebrationContainer.innerHTML = '';

    // Randomly choose celebration type
    const celebrationType = Math.random();

    if (celebrationType < 0.5) {
        createConfetti();
    } else {
        createBalloons();
    }
}

function createConfetti() {
    const colors = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#3b82f6', '#8b5cf6', '#ec4899'];
    const shapes = ['square', 'circle'];

    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 2;
        const size = 5 + Math.random() * 10;

        confetti.style.cssText = `
            left: ${left}%;
            background: ${color};
            width: ${size}px;
            height: ${size}px;
            border-radius: ${shape === 'circle' ? '50%' : '2px'};
            animation-delay: ${delay}s;
        `;

        elements.celebrationContainer.appendChild(confetti);
    }
}

function createBalloons() {
    const balloons = ['🎈', '🎉', '🎊', '⭐', '✨'];

    for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';

        const emoji = balloons[Math.floor(Math.random() * balloons.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 2;

        balloon.textContent = emoji;
        balloon.style.cssText = `
            left: ${left}%;
            animation-delay: ${delay}s;
        `;

        elements.celebrationContainer.appendChild(balloon);
    }
}

// ================================
// Reference Button Handling
// ================================

const mainMapImage = document.querySelector('.map-image');
const testMapSrc = 'timberline-map-test.png';
const labeledMapSrc = 'timberline_winter_trail_map.png';

function openReferenceInNewWindow() {
    window.open('map-viewer.html', '_blank', 'width=1200,height=900');
}

function showLabeledMap() {
    if (mainMapImage) {
        mainMapImage.src = labeledMapSrc;
    }
}

function showTestMap() {
    if (mainMapImage) {
        mainMapImage.src = testMapSrc;
    }
}

// Add hover listeners to all reference buttons
const allReferenceButtons = [elements.referenceBtn, elements.quizReferenceBtn, elements.resultsReferenceBtn];
allReferenceButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('mouseenter', showLabeledMap);
        btn.addEventListener('mouseleave', showTestMap);
    }
});

// ================================
// Event Listeners
// ================================

// Start screen
elements.startBtn.addEventListener('click', initQuiz);
elements.questionCountInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') initQuiz();
});

// Quiz navigation
elements.prevBtn.addEventListener('click', goToPrevQuestion);
elements.nextBtn.addEventListener('click', goToNextQuestion);
elements.scoreBtn.addEventListener('click', scoreQuiz);

// Keyboard navigation
elements.answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        if (state.currentIndex === state.totalQuestions - 1) {
            scoreQuiz();
        } else {
            goToNextQuestion();
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (!elements.quizScreen.classList.contains('active')) return;

    if (e.key === 'ArrowLeft' && state.currentIndex > 0) {
        goToPrevQuestion();
    } else if (e.key === 'ArrowRight' && state.currentIndex < state.totalQuestions - 1) {
        goToNextQuestion();
    }
});

// Results screen
elements.retryBtn.addEventListener('click', () => {
    elements.celebrationContainer.innerHTML = '';
    showScreen(elements.startScreen);
});

// Reference buttons - open in new window on click
elements.referenceBtn.addEventListener('click', openReferenceInNewWindow);
elements.quizReferenceBtn.addEventListener('click', openReferenceInNewWindow);
elements.resultsReferenceBtn.addEventListener('click', openReferenceInNewWindow);

// Initialize with focus on question count
elements.questionCountInput.focus();
