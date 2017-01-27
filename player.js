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
}
