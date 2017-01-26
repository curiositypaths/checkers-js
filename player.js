class Player {
  constructor(color, board) {
    this.color = color
    this.pieces = this.generatePieces()
    this.board = board
  }
  generatePieces() {
    let piecesContainer = []
    for (let i=0 ; i < 12 ; i++) {
      piecesContainer.push(new Piece(this))
    }
    return piecesContainer
  }

  placePieces() {
    for (var i = 0; i < thispieces.length; i++) {
      thispieces[i]
    }
  }

}
