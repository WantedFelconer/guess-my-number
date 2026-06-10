'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let inputNum;
let score = 20;
document.querySelector('.number').textContent = randomNum;

document.querySelector('.check').addEventListener('click', function () {
  inputNum = document.querySelector('.guess').value;
  if (inputNum == randomNum) {
    document.querySelector('.message').textContent = '-_- Congrats You Won!';
  } else if (inputNum != randomNum) {
    document.querySelector('.message').textContent = '-_- Guess again';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
