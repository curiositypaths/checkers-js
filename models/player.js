class Player {
  constructor(color, board) {
    this.color = color
    this.pieces = this.generatePieces()
    this.board = board
  }
  generatePieces() {
    let piecesContainer = []
    for (let i=0 ; i < 12 ; i++) {
      piecesContainer.push(new Piece(this,`${this.color}-${i}`))
    }
    return piecesContainer
  }

  activePieceCount() {
    let count = 0
    for (var i = 0; i < this.pieces.length; i++) {
      if ( this.pieces[i].cell !== null ) {
        count += 1
      }
    }
    return count
  }
}
