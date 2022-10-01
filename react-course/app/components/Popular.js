import React from 'react'
import Nav from './Nav'
import { fetchPopularRepos } from '../utlis/api'
export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All',
      repos: null,
      error: null,
    }
    this.updateLanguage = this.updateLanguage.bind(this)
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage(selectedLanguage) {
    this.setState({
      selectedLanguage,
      error: null,
    })

    fetchPopularRepos(selectedLanguage)
      .then((repos) => {
        this.setState({
          repos,
          error: null,
        })
      })
      .catch((error) => {
        console.warn('Error Fetching repositories', error)
        this.setState({ error: 'There was an error fetching repositories' })
      })
  }
  render() {
    const { selectedLanguage, error, repos } = this.state
    return (
      <main className="stack main-stack animate-in">
        <div className="split">
          <h2>Popular</h2>
          <Nav
            selected={selectedLanguage}
            onUpdateLanguage={this.updateLanguage}
          />
        </div>
        {error && <p className="text-center error">{error}</p>}
        {repos && JSON.stringify(this.state, null, 2)}
      </main>
    )
  }
}
