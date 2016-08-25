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
  render () {
    return <td className={this._cellType}>{this.props.type}</td>
  }
}

Cell.propTypes = {
  type: React.PropTypes.string.isRequired
}

export default Cell
