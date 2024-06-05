function mousePressed() {
  let absMouseX = mouseX - width / 3.1;
  let absMouseY = mouseY - height / 4;

  
  
  if (currentPlayer === p1 || currentPlayer === p2) {
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
