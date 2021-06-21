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
let gameover = false;

playbtn1.addEventListener('click', () =>{
  if (!gameover) {
    p1score++;
    
    if (p1score===winscore) {
      gameover = true;
      
    }
    play1Score.textContent=p1score;
  }
  
  });

  playbtn2.addEventListener('click', () =>{
    if (!gameover) {
      p2score++;
   
    if (p2score===winscore) {
      gameover = true;
      
    }
    play2Score.textContent=p2score;
    }
    
  });

