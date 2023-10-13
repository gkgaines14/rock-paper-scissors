//dom elements
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
const youWinRing = document.querySelector('#you-win-ring');
const houseWinRing = document.querySelector('#house-win-ring');
const resultTile = document.querySelector('#result-tile');

const advance = (selection) => {
  selector.style.display = 'none';
  played.style.display = 'flex';
  // console.log(rockIcon);
  // console.log(selection);

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

  setTimeout(() => {
    youPickedTile.style.transform = 'translateX(-45%)';
  }, 500);

  setTimeout(() => {
    housePickedTile.style.transform = 'translateX(45%)';
  }, 500);

  setTimeout(() => {
    houseBlank.style.display = 'none';
    houseIcon.style.display = 'block';
  }, 2000);

  setTimeout(() => {
    resultTile.style.display = 'flex';
    youWinRing.style.display = 'block';
  }, 2500);
};

//Listners
rockIcon.addEventListener('click', () => advance('rock'));
paperIcon.addEventListener('click', () => advance('paper'));
scissorIcon.addEventListener('click', () => advance('scissor'));
