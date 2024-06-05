let cols = 9, rows = 9;
let cellSize = 40;
let p1, p2, currentPlayer;
let board;
let walls = [];
let mode = 'human-human'; // implicit este jucător-jucător

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

  // AI Move
  if (mode === 'human-computer' && currentPlayer === p2) {
    aiMoveEasy(); // Schimbați la aiMoveModerate() pentru mod moderat
  }
}

function createButtons() {
  let humanHumanButton = createButton('Human vs Human');
  humanHumanButton.position(250, 10);
  humanHumanButton.mousePressed(() => mode = 'human-human');

  let humanComputerButton = createButton('Human vs Computer');
  humanComputerButton.position(250, 60);
  humanComputerButton.mousePressed(() => mode = 'human-computer');
}

function resetGame() {
  p1 = new Player(floor(cols / 2), 0, color("cyan"));
  p2 = new Player(floor(cols / 2), rows - 1, color("beige"));
  currentPlayer = p1;
}

function mousePressed() {
  let absMouseX = mouseX - width / 3.1;
  let absMouseY = mouseY - height / 4;

  if (currentPlayer === p1 || (mode === 'human-human' && currentPlayer === p2)) {
    let i = floor(absMouseX / cellSize);
    let j = floor(absMouseY / cellSize);

    if (i >= 0 && i < cols && j >= 0 && j < rows) {
      if (currentPlayer.validMove(i, j)) {
        currentPlayer.move(i, j);
        currentPlayer = (currentPlayer === p1) ? p2 : p1;
      }
    }
  }
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