function aiMoveEasy() {
  let directions = [
    {dx: 0, dy: 1},
    {dx: 0, dy: -1},
    {dx: 1, dy: 0},
    {dx: -1, dy: 0}
  ];

  while (true) {
    let dir = random(directions);
    let newX = currentPlayer.x + dir.dx;
    let newY = currentPlayer.y + dir.dy;

    if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
      if (currentPlayer.validMove(newX, newY)) {
        currentPlayer.move(newX, newY);
        currentPlayer = (currentPlayer === p1) ? p2 : p1;
        break;
      }
    }
  }
}