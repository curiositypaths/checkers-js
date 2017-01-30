class Checkers {
  constructor() {
    this.name = 'Checkers'
  }

  validMove(destination,piece) {
    if (this.cellIsOccupied(destination) || piece.player.color !== board.players[board.turn % 2].color) {
      return false
    }

    var leftColumn = piece.cell.id % 8 === 0
    var rightColumn = (piece.cell.id + 1) % 8 === 0

    var upLeft = (destination.id === piece.cell.id - 9) && !leftColumn
    var upRight = (destination.id === piece.cell.id - 7) &&  !rightColumn
    var downLeft = (destination.id === piece.cell.id + 9) && !rightColumn
    var downRight = (destination.id === piece.cell.id + 7) && !leftColumn

    switch (piece.direction) {
      case 'down':
        if ( downRight || downLeft ) {
          board.turn += 1;
          board.lastPieceThatJumpped = null;
          return true
        }
        else {
          return false
        }
        break
      case 'up':
        if (upRight || upLeft) {
          board.turn += 1;
          board.lastPieceThatJumpped = null;
          return true
        }
        else {
          return false
        }
        break
      case 'upanddown':
        if ( downRight || downLeft || upLeft || upRight ) {
          board.turn += 1;
          board.lastPieceThatJumpped = null;
          return true
        }
        else {
          return false
        }
        break
      default:
        throw new Error("Perhaps no direction set")
    }
  }

  validJump(destination,piece) {
    if (board.lastPieceThatJumpped !== null && piece.player.color === board.lastPieceThatJumpped.player.color && piece.id === board.lastPieceThatJumpped.id ) {
      board.turn -= 1;
    }

    if (this.cellIsOccupied(destination) || piece.player.color !== board.players[board.turn % 2].color ) {
      return false
    }

    var leftColumn = (piece.cell.id - 1) % 8 === 0
    var rightColumn = (piece.cell.id + 2) % 8 === 0

    var upLeft = (destination.id === piece.cell.id - 18) && !leftColumn
    var upRight = (destination.id === piece.cell.id - 14) &&  !rightColumn
    var downLeft = (destination.id === piece.cell.id + 18) && !rightColumn
    var downRight = (destination.id === piece.cell.id + 14) && !leftColumn

    switch (piece.direction) {
      case 'down':
        if  ( downLeft ) {
          if ( board.cells[piece.cell.id + 9].piece !== null && board.cells[piece.cell.id + 9].piece.player.color !== piece.player.color) {
            this.removeJumpedPiece(9,piece)
            return true
          }
        }
        else if ( downRight ) {
          if ( board.cells[piece.cell.id + 7].piece !== null && board.cells[piece.cell.id + 7].piece.player.color !== piece.player.color) {
            this.removeJumpedPiece(7,piece)
            return true
          }
        }
        else {
          return false
        }
        break
      case 'up':
      if  ( upLeft ) {
        if ( board.cells[piece.cell.id - 9].piece !== null && board.cells[piece.cell.id - 9].piece.player.color !== piece.player.color) {
          this.removeJumpedPiece(-9,piece)
          return true
        }
      }
      else if ( upRight ) {
        if ( board.cells[piece.cell.id - 7].piece !== null && board.cells[piece.cell.id - 7].piece.player.color !== piece.player.color) {
          this.removeJumpedPiece(-7,piece)
          return true
        }
      }
      else {
        return false
      }
        break
      case 'upanddown':
      if  ( upLeft ) {
        if ( board.cells[piece.cell.id - 9].piece !== null && board.cells[piece.cell.id - 9].piece.player.color !== piece.player.color) {
          this.removeJumpedPiece(-9,piece)
          return true
        }
      }
      else if ( upRight ) {
        if ( board.cells[piece.cell.id - 7].piece !== null && board.cells[piece.cell.id - 7].piece.player.color !== piece.player.color) {
          this.removeJumpedPiece(-7,piece)
          return true
        }
      }
      else if  ( downLeft ) {
        if ( board.cells[piece.cell.id + 9].piece !== null && board.cells[piece.cell.id + 9].piece.player.color !== piece.player.color) {
          this.removeJumpedPiece(9,piece)
          return true
        }
      }
      else if ( downRight ) {
        if ( board.cells[piece.cell.id + 7].piece !== null && board.cells[piece.cell.id + 7].piece.player.color !== piece.player.color) {
          this.removeJumpedPiece(7,piece)
          return true
        }
      }
      else {
        return false
      }

        break
      default:
        throw new Error("Perhaps no direction set")
    }
  }

  cellIsOccupied(destination) {
    return destination.piece !== null
  }

  stealablePiece(destination, piece) {

  }

  move(cell, piece) {
    piece.cell.removePiece()
    cell.receivePiece(piece)
  }

  removeJumpedPiece(direction,piece) {
    board.turn += 1;
    board.lastPieceThatJumpped = piece;

    if ( board.cells[piece.cell.id + direction].piece && board.cells[piece.cell.id + direction].piece.king ) {
      if ( board.cells[piece.cell.id + direction].piece.player.color === 'blue' ) {
        $('#blue-pieces').append("<div id='" + `${board.cells[piece.cell.id + direction].piece.id}` + "' class='piece king-blue'></div>")
      }
      else {
        $('#red-pieces').append("<div id='" + `${board.cells[piece.cell.id + direction].piece.id}` + "' class='piece king-red'></div>")
      }
    }
    else {
      if ( board.cells[piece.cell.id + direction].piece.player.color === 'blue' ) {
        $('#blue-pieces').append("<div id='" + `${board.cells[piece.cell.id + direction].piece.id}` + "' class='piece piece-blue'></div>")
      }
      else {
        $('#red-pieces').append("<div id='" + `${board.cells[piece.cell.id + direction].piece.id}` + "' class='piece piece-red'></div>")
      }
    }
    board.cells[piece.cell.id + direction].removePiece()
    board.cells[piece.cell.id + direction].render()
  }
}
