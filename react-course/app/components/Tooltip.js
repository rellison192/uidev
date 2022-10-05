import React from 'react'
import PropTypes from 'prop-types'

export default class Tooltip extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      hovering: false,
    }
    this.mouseOver = this.mouseOver.bind(this)
    this.mouseOut = this.mouseOut.bind(this)
  }
  mouseOver() {
    this.setState({ hovering: true })
  }
  mouseOut() {
    this.setState({ hovering: false })
  }
  render() {
    const { children, element } = this.props
    return (
      <div
        className="tooltip-container"
        onMouseOver={this.mouseOver}
        onMouseOut={this.mouseOut}
      >
        {this.state.hovering && element}
        {children}
      </div>
    )
  }
}
Tooltip.propTypes = {
  children: PropTypes.node.isRequired,
  element: PropTypes.node.isRequired,
}
