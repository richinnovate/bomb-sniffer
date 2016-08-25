import React, { Component } from 'react'
import Cell from './Cell'
import '../styles/screen.sass'

class App extends Component {
  constructor () {
    super()
    this.state={
      board: [
        [' ', '_' , 'F' , '*' , '@' , '3' , ' ' , ' '],
        [' ', '_' , 'F' , '*' , '@' , '3' , ' ' , ' '],
        [' ', '_' , 'F' , '*' , '@' , '3' , ' ' , ' '],
        [' ', '_' , 'F' , '*' , '@' , '3' , ' ' , ' '],
        [' ', '_' , 'F' , '*' , '@' , '3' , ' ' , ' '],
        [' ', '_' , 'F' , '*' , '@' , '3' , ' ' , ' '],
        [' ', '_' , 'F' , '*' , '@' , '3' , ' ' , ' '],
        [' ', '_' , 'F' , '*' , '@' , '3' , ' ' , ' ']
      ]
    }
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
