var checker

class Board {
  constructor(game = checker) {
    this.size = 8
    this.game = game
    this.cells = []
    this.generateGrid()
    this.players = []
  }

  addPlayers(playerOne, playerTwo) {
    this.players = [playerOne, playerTwo]
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
        $(`#row-${i}`).append(gameBoard[(c + i*8)-9])
      }
    }
  };

  placePieces() {
    for (let i = 0; i < this.players[0].pieces.length * 2; i+=2) {
      if ( Math.floor(i / 8) % 2 === 0 ) {
        for (let p = 0; p < this.players[0].pieces.length; p++) {
          this.cells[i].receivePiece(this.players[0].pieces[p])
          this.players[0].pieces[p].receiveCell(this.cells[i])
        }
      }
      else {
        for (let p = 0; p < this.players[0].pieces.length; p++) {
          this.cells[i+1].receivePiece(this.players[0].pieces[p])
          this.players[0].pieces[p].receiveCell(this.cells[i+1])
        }
      }
    }

    for (let i = this.size * this.size - 1; i >= this.size * this.size - this.players[1].pieces.length * 2; i-=2) {
      for (let p = 0; p < this.players[1].pieces.length; p++) {
        if ( Math.floor(i / 8) % 2 === 0 ) {
          this.cells[i-1].receivePiece(this.players[1].pieces[p])
          this.players[1].pieces[p].receiveCell(this.cells[i-1])
        }
        else {
          this.cells[i].receivePiece(this.players[1].pieces[p])
          this.players[1].pieces[p].receiveCell(this.cells[i])
        }

      }
    }
  }

  renderCells() {
    for (let i = 0; i < this.cells.length; i++) {
      this.cells[i].render()
    }
  }

}
