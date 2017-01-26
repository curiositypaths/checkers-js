var checker

class Board {
  constructor(game = checker) {
    this.size = 8
    this.game = game
    this.cells = []
    this.generateGrid()
  }
  generateGrid() {
    for (let i = 0; i < this.size * this.size ; i++) {
      this.cells.push(new Cell(i))
    }
  }

  generateBoard() {
    let gameBoard = []
    this.cells.forEach(function (cell) {
      gameBoard.push("<div id='" + `${cell.id}` + "' class='cell " + `${cell.color()}` + "'></div>")
    })
    for (let i = 1 ; i <= this.size; i++) {
      $('.container').append(`${"<div class='row' id='row-" + i + "'></div>"}`)
      for (let c = 1; c <= this.size; c++) {
        $(`#row-${i}`).append(gameBoard[(c + i*8)-1])
      }
    }
  }
  renderBoard() {

  }
}
