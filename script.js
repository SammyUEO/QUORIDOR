let cols = 9, rows = 9;
let cellSize = 40;
let p1, p2, currentPlayer;
let board;
let walls = [];
let mode = 'human-human'; // modul implicit
let placingWall = false;

function setup() {
  createCanvas(1000, 700);
  board = new Board(cols, rows);
  createButtons();
  resetGame();
}

function draw() {
  background(150);
  fill(110, 60, 19);
  noStroke();
  ellipse(width / 2, height / 2, cellSize * (cols + 5));
  translate(width / 3.1, height / 4);
  board.display();
  p1.display();
  p2.display();
  for (let wall of walls) {
    wall.display();
  }
  checkWin();

  // Afișare a cui e rândul
  fill(currentPlayer.color);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text("Current Turn: " + (currentPlayer === p1 ? "Player 1" : "Player 2"), width / 6, height - 840);

  // AI Move
  if (mode === 'human-computer' && currentPlayer === p2) {
    aiMoveModerate(); // Schimbare mod de joc AI
  }

  // Afișează mișcările posibile
  showPossibleMoves();
}

function createButtons() {
  let humanHumanButton = createButton('Human vs Human');
  humanHumanButton.position(350, 10);
  humanHumanButton.mousePressed(() => mode = 'human-human');

  let humanComputerButton = createButton('Human vs Computer');
  humanComputerButton.position(350, 60);
  humanComputerButton.mousePressed(() => mode = 'human-computer');

  let placeWallButton = createButton('Place Wall');
  placeWallButton.position(600, 60);
  placeWallButton.mousePressed(() => placingWall = !placingWall);
}

function checkWin() {
  if (p1.y === rows - 1) {
    noLoop();
    alert("Jucătorul turcoaz a câștigat!");
  } else if (p2.y === 0) {
    noLoop();
    alert("Jucătorul bej a câștigat!");
  }
}


// Funcție pentru verificarea mișcărilor valide ale jucătorilor
function validMove(x1, y1, x2, y2) {
  return ((x2 === x1 && abs(y2 - y1) === 1) || (y2 === y1 && abs(x2 - x1) === 1)) &&
         !board.isWallBetween(x1, y1, x2, y2);
}

// Funcție pentru verificarea prezenței zidurilor între două poziții
function isWallBetween(x1, y1, x2, y2) {
  for (let wall of walls) {
    if ((wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x2 && wall.y2 === y2) ||
        (wall.x1 === x2 && wall.y1 === y2 && wall.x2 === x1 && wall.y2 === y1)) {
      return true;
    }
  }
  return false;
}

function showPossibleMoves() {
  // Calculează poziția relativă a mouse-ului în cadrul tablei de joc
  let absMouseX = mouseX - width / 3.1;
  let absMouseY = mouseY - height / 4;

  // Verifică dacă mouse-ul este în afara limitelor tablei
  if (absMouseX < 0 || absMouseY < 0 || absMouseX > cols * cellSize || absMouseY > rows * cellSize) return;

  // Calculează indicele celulei în care se află mouse-ul
  let i = floor(absMouseX / cellSize);
  let j = floor(absMouseY / cellSize);

  // Verifică dacă jucătorul curent poate face o mișcare validă către celula respectivă
  if (currentPlayer.validMove(i, j)) {
    // Dacă mișcarea este validă, desenează un dreptunghi semi-transparent pentru a indica celula posibilă
    fill(0, 255, 0, 100);  // Culoare verde cu transparență
    noStroke();            // Fără contur
    rect(i * cellSize, j * cellSize, cellSize, cellSize);  // Desenează dreptunghiul
  }
}

