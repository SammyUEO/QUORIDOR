class Wall {
    
    constructor(wx1, wy1, wx2, wy2) {
      this.x1 = wx1;
      this.y1 = wy1;
      this.x2 = wx2;
      this.y2 = wy2;
    }
  
    display() {
      stroke(0);
      line(this.x1 * cellSize, this.y1 * cellSize, this.x2 * cellSize, this.y2 * cellSize);
    }
  }
  