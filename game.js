class Checkers {
  constructor() {
    this.name = 'Checkers'
  }

  validMove(destination,piece) {
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
}
