function resetGame(){
    p1 = new Player(floor(cols / 2), 0, color("cyan")); // Jucătorul turcoaz
    p2 = new Player(floor(cols / 2), rows - 1, color("beige")); // Jucătorul bej
    currentPlayer = p1;

    
}