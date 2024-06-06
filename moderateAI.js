function aiMoveModerate() {
  // Determină cea mai bună mișcare pentru AI folosind backtracking
  let bestMove = backtrackMove(currentPlayer.x, currentPlayer.y, 3); // Caută până la o adâncime de 3
  if (bestMove) {
    currentPlayer.move(bestMove.x, bestMove.y); // Mută jucătorul curent la cea mai bună poziție găsită
    currentPlayer = (currentPlayer === p1) ? p2 : p1; // Schimbă jucătorul curent
  }
}

function backtrackMove(x, y, depth) {
  // Dacă adâncimea este 0, returnează null
  if (depth === 0) return null;
  // Direcțiile posibile de mișcare
  let directions = [
    {dx: 0, dy: 1},
    {dx: 0, dy: -1},
    {dx: 1, dy: 0},
    {dx: -1, dy: 0}
  ];

  // Parcurge fiecare direcție posibilă
  for (let dir of directions) {
    let newX = x + dir.dx;
    let newY = y + dir.dy;

    // Verifică dacă noua poziție este pe tablă
    if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
      if (currentPlayer.validMove(newX, newY)) { // Verifică dacă mișcarea este validă
        let result = backtrackMove(newX, newY, depth - 1); // Apel recursiv cu adâncime redusă
        // Dacă găsește o soluție, returnează noua poziție
        if (result || (currentPlayer === p1 && newY === rows - 1) || (currentPlayer === p2 && newY === 0)) {
          return {x: newX, y: newY};
        }
      }
    }
  }
  return null; // Dacă nu găsește nicio soluție, returnează null
}
