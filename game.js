class Checkers {
  constructor() {
    this.name = 'Checkers'
  }

  validMove(destination,piece) {
    if (this.cellIsOccupied(destination)) {
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
        return  ( downRight || downLeft )
        break
      case 'up':
        return  (upRight || upLeft)
        break
      case 'upanddown':
        return  (downRight || downLeft || upLeft || upRight )
        break
      default:
        throw new Error("Perhaps no direction set")
    }
  }

  validJump(destination,piece) {
    if (this.cellIsOccupied(destination)) {
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

            board.cells[piece.cell.id + 9].removePiece()
            board.cells[piece.cell.id + 9].render()
            return true
          }
        }
        else if ( downRight ) {
          if ( board.cells[piece.cell.id + 7].piece !== null && board.cells[piece.cell.id + 7].piece.player.color !== piece.player.color) {
            board.cells[piece.cell.id + 7].removePiece()
            board.cells[piece.cell.id + 7].render()
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
          board.cells[piece.cell.id - 9].removePiece()
          board.cells[piece.cell.id - 9].render()
          return true
        }
      }
      else if ( upRight ) {
        if ( board.cells[piece.cell.id - 7].piece !== null && board.cells[piece.cell.id - 7].piece.player.color !== piece.player.color) {
          board.cells[piece.cell.id - 7].removePiece()
          board.cells[piece.cell.id - 7].render()
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
          board.cells[piece.cell.id - 9].removePiece()
          board.cells[piece.cell.id - 9].render()
          return true
        }
      }
      else if ( upRight ) {
        if ( board.cells[piece.cell.id - 7].piece !== null && board.cells[piece.cell.id - 7].piece.player.color !== piece.player.color) {
          board.cells[piece.cell.id - 7].removePiece()
          board.cells[piece.cell.id - 7].render()
          return true
        }
      }
      else if  ( downLeft ) {
        if ( board.cells[piece.cell.id + 9].piece !== null && board.cells[piece.cell.id + 9].piece.player.color !== piece.player.color) {
          board.cells[piece.cell.id + 9].removePiece()
          board.cells[piece.cell.id + 9].render()
          return true
        }
      }
      else if ( downRight ) {
        if ( board.cells[piece.cell.id + 7].piece !== null && board.cells[piece.cell.id + 7].piece.player.color !== piece.player.color) {
          board.cells[piece.cell.id + 7].removePiece()
          board.cells[piece.cell.id + 7].render()
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
}
