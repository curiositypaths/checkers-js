var game = new Checkers
var board = new Board(game)
board.generateBoard()
var playerOne = new Player('blue', board)
var playerTwo = new Player('red', board)
board.addPlayers(playerOne,playerTwo)
board.placePieces()
board.renderCells()
board.whosturn = board.players[0]

function findPiece(element) {
  var id = element[0].getAttribute('id').split('-')
  var playerObject = null
  for ( player in board.players) {
    if (id[0] === board.players[player].color) {
      playerObject = board.players[player]
    }
  }
  return playerObject.pieces[id[1]]
}

function addDragEventListener() {
  $(".piece").draggable({ cursor: "crosshair", revert: "invalid", start: function(){
          $(this).data("origPosition",$(this).position());
          }});
}
addDragEventListener()

  $(".cell").droppable({
    drop: function(event, ui) {
      var dropped = ui.draggable;
      var droppedOn = $(this);
      if( board.status(dropped, droppedOn) ) {
        $(dropped).detach().css({top: 1,left: 1}).appendTo(droppedOn);
      }
      else {
        alert("This is not a valid move!")
        var dropped = ui.draggable;
        var droppedOn = $(this);
        var objCell = board.cells[parseInt(droppedOn[0].getAttribute('id')) - 1]
        dropped.remove()
        findPiece(dropped).cell.render()
        // Change this to only add to piece that was moved
        addDragEventListener()
      }
    },
  });
