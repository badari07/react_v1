import React from 'react'

class Mytitle extends React.Component {
  render () {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.title}</h1>
      </div>

    )
  }
}

export default Mytitle
