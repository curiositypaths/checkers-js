class BoardController {
  constructor(board) {
    var playerOne = new Player('blue', board)
    var playerTwo = new Player('red', board)
    board.generateBoard()
    board.addPlayers(playerOne,playerTwo)
    board.placePieces()
    board.renderCells()
    this.addDragEventListener()
    this.addDropListiners()
    this.board = board
  }

  addDragEventListener() {
    $(".piece").draggable({ cursor: "crosshair", revert: "invalid", start: function(){
      $(this).data("origPosition",$(this).position());
    }});
  }

  addDropListiners() {
    $(".cell").droppable({
      drop: function(event, ui) {
        var dropped = ui.draggable;
        var droppedOn = $(this);
        if( board.status(dropped, droppedOn) ) {
          $(dropped).detach().css({top: 1,left: 1}).appendTo(droppedOn);
          if (board.findPiece(dropped).king) {
            if (board.findPiece(dropped).player.color === 'blue' ) {
              dropped.addClass('king-blue')
            }
            else {
              dropped.addClass('king-red')
            }
          }
        }
        else {
          var dropped = ui.draggable;
          var droppedOn = $(this);
          var objCell = board.cells[parseInt(droppedOn[0].getAttribute('id')) - 1]
          dropped.remove()
          board.findPiece(dropped).cell.render()
          // Change this to only add to piece that was moved
          boardController.addDragEventListener()
        }
      },
    });
  }
}
