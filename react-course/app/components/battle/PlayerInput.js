import React from 'react'
import PropTypes from 'prop-types'

export default class PlayerInput extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
  }
  state = {
    username: '',
  }
  handleChange = (event) => {
    this.setState({ username: event.target.value })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username)
  }
  render() {
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <label htmlFor="username">{this.props.label}</label>
        <div className="input-row">
          <input
            type="text"
            id="username"
            placeholder="Github Username"
            autoComplete="off"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <button
            className="btn link"
            type="submit"
            disabled={!this.state.username}
          >
            Submit
          </button>
        </div>
      </form>
    )
  }
}
