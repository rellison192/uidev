import React from 'react'
import PlayerInput from './PlayerInput'
import PlayerPreview from './PlayerPreview'
import Instructions from './Instructions'
import Results from './Results'

export default class Battle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      playerOne: null,
      playerTwo: null,
      battle: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }
  handleSubmit(id, player) {
    this.setState({ [id]: player })
  }
  handleReset(id) {
    this.setState({ [id]: null })
  }
  render() {
    const { playerOne, playerTwo, battle } = this.state
    const disabled = !playerOne || !playerTwo
    if (battle) {
      return <Results playerOne={playerOne} playerTwo={playerTwo} />
    }

    return (
      <main className="stack main-stack">
        <div className="split">
          <h2>Players</h2>
          <button
            type="button"
            className="btn primary"
            disabled={disabled}
            onClick={() => this.setState({ battle: true })}
          >
            Battle
          </button>
        </div>
        <section className="grid">
          {!playerOne ? (
            <PlayerInput
              label="Player One"
              onSubmit={(player) => this.handleSubmit('playerOne', player)}
            />
          ) : (
            <PlayerPreview
              onReset={() => this.handleReset('playerOne')}
              label="Player One"
              username={playerOne}
            />
          )}
          {!playerTwo ? (
            <PlayerInput
              label="Player Two"
              onSubmit={(player) => this.handleSubmit('playerTwo', player)}
            />
          ) : (
            <PlayerPreview
              label="Player Two"
              username={playerTwo}
              onReset={() => this.handleReset('playerTwo')}
            />
          )}
        </section>
        <Instructions />
      </main>
    )
  }
}
