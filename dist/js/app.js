//Dom elements
const rockIcon = document.querySelector('#rock-icon');
const paperIcon = document.querySelector('#paper-icon');
const scissorIcon = document.querySelector('#scissor-icon');
const pickedIcon = document.querySelector('#picked-icon');
const houseIcon = document.querySelector('#house-icon');
const houseBlank = document.querySelector('#house-blank');
const selector = document.querySelector('#selector');
const played = document.querySelector('#played');

const pickedImg = document.querySelector('#picked');
const pickedFrameOne = document.querySelector('#picked-frame-one');
const pickedFrameTwo = document.querySelector('#picked-frame-two');
const youPickedTile = document.querySelector('#you-picked');

const housePickedTile = document.querySelector('#house-picked');
const housePickedImg = document.querySelector('#house-picked-icon');
const houseFrameOne = document.querySelector('#house-frame-one');
const houseFrameTwo = document.querySelector('#house-frame-two');

const youWinRing = document.querySelector('#you-win-ring');
const houseWinRing = document.querySelector('#house-win-ring');
const resultTile = document.querySelector('#result-tile');
const winLabel = document.querySelector('#win-label');

const replayButton = document.querySelector('#replay-btn');
const rulesButton = document.querySelector('#rules-btn');
const rulesModal = document.querySelector('#rules-modal');
const closeButton = document.querySelector('#close-btn');

const winCount = document.querySelector('#wins');
const drawCount = document.querySelector('#draws');
const lossCount = document.querySelector('#losses');

let wins = 0;
let draws = 0;
let losses = 0;
sessionStorage.setItem('wins', 0);
sessionStorage.setItem('draws', 0);
sessionStorage.setItem('losses', 0);

const advance = (selection) => {
  selector.style.display = 'none';
  played.style.display = 'flex';

  let houseChoice = Math.floor(Math.random() * (4 - 1) + 1);
  console.log(houseChoice);

  let result = '';
  switch (houseChoice) {
    case 1:
      //House picks rock

      //Set house icon
      housePickedImg.src = '/dist/img/icon-rock.svg';
      houseFrameOne.style.backgroundColor = 'hsl(349, 70%, 56%)';
      houseFrameTwo.style.backgroundColor = 'hsl(349, 59%, 37%)';

      //Set result
      result =
        selection === 'paper'
          ? 'YOU WIN'
          : selection === 'rock'
          ? 'DRAW'
          : 'YOU LOSE';

      winLabel.innerText = result;

      //Reveal winner
      setTimeout(() => {
        switch (result) {
          case 'YOU WIN':
            wins++;
            sessionStorage.setItem('wins', wins);
            youWinRing.style.display = 'block';
            break;

          case 'YOU LOSE':
            losses++;
            sessionStorage.setItem('losses', losses);
            houseWinRing.style.display = 'block';
            break;

          default:
            draws++;
            sessionStorage.setItem('draws', draws);
            break;
        }
      }, 2500);

      break;

    case 2:
      //House picks paper

      //Set house icon
      housePickedImg.src = '/dist/img/icon-paper.svg';
      houseFrameOne.style.backgroundColor = 'hsl(230, 89%, 65%)';
      houseFrameTwo.style.backgroundColor = 'hsl(230, 56%, 50%)';

      //Set result
      result =
        selection === 'scissors'
          ? 'YOU WIN'
          : selection === 'paper'
          ? 'DRAW'
          : 'YOU LOSE';

      winLabel.innerText = result;

      //Reveal winner
      setTimeout(() => {
        switch (result) {
          case 'YOU WIN':
            wins++;
            sessionStorage.setItem('wins', wins);
            youWinRing.style.display = 'block';
            break;

          case 'YOU LOSE':
            losses++;
            sessionStorage.setItem('losses', losses);
            houseWinRing.style.display = 'block';
            break;

          default:
            draws++;
            sessionStorage.setItem('draws', draws);

            break;
        }
      }, 2500);

      break;
    default:
      //House picks scissors

      //Set house icon
      housePickedImg.src = '/dist/img/icon-scissors.svg';
      houseFrameOne.style.backgroundColor = 'hsl(40, 84%, 53%)';
      houseFrameTwo.style.backgroundColor = 'hsl(39, 91%, 38%)';

      //Set result
      result =
        selection === 'rock'
          ? 'YOU WIN'
          : selection === 'scissors'
          ? 'DRAW'
          : 'YOU LOSE';

      winLabel.innerText = result;

      //Reveal winner
      setTimeout(() => {
        switch (result) {
          case 'YOU WIN':
            wins++;
            sessionStorage.setItem('wins', wins);
            youWinRing.style.display = 'block';
            break;

          case 'YOU LOSE':
            losses++;
            sessionStorage.setItem('losses', losses);
            houseWinRing.style.display = 'block';
            break;

          default:
            draws++;
            sessionStorage.setItem('draws', draws);

            break;
        }
      }, 2500);

      break;
  }

  //Player selection
  switch (selection) {
    case 'rock':
      pickedImg.src = '/dist/img/icon-rock.svg';
      pickedFrameOne.style.backgroundColor = 'hsl(349, 70%, 56%)';
      pickedFrameTwo.style.backgroundColor = 'hsl(349, 59%, 37%)';
      break;
    case 'paper':
      pickedImg.src = '/dist/img/icon-paper.svg';
      pickedFrameOne.style.backgroundColor = 'hsl(230, 89%, 65%)';
      pickedFrameTwo.style.backgroundColor = 'hsl(230, 56%, 50%)';
      break;

    default:
      pickedImg.src = '/dist/img/icon-scissors.svg';
      pickedFrameOne.style.backgroundColor = 'hsl(40, 84%, 53%)';
      pickedFrameTwo.style.backgroundColor = 'hsl(39, 91%, 38%)';
  }

  //Slide icons apart
  setTimeout(() => {
    youPickedTile.style.transform = 'translateX(-45%)';
    housePickedTile.style.transform = 'translateX(45%)';
  }, 500);

  //Reveal house icon
  setTimeout(() => {
    houseBlank.style.display = 'none';
    houseIcon.style.display = 'block';
  }, 2000);

  //Reveal result and update score
  setTimeout(() => {
    resultTile.style.display = 'flex';
    winCount.innerText = sessionStorage.getItem('wins');
    drawCount.innerText = sessionStorage.getItem('draws');
    lossCount.innerText = sessionStorage.getItem('losses');
  }, 2500);
};

//Listners
rockIcon.addEventListener('click', () => advance('rock'));
paperIcon.addEventListener('click', () => advance('paper'));
scissorIcon.addEventListener('click', () => advance('scissors'));

rulesButton.addEventListener('click', () => {
  rulesModal.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  rulesModal.style.display = 'none';
});

window.onclick = function (event) {
  if (event.target == rulesModal) {
    rulesModal.style.display = 'none';
  }
};

//Play again
replayButton.addEventListener('click', () => {
  played.style.display = 'none';
  selector.style.display = 'block';

  houseBlank.style.display = 'block';
  houseIcon.style.display = 'none';

  resultTile.style.display = 'none';
  youWinRing.style.display = 'none';
  houseWinRing.style.display = 'none';

  housePickedTile.style.transform = 'translateX(0%)';
  youPickedTile.style.transform = 'translateX(0%)';
});
