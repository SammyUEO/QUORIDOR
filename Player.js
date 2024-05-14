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
  }