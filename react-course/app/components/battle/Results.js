import React from 'react'
import Card from './Card'
import Loading from '../loading/Loading'
import { Link } from 'react-router-dom'
import { battle } from '../../utlis/api'
import withSearchParams from '../withSearchParams'

class Results extends React.Component {
  state = {
    winner: null,
    loser: null,
    loading: true,
    error: null,
  }
  componentDidMount() {
    const sp = this.props.router.searchParams
    const playerOne = sp.get('playerone')
    const playerTwo = sp.get('playertwo')

    battle([playerOne, playerTwo])
      .then((players) =>
        this.setState({
          loading: false,
          winner: players[0],
          loser: players[1],
          error: null,
        })
      )
      .catch((error) => {
        this.setState({ error, loading: false })
      })
  }
  render() {
    const { winner, loser, loading, error } = this.state

    if (loading === true) return <Loading text="Battle" />
    if (error) return <p className="text-center error">{error}</p>

    return (
      <main className="animate-in stack main-stack">
        <div className="split">
          <h2>Results</h2>
          <Link to="/battle" className="btn secondary">
            Reset
          </Link>
        </div>
        <section className="grid">
          <article className="results-container">
            <Card profile={winner.profile} />
            <p className="results">
              <span>
                {winner.score === loser.score ? 'Tie' : 'Winner'}{' '}
                {winner.score.toLocaleString()}
              </span>
              {winner.score != loser.score && (
                <img
                  width={80}
                  src="https://ui.dev/images/certificate.svg"
                  alt="Certificate"
                />
              )}
            </p>
          </article>
          <article>
            <Card profile={loser.profile} />
            <p className="results">
              <span>
                {winner.score === loser.score ? 'Tie' : 'Loser'}{' '}
                {loser.score.toLocaleString()}
              </span>
            </p>
          </article>
        </section>
      </main>
    )
  }
}

export default withSearchParams(Results)
