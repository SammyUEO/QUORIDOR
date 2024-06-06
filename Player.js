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

  validMove(i, j) {
    if (!validMove(this.x, this.y, i, j)) {
      return false;
    }

    // Check if the move is jumping over the other player
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

  move(i, j) {
    let moveResult = this.validMove(i, j);
    if (typeof moveResult === 'object') {
      this.x = moveResult.x;
      this.y = moveResult.y;
    } else if (moveResult) {
      this.x = i;
      this.y = j;
    }
  }
}
