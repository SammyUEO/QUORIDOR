function aiMoveModerate() {
  let bestMove = backtrackMove(currentPlayer.x, currentPlayer.y, 3); //depth de 3
  if (bestMove) {
    currentPlayer.move(bestMove.x, bestMove.y);
    currentPlayer = (currentPlayer === p1) ? p2 : p1;
  }
}

function backtrackMove(x, y, depth) {
  if (depth === 0) return null;
  let directions = [
    {dx: 0, dy: 1},
    {dx: 0, dy: -1},
    {dx: 1, dy: 0},
    {dx: -1, dy: 0}
  ];

  for (let dir of directions) {
    let newX = x + dir.dx;
    let newY = y + dir.dy;

    if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
      if (currentPlayer.validMove(newX, newY)) {
        let result = backtrackMove(newX, newY, depth - 1);
        if (result || (currentPlayer === p1 && newY === rows - 1) || (currentPlayer === p2 && newY === 0)) {
          return {x: newX, y: newY};
        }
      }
    }
  }
  return null;
}

function showPossibleMoves() {
  let absMouseX = mouseX - width / 3.1;
  let absMouseY = mouseY - height / 4;

  if (absMouseX < 0 || absMouseY < 0 || absMouseX > cols * cellSize || absMouseY > rows * cellSize) return;

  let i = floor(absMouseX / cellSize);
  let j = floor(absMouseY / cellSize);

  if (currentPlayer.validMove(i, j)) {
    fill(0, 255, 0, 100);
    noStroke();
    rect(i * cellSize, j * cellSize, cellSize, cellSize);
  }
}