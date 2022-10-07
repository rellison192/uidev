import React from 'react'
import PropTypes from 'prop-types'

export default class Hover extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
  }
  state = {
    hovering: false,
  }
  mouseOver = () => {
    this.setState({ hovering: true })
  }
  mouseOut = () => {
    this.setState({ hovering: false })
  }
  render() {
    return (
      <div
        className="hover-container"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        {this.props.children(this.state.hovering)}
      </div>
    )
  }
}
