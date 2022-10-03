import React from 'react'
import PlayerInput from './PlayerInput'
import Instructions from './Instructions'
export default class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOne: null,
      playerTwo: null,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(id, player) {
    this.setState({ [id]: player })
  }
  render() {
    const { playerOne, playerTwo } = this.state
    const disabled = !playerOne || !playerTwo
    return (
      <main className="stack main-stack">
        <div className="split">
          <h2>Players</h2>
          <pre>{JSON.stringify(this.state, null, 2)}</pre>
          <button type="button" className="btn primary" disabled={disabled}>
            Battle
          </button>
        </div>
        <section className="grid">
          <PlayerInput
            label="Player One"
            onSubmit={(player) => this.handleSubmit('playerOne', player)}
          />
          <PlayerInput
            label="Player Two"
            onSubmit={(player) => this.handleSubmit('playerTwo', player)}
          />
        </section>
        <Instructions />
      </main>
    )
  }
}
