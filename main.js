var board = new Board
board.generateBoard()
var playerOne = new Player('blue', board)
var playerTwo = new Player('red', board)
board.addPlayers(playerOne,playerTwo)
board.placePieces()
board.renderCells()

$( ".piece" ).draggable();
