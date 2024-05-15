function mousePressed() {
    // Obține coordonatele absolute ale mouse-ului, în raport cu canvas-ul
  let absMouseX = mouseX - width / 3.1;
  let absMouseY = mouseY - height / 4;
  
    if (currentPlayer === p1 || currentPlayer === p2) {
      
        // Calculează indicele celulei pe care a fost făcută clic
      let i = floor(absMouseX / cellSize);
      let j = floor(absMouseY / cellSize);
  
      // Verifică dacă clicul a fost făcut în interiorul tablei de joc
      if (i >= 0 && i < cols && j >= 0 && j < rows) {
        
        // Verifică dacă celula pe care s-a făcut clic este goală și adiacentă jucătorului curent
        if ((i === currentPlayer.x && abs(j - currentPlayer.y) === 1) || (j === currentPlayer.y && abs(i - currentPlayer.x) === 1)) {
          
            // Mută jucătorul la noua poziție
          currentPlayer.x = i;
          currentPlayer.y = j;

          // Schimbă jucătorul curent
          currentPlayer = (currentPlayer === p1) ? p2 : p1;
        }
      }
    }
  }
  