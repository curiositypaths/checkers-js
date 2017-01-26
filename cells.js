class Cell {
  constructor(id) {
    this.id = id
    this.piece = null
  }
  color() {
    if ( Math.floor((this.id) / 8) % 2 === 0 ) {
      return this.id % 2 === 0 ? 'white' : 'black'
    }
    else {
      return this.id % 2 === 0 ? 'black' : 'white'
    }

  }

  receivePiece(piece) {
    this.piece = piece
  }
  removePiece(piece) {
    this.piece = null
  }
  occupied() {
    this.piece === null ? false : true
  }
}
