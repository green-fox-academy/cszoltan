'use strict';
let http = new XMLHttpRequest();
let scoreNumber = 0;

let clearClick = () => {
  let buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.disabled = true;
  });
};

let getQuestion = () => {
  http.open('GET', 'http://localhost:3000/game', true);
  http.onload = () => {
    let response = JSON.parse(http.responseText);
    let container = document.querySelector('.container');
    container.innerHTML = '';
    let question = document.createElement('div');
    question.classList.add('question');
    let score = document.createElement('div');
    let quiz = document.createElement('div');
    quiz.classList.add('quiz');
    score.classList.add('score');
    score.innerHTML = `Score: ${scoreNumber}`;
    question.innerHTML = response.question;
    container.appendChild(score);
    quiz.appendChild(question);
    for (let i = 0; i < 4; i++) {
      let button = document.createElement('button');
      button.innerHTML = response.answers[i].answer;
      button.addEventListener('click', (event) => {
        if (response.answers[i].is_correct == 1) {
          button.classList.add('right');
          scoreNumber++;
        } else {
          button.classList.add('wrong');
          scoreNumber--;
        }
        clearClick();
        setTimeout(getQuestion, 3000);
      });
      quiz.appendChild(button);
    }
    container.appendChild(quiz);
  }
  http.send();
}

getQuestion();