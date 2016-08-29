import React, { Component } from 'react'

class Cell extends Component {
  get _cellType () {
    switch (this.props.type) {
      case ' ': return 'unrevealed'
      case '_': return 'empty'
      case 'F': return 'flagged'
      case '*': return 'bomb'
      case '@': return 'flag-bomb'
      default: return 'numbered'
    }
  }

  handleClick = () => {
    this.props.revealCell(this.props.row, this.props.col)
  }

  handleContextMenu = (event) => {
    event.preventDefault()
    this.props.flagCell(this.props.row, this.props.col)
  }

  render () {
    return <td
      onClick={this.handleClick}
      onContextMenu={this.handleContextMenu} className={this._cellType}>{this.props.type}</td>
  }
}

Cell.propTypes = {
  type: React.PropTypes.string.isRequired,
  row: React.PropTypes.number.isRequired,
  col: React.PropTypes.number.isRequired,
  revealCell: React.PropTypes.function.isRequired,
  flagCell: React.PropTypes.function.isRequired
}

export default Cell
