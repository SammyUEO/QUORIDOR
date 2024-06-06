function aiMoveEasy() {
  // Definește direcțiile posibile de mișcare
  let directions = [
    {dx: 0, dy: 1},  // În jos
    {dx: 0, dy: -1}, // În sus
    {dx: 1, dy: 0},  // Dreapta
    {dx: -1, dy: 0}  // Stânga
  ];

  
  while (true) {
    // Selectează o direcție aleatoare dintre cele posibile
    let dir = random(directions);
    // Calculează noile coordonate bazate pe direcția aleasă
    let newX = currentPlayer.x + dir.dx;
    let newY = currentPlayer.y + dir.dy;

    // Verifică dacă noile coordonate sunt în limitele tablei
    if (newX >= 0 && newX < cols && newY >= 0 && newY < rows) {
      // Verifică dacă mișcarea către noile coordonate este validă
      if (currentPlayer.validMove(newX, newY)) {
        currentPlayer.move(newX, newY);
        
        // Schimbă jucătorul curent (de la p1 la p2 sau invers)
        currentPlayer = (currentPlayer === p1) ? p2 : p1;
        break;
      }
    }
  }
}
