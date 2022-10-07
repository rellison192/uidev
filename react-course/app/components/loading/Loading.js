import React from 'react'
import PropTypes from 'prop-types'
import Delayed from './Delayed'

export default class Loading extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    speed: PropTypes.number,
  }
  static defaultProps = {
    text: 'Loading',
    speed: 300,
  }
  state = {
    content: this.props.text,
  }
  componentDidMount() {
    const { text, speed } = this.props
    this.interval = window.setInterval(() => {
      this.state.content === text + '...'
        ? this.setState({ content: text })
        : this.setState(({ content }) => ({ content: content + '.' }))
    }, speed)
  }
  componentWillUnmount() {
    window.clearInterval(this.interval)
  }
  render() {
    return (
      <Delayed>
        <p className="loading">{this.state.content}</p>
      </Delayed>
    )
  }
}
