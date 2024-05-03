const quizData = [
    {
        question: "Как называется первый рыбный ресторан в Тюмени?",
        a: "Море гриль",
        b: "Посейдон",
        c: "Рыбная лагуна",
        correct: "b",
    },
    {
        question: "Проект какого тюменского здания завоевало золотую медаль на выставке в Париже?",
        a: "Здание Тюменского Драматического театра",
        b: "Здание Правительства Тюменской области",
        c: "Здание Тюменского государственного архитектурно-строительного университета",
        correct: "c",
    },
    {
        question: "На каком месте предположительно располагалась крепость Тюмень?",
        a: "В дельте реки Терек, вероятно, в устье реки-протоки Тюменки",
        b: "На месте здания Правительства Тюменской области",
        c: "На месте нынешней набережной, по всей ее продолжительности",
        correct: "a",
    },
    {
        question: "Почему Тюменский драматический театр получил название “большой”?",
        a: "По высоте Театрального здания",
        b: "По количеству спектаклей в театре",
        c: "По площади Театрального здания",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}

function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;

        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `<h2>Вы правильно ответили на ${score}/${quizData.length} вопросов</h2>
            <button onclick="location.reload()">ПРОЙТИ ЗАНОВО</button>
            `;
        }
    }
});
