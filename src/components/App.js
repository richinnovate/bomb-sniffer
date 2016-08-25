import React, { Component } from 'react'
import Cell from './Cell'
import '../styles/screen.sass'

const API_URL = 'http://minesweeper-api.herokuapp.com'

class App extends Component {
  constructor () {
    super()
    this.state = {
      board: []
    }
  }

  componentDidMount () {
    window.fetch(`${API_URL}/games?difficulty=0`, {
      method: 'POST'
    }).then((response) => {
      return response.json()
    }).then((data) => {
      this.setState(data)
    })
  }

  render () {
    const rows = this.state.board.map((row, i) => {
      const cells = row.map((cell, j) => {
        return <Cell type={cell} key={j} />
      })
      return <tr key={i}>{cells}</tr>
    })
    return <div>
      <h1>Bomb Sniffer!</h1>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  }
}

export default App
