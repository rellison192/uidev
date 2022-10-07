import React from 'react'
import PropTypes from 'prop-types'
export default class Delayed extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    wait: PropTypes.number,
  }
  static defaultProps = {
    wait: 300,
  }
  state = {
    show: false,
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
