import React, { Component } from 'react'
import { Select } from 'rebass'

class Home extends Component {
  _handleClick = () => {
    let select = document.querySelector("select[name='difficulty_level']")
    let difficulty = select.value
    this.props.navigate('game', difficulty)
  }
  render () {
    return <div className="Home">
    <h1>MineSniffer&trade;</h1>
      <Select
        label="Select level of Difficulty"
        name="difficulty_level"
        options={[{children: 'Hard', value: 2}, {children: 'Medium', value: 1}, {children: 'Easy', value: 0}]}
        rounded
      />
      <br />
      <button onClick={this._handleClick}>Safe Sweeping!</button>
    </div>
  }
}

Home.propTypes = {
  navigate: React.PropTypes.func.isRequired
}

export default Home
