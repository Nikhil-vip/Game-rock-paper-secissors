//////////////DISPLAY////////////////////////
function one() {
  document.getElementById('display2').value = 1;
  showRock();
  computer();
}

function two() {
  document.getElementById('display2').value = 2;
  showPaper();
  computer();
}

function three() {
  document.getElementById('display2').value = 3;
  showScissors();
  computer();
}

////////computer choice//////////
function computer() {
  const c = Math.floor(Math.random() * 3) +1;
  document.getElementById('display3').value = c;
  const n = parseInt(document.getElementById('display2').value);

  if (c === 1) {
    showComputerRock();
  } else if (c === 2) {
    showComputerPaper();
  } else if (c === 3) {
    showComputerScissors();
  }

  if (c === n) {
   document.getElementById('display').innerText="DRAW";
  } else if ((c === 1 && n === 3) || (c === 2 && n === 1) || (c === 3 && n === 2)) {
    document.getElementById('display').innerText="YOU LOST";
  } else {
   document.getElementById('display').innerText="YOU WON";
  }
}
////FOR COMPETITION HANDS///////////////
function showRock() {
  const hand1 = document.getElementById('hand1');
  hand1.className = 'fa-regular fa-hand-back-fist'; // Change to rock icon
}

function showPaper() {
  const hand1 = document.getElementById('hand1');
  hand1.className = 'fa-regular fa-hand'; // Change to paper icon
}

function showScissors() {
  const hand1 = document.getElementById('hand1');
  hand1.className = 'fa-regular fa-hand-scissors'; // Change to scissors icon
}

function showComputerRock() {
  const hand2 = document.getElementById('hand2');
  hand2.className = 'fa-regular fa-hand-back-fist'; // Change to rock icon
}

function showComputerPaper() {
  const hand2 = document.getElementById('hand2');
  hand2.className = 'fa-regular fa-hand'; // Change to paper icon
}

function showComputerScissors() {
  const hand2 = document.getElementById('hand2');
  hand2.className = 'fa-regular fa-hand-scissors'; // Change to scissors icon
}