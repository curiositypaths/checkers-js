var checker

class Board {
  constructor(game = checker) {
    this.size = 8
    this.game = game
    this.cells = []
    this.generateGrid()
    this.players = []
  }

  addPlayers(playerOne, playerTwo) {
    this.players = [playerOne, playerTwo]
  }

  generateGrid() {
    for (let i = 0; i < this.size * this.size ; i++) {
      this.cells.push(new Cell(i))
    }
  }

  generateBoard() {
    let gameBoard = []
    this.cells.forEach(function (cell) {
      gameBoard.push("<div id='" + `${cell.id}` + "' class='cell " + `${cell.color()}` + "'></div>")
    })
    for (let i = 1 ; i <= this.size; i++) {
      $('.container').append(`${"<div class='row' id='row-" + i + "'></div>"}`)
      for (let c = 1; c <= this.size; c++) {
        $(`#row-${i}`).append(gameBoard[(c + i*8)-9])
      }
    }
  };

  placePieces() {
    var count = 0
    for (let i = 0; i < this.players[0].pieces.length * 2; i+=2) {
      if ( Math.floor(i / 8) % 2 === 0 ) {
        this.cells[i].receivePiece(this.players[0].pieces[count])
        this.players[0].pieces[count].receiveCell(this.cells[i])
        count++
      }
      else {
        this.cells[i+1].receivePiece(this.players[0].pieces[count])
        this.players[0].pieces[count].receiveCell(this.cells[i+1])
        count++
      }
    }
    count = 0
    for (let i = this.size * this.size - 1; i >= this.size * this.size - this.players[1].pieces.length * 2; i-=2) {
        if ( Math.floor(i / 8) % 2 === 0 ) {
          this.cells[i-1].receivePiece(this.players[1].pieces[count])
          this.players[1].pieces[count].receiveCell(this.cells[i-1])
          count++
        }
        else {
          this.cells[i].receivePiece(this.players[1].pieces[count])
          this.players[1].pieces[count].receiveCell(this.cells[i])
          count++
        }
    }
  }

  renderCells() {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].render()
    }
  }

  // markCellsAsDroppable() {
  //   $('.white').droppable({
  //   accept: '.piece',
  //   drop: function(event, ui) {
  //     debugger
  //     var dropped = ui.draggable;
  //     var droppedOn = $(this);
  //     board.dropIfValid(dropped,droppedOn)
  //   }})
  // }

  // dropIfValid(dropped,droppedOn) {
  //   $(dropped).detach().css({top: 0,left: 0}).appendTo(droppedOn);
  // }



  // markPiecesAsDraggable() {
  //   $('.piece').draggable({cursor: 'crosshair', revert:'invalid'})
  //   $('.piece').on('dragstart',function() {board.pieceBeingMoved = event.target.id})
  // }

  status(piece, cell) {
    var objCell = board.cells[parseInt(cell[0].getAttribute('id'))]
    var objPiece = findPiece(piece)
    if (board.game.validMove(objCell, objPiece) || board.game.validJump(objCell, objPiece)) {
      board.game.move(objCell, objPiece)
      return true
    }

  }





}
