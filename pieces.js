class Piece {
  constructor(player,cell = null) {
    this.player = player
    this.cell = cell
  }
  alive() {
    return this.cell !== null
  }
}
