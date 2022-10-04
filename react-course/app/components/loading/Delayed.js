import React from 'react'
import PropTypes from 'prop-types'
export default class Delayed extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      show: false,
    }
  }
  componentDidMount() {
    this.timeout = window.setTimeout(() => {
      this.setState({ show: true })
    }, this.props.wait)
  }
  componentWillUnmount() {
    window.clearTimeout(this.timeout)
  }
  render() {
    return this.state.show === true ? this.props.children : null
  }
}

Delayed.propTypes = {
  children: PropTypes.node.isRequired,
  wait: PropTypes.number,
}
Delayed.defaultProps = {
  wait: 300,
}
