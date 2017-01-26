class Player {
  constructor(color) {
    this.color = color
    this.pieces = this.generatePieces()
  }
  generatePieces() {
    let piecesContainer = []
    for (let i=0 ; i < 12 ; i++) {
      piecesContainer.push(new Piece(this))
    }
    return piecesContainer
  }
}
