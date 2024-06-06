class Board {
  // Constructorul inițializează dimensiunile tablei și grila
  constructor(bCols, bRows) {
    this.cols = bCols; // Numărul de coloane
    this.rows = bRows; // Numărul de rânduri
    
    // Creează o matrice 2D umplută cu valori de 0 pentru a reprezenta grila
    this.grid = Array.from({ length: bCols }, () => Array(bRows).fill(0));
  }

  // Metoda display desenează tabla de joc
  display() {
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        let x = i * cellSize; // Calcularea poziției x
        let y = j * cellSize; // Calcularea poziției y
        strokeWeight(5); // Setarea grosimii conturului
        stroke(0); 
        noFill(); 
        rect(x, y, cellSize, cellSize); // Desenarea unui dreptunghi
      }
    }
  }

  // Metoda addWall adaugă un perete pe tabla de joc
  addWall(x1, y1, x2, y2, color) {
    walls.push(new Wall(x1, y1, x2, y2, color)); 
  }

  // Metoda isWallBetween verifică dacă există un perete între două puncte
  isWallBetween(x1, y1, x2, y2) {
    for (let wall of walls) {
      // Verifică dacă există un perete direct între (x1, y1) și (x2, y2)
      if ((wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x2 && wall.y2 === y2) ||
          (wall.x1 === x2 && wall.y1 === y2 && wall.x2 === x1 && wall.y2 === y1)) {
        return true;
      }
      // Verifică pereți parțiali pentru diferite direcții
      if (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x1 && wall.y2 === y1 + 1 && x2 === x1 && y2 === y1 + 1) return true;
      if (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x1 + 1 && wall.y2 === y1 && x2 === x1 + 1 && y2 === y1) return true;
      if (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x1 && wall.y2 === y1 - 1 && x2 === x1 && y2 === y1 - 1) return true;
      if (wall.x1 === x1 && wall.y1 === y1 && wall.x2 === x1 - 1 && wall.y2 === y1 && x2 === x1 - 1 && y2 === y1) return true;
    }
    return false; // Dacă nu găsește niciun perete, returnează false
  }
}