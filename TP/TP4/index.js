const quizData = [
    {
        question: "Quel est le meilleur langage de Programation en 2022?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "Quelle est la capitale de le France?",
        a: "Paris",
        b: "Lyon",
        c: "Marseille",
        d: "Toulouse",
        correct: "a",
    },
    {
        question: "Laquelle de ces années est bisextile?",
        a: "2022",
        b: "2020",
        c: "2019",
        d: "2018",
        correct: "b",
    },
    {
        question: "Ou se situe Sonatel Academy",
        a: "Dakar",
        b: "Ziguinchor",
        c: "Thies",
        d: "Matam",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Vous avez répondu ${score}/${quizData.length} questions correctement</h2>

           <button onclick="location.reload()">Reload</button>
           `
           
       }
    }
})