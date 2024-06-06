class Board {
  constructor(bCols, bRows) {
    this.cols = bCols;
    this.rows = bRows;
    this.grid = Array.from({ length: bCols }, () => Array(bRows).fill(0));
  }

  display() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let x = i * cellSize;
        let y = j * cellSize;
        strokeWeight(5);
        stroke(0);
        noFill();
        rect(x, y, cellSize, cellSize);
      }
    }
  }

  addWall(x1, y1, x2, y2, color) {
    walls.push(new Wall(x1, y1, x2, y2, color));
  }

  isWallBetween(x1, y1, x2, y2) {
    for (let wall of walls) {
      if ((wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x2 && wall.y2 === y2) ||
          (wall.x1 === x2 && wall.y1 === y2 && wall.x2 === x1 && wall.y2 === y1)) {
        return true;
      }
      // Additional checks for partial walls
      if (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x1 && wall.y2 === y1 + 1 && x2 === x1 && y2 === y1 + 1) return true;
      if (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x1 + 1 && wall.y2 === y1 && x2 === x1 + 1 && y2 === y1) return true;
      if (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x1 && wall.y2 === y1 - 1 && x2 === x1 && y2 === y1 - 1) return true;
      if (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x1 - 1 && wall.y2 === y1 && x2 === x1 - 1 && y2 === y1) return true;
    }
    return false;
  }
}
