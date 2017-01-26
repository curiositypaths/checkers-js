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
    return this.piece === null ? false : true
  }

  render() {

    if (this.occupied()) {
      if ( $(`#${this.id}`)[0].childNodes.length === 0 ) {
        //render a piece *** in future check if that piece is a king
        $(`#${this.id}`).append("<div class='piece piece-" + `${this.piece.player.color}` + "'></div>")
      }
    }
    else {
      if ( $(`#${this.id}`)[0].childNodes.length === 1 ) {
        //take away a piece *** in future check if that piece is a king
        $(`#${this.id}`)[0].childNodes[0].remove()
      }
    }
  }

}
