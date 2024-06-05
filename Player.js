class Player {
  constructor(px, py, color) {
    this.x = px;
    this.y = py;
    this.color = color;
  }

  display() {
    fill(this.color);
    noStroke();
    ellipse(this.x * cellSize + cellSize / 2, this.y * cellSize + cellSize / 2, cellSize * 0.8);
  }

  validMove(i, j) {
    return (i === this.x && abs(j - this.y) === 1) || (j === this.y && abs(i - this.x) === 1);
  }

  move(i, j) {
    this.x = i;
    this.y = j;
  }
}