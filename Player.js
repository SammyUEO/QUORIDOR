class Player {
  constructor(px, py, color) {
    this.x = px;
    this.y = py;
    this.color = color;
    this.wallsLeft = 10; // Fiecare jucător are 10 pereți
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2, cellSize * 0.8);
  }

  // verifica daca mutarea este valida
  validMove(i, j) {

    // verefica daca mutarea e valida pe grila si nu e blocata de un zid
    if (!validMove(this.x, this.y, i, j)) {
      return false;
    }

    // Verifica daca sare peste player
    if (this === p1 && i === p2.x && j === p2.y) {
      let jumpX = p2.x + (p2.x - this.x);
      let jumpY = p2.y + (p2.y - this.y);
      if (validMove(p2.x, p2.y, jumpX, jumpY) && !isWallBetween(p2.x, p2.y, jumpX, jumpY)) {
        return {x: jumpX, y: jumpY};
      }
    } else if (this === p2 && i === p1.x && j === p1.y) {
      let jumpX = p1.x + (p1.x - this.x);
      let jumpY = p1.y + (p1.y - this.y);
      if (validMove(p1.x, p1.y, jumpX, jumpY) && !isWallBetween(p1.x, p1.y, jumpX, jumpY)) {
        return {x: jumpX, y: jumpY};
      }
    }

    return true;
  }
// metoda muta jucatorul la o noua pozitie daca e valida
  move(i, j) {
    let moveResult = this.validMove(i, j);
    //daca e un obiect in fata o sa sara
    if (typeof moveResult === 'object') {
      this.x = moveResult.x;
      this.y = moveResult.y;
    } else if (moveResult) {
      this.x = i;
      this.y = j;
    }
    
  }
}
