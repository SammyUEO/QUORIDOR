class Board {
    
    constructor(bCols, bRows) {
      this.cols = bCols;
      this.rows = bRows;
      
    }
  
    display() {

        // desenare de celule
      for (let i = 0; i < this.cols; i++) {
        for (let j = 0; j < this.rows; j++) {
          let x = i * cellSize;
          let y = j * cellSize;
          stroke(0);
          noFill();
          rect(x, y, cellSize, cellSize);
        }
      }
    }
  }
