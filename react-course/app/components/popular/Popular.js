import React from 'react'
import LanguagesSelect from './LanguagesSelect'
import Table from '../table/Table'
import { fetchPopularRepos } from '../../utlis/api'

export default class Popular extends React.Component {
  state = {
    selectedLanguage: 'All',
    repos: null,
    error: null,
  }
  componentDidMount() {
    this.updateLanguage(this.state.selectedLanguage)
  }
  updateLanguage = (selectedLanguage) => {
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
          <LanguagesSelect
            selected={selectedLanguage}
            onUpdateLanguage={this.updateLanguage}
          />
        </div>
        {error && <p className="text-center error">{error}</p>}
        {repos && <Table repos={repos} />}
      </main>
    )
  }
}
