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
    piece.cell = this

    if (this.id > 56 && this.piece.player.color === "blue" || this.id < 7 && this.piece.player.color === "red") {
      this.piece.kingMe();
    }
  }

  removePiece() {
    this.piece.removeCell()
    this.piece = null
  }

  occupied() {
    return this.piece === null ? false : true
  }

  render() {
    if (this.occupied()) {
      if ( $(`#${this.id}`)[0].childNodes.length === 0 ) {
        if ( this.piece && this.piece.king ) {
          if ( this.piece.player.color === 'blue' ) {
            $(`#${this.id}`).append("<div id='" + `${this.piece.id}` + "' class='piece king-blue piece-blue'></div>")
          }
          else {
            $(`#${this.id}`).append("<div id='" + `${this.piece.id}` + "' class='piece king-red piece-red'></div>")
          }
        }
        else {
          $(`#${this.id}`).append("<div id='" + `${this.piece.id}` + "' class='piece piece-" + `${this.piece.player.color}` + "'></div>")
        }
      }
    }
    else {
      if ( $(`#${this.id}`)[0].childNodes.length === 1 ) {
        $(`#${this.id}`)[0].childNodes[0].remove()
      }
    }
  }

}
