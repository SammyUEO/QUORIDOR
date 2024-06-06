function mousePressed() {
  let absMouseX = mouseX - width / 3.1;
  let absMouseY = mouseY - height / 4;

  if (currentPlayer === p1 || currentPlayer === p2) {
    let i = floor(absMouseX / cellSize);
    let j = floor(absMouseY / cellSize);

    // Dacă jucătorul plasează un perete și mai are pereți rămași
    if (placingWall && currentPlayer.wallsLeft > 0) {
      if (i >= 0 && i < cols && j >= 0 && j < rows) {
        let wallX = i;
        let wallY = j;
        let direction = prompt("Enter direction (h for horizontal, v for vertical):");

        // Plasarea unui perete orizontal
        if (direction === 'h' && wallX < cols - 1) {
          if (board.isWallBetween(wallX, wallY, wallX + 1, wallY) || 
              board.isWallBetween(wallX + 1, wallY, wallX + 2, wallY)) {
            return;
          }
          let wallColor = currentPlayer.color;
          board.addWall(wallX, wallY, wallX + 2, wallY, wallColor);
          currentPlayer.wallsLeft--;
        } else if (direction === 'v' && wallY < rows - 1) {
          // Plasarea unui perete vertical
          if (board.isWallBetween(wallX, wallY, wallX, wallY + 1) || 
              board.isWallBetween(wallX, wallY + 1, wallX, wallY + 2)) {
            return;
          }
          let wallColor = currentPlayer.color;
          board.addWall(wallX, wallY, wallX, wallY + 2, wallColor);
          currentPlayer.wallsLeft--;
        }
        placingWall = false;
      }
    } else {
      // Dacă nu plasează un perete, verifică mutarea jucătorului
      if (i >= 0 && i < cols && j >= 0 && j < rows) {
        if (currentPlayer.validMove(i, j)) {
          currentPlayer.move(i, j);
          currentPlayer = (currentPlayer === p1) ? p2 : p1;
        }
      }
    }
  }
}