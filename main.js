let play1Score=document.getElementById('playerscore1');
let play2Score=document.getElementById('playscore2');
let wscoredisply = document.querySelector('p span');
let inputscore = document.getElementById('inputscore');


const playbtn1 = document.getElementById('PlayerOne');
const playbtn2 = document.getElementById('PlayerTw');
const resetbtn = document.getElementById('reset');
let  p1score = 0;
let p2score = 0;
let winscore = 0;
let gameover = false;

playbtn1.addEventListener('click', () =>{
  if (!gameover) {
    p1score++;
    
    winner(p1score,winscore)
    play1Score.textContent=p1score;
  }
  inputscore.value='';
  
  });

  playbtn2.addEventListener('click', () =>{
    if (!gameover) {
      p2score++;
      winner(p2score,winscore)
  
    play2Score.textContent=p2score;
    }
    inputscore.value='';
  });

  function winner(oldscore,winscore) {
    if (oldscore===winscore) {
      gameover = true;
      playbtn1.setAttribute('disabled','disabled');
      playbtn2.setAttribute('disabled','disabled');
      playbtn1.style.backgroundColor="red";
      playbtn2.style.backgroundColor="red";
      
    }
  }

  inputscore.addEventListener('keyup',()=>{
    winscore =Number(inputscore.value);
    wscoredisply.textContent=inputscore.value;
    reset()
  })

function reset() {
  p1score=0;
    p2score=0;
    gameover = false;
    play1Score.textContent=0;
    play2Score.textContent=0;
    playbtn1.removeAttribute('disabled');
      playbtn2.removeAttribute('disabled');
      playbtn1.style.backgroundColor="green";
      playbtn2.style.backgroundColor="green";
    
}

  resetbtn.addEventListener('click',reset);


