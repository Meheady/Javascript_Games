const play1Score=document.getElementById('playerscore1');
const play2Score=document.getElementById('playscore2');
const wscoredisply = document.querySelector('p span');
const inputscore = document.getElementById('inputscore');


const playbtn1 = document.getElementById('PlayerOne');
const playbtn2 = document.getElementById('PlayerTw');
const resetbtn = document.getElementById('reset');
let  p1score = 0;
let p2score = 0;
let winscore = 5;

playbtn1.addEventListener('click', () =>{
    p1score = p1score +1;
    play1Score.textContent=p1score;
    if (p1score===winscore) {
      playbtn1.setAttribute('disabled','disabled');
      playbtn2.setAttribute('disabled','disabled');
    }
  });

  playbtn2.addEventListener('click', () =>{
    p2score = p2score +1;
    play2Score.textContent=p2score;
    if (p2score===winscore) {
      playbtn1.setAttribute('disabled','disabled');
      playbtn2.setAttribute('disabled','disabled');
    }
  });

